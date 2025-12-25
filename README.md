💰 Smart Finance Tracker with AI Receipt Scanning
A comprehensive financial management application designed to automate expense tracking and prevent budget overruns. This system leverages Artificial Intelligence to parse physical receipts into digital data and employs an automated notification system to alert users when spending limits are approached.

🌟 Key Features
🤖 AI-Powered Receipt Parsing: Eliminates manual data entry. Users simply upload an image of a bill or receipt, and the integrated AI (using OCR/LLM) automatically extracts key metadata including Merchant Name, Transaction Date, Total Amount, and Category.

📉 Real-time Budget Monitoring: Users can define monthly or category-specific budgets. The system tracks every transaction in real-time to calculate remaining funds.

📧 Intelligent Alert System: Proactive financial health monitoring. The system triggers automated emails to the user when spending thresholds (e.g., 90% of budget) are crossed, helping to prevent accidental overspending.

📊 Visual Analytics: Interactive dashboards provide deep insights into spending habits, category breakdowns, and monthly trends.

🛠️ Technical Architecture
Frontend: React.js, Tailwind CSS, Recharts (for data visualization)

Backend: Node.js, Express.js

Database: MongoDB (NoSQL for flexible document storage)

AI Services: Google Cloud Vision API / Tesseract.js / OpenAI API (for image processing)

Notification Service: Nodemailer (SMTP integration for email alerts)

🚀 Getting Started
Prerequisites
Node.js (v14+)

MongoDB Connection String

API Keys for AI and Email services

Installation
Clone the repository

Bash

git clone https://github.com/Anshuman-Jha/Welth.git
Install Dependencies

Bash

NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/onboarding
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/onboarding

GEMINI_API_KEY=

RESEND_API_KEY=

ARCJET_KEY=
```
