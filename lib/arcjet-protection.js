import arcjet, { tokenBucket, shield, detectBot } from "@arcjet/next";

// Main Arcjet instance for general protection
export const aj = arcjet({
  key: process.env.ARCJET_KEY,
  rules: [
    // Shield protection for content and security
    shield({
      mode: "LIVE",
    }),
    detectBot({
      mode: "LIVE",
      allow: [
        "CATEGORY:SEARCH_ENGINE", // Google, Bing, etc
        "GO_HTTP", // For Inngest
      ],
    }),
  ],
});

// Rate limiting for transaction creation (10 per hour)
export const transactionLimiter = arcjet({
  key: process.env.ARCJET_KEY,
  characteristics: ["userId"],
  rules: [
    tokenBucket({
      mode: "LIVE",
      refillRate: 10,
      interval: 3600, // per hour
      capacity: 10,
    }),
  ],
});

// Rate limiting for account creation (5 per day)
export const accountLimiter = arcjet({
  key: process.env.ARCJET_KEY,
  characteristics: ["userId"],
  rules: [
    tokenBucket({
      mode: "LIVE",
      refillRate: 5,
      interval: 86400, // per day
      capacity: 5,
    }),
  ],
});

/**
 * Helper function to check rate limiting in server actions
 * @param {Object} limiter - The Arcjet limiter instance
 * @param {string} userId - User ID to rate limit by
 * @param {string} ip - Client IP address
 * @returns {Object} - { success: boolean, error?: string }
 */
export async function checkRateLimit(limiter, userId, ip) {
  if (!process.env.ARCJET_KEY) {
    // Skip if key not configured
    return { success: true };
  }

  try {
    const decision = await limiter.protect({
      userId,
      ip,
    });

    if (decision.isDenied()) {
      if (decision.reason.isRateLimit()) {
        return {
          success: false,
          error: "Too many requests. Please try again later.",
        };
      }
      if (decision.reason.isBot()) {
        return { success: false, error: "Bot activity detected." };
      }
    }

    return { success: true };
  } catch (error) {
    console.error("Arcjet protection error:", error);
    // Fail open - don't block requests if Arcjet fails
    return { success: true };
  }
}
