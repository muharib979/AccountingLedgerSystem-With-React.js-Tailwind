💼 A Modular Accounting Ledger System

A Modular Accounting System built with ASP.NET Core (Clean Architecture, CQRS, EF Core, Stored Procedure) and React.js (Vite + TailwindCSS).

🚀 Features

Create Accounts

View Account List

Create Journal Entries (with Debit = Credit validation)

View Journal Entries

View Trial Balance


📷 Screenshots

### Home Page

![Home Page](https://raw.githubusercontent.com/muharib979/AccountingLedgerSystem-With-React.js-Tailwind/main/AccountingLedgerSystem/screenshots/Home.png)


### Create Account
![Create Account](https://raw.githubusercontent.com/muharib979/AccountingLedgerSystem-With-React.js-Tailwind/main/AccountingLedgerSystem/screenshots/create-account.png)
### Accounts List
![Accounts List](https://raw.githubusercontent.com/muharib979/AccountingLedgerSystem-With-React.js-Tailwind/main/AccountingLedgerSystem/screenshots/account-list.png)

### Journal Entries
![Journal Entries](https://raw.githubusercontent.com/muharib979/AccountingLedgerSystem-With-React.js-Tailwind/main/AccountingLedgerSystem/screenshots/journal-entries.png)

### 📄 Journal Entries
![Journal Entry List](https://raw.githubusercontent.com/muharib979/AccountingLedgerSystem-With-React.js-Tailwind/main/AccountingLedgerSystem/screenshots/journalEntry-list.png)


### Trial Balance
![Trial Balance](https://raw.githubusercontent.com/muharib979/AccountingLedgerSystem-With-React.js-Tailwind/main/AccountingLedgerSystem/screenshots/trial-balance.png)



⚒️ Tech Stack


Frontend: React.js (Vite), TailwindCSS, Axios, React Router


🧲 Sample Test Entries

1. Account

{
  "name": "Cash",
  "type": "Asset"
}

2. Journal Entry

{
  "date": "2025-06-22",
  "description": "Opening Balance",
  "lines": [
    { "accountId": 1, "debit": 1000, "credit": 0 },
    { "accountId": 2, "debit": 0, "credit": 1000 }
  ]
}

▶️ Run Instructions

🌐 Frontend (React.js)

Clone the repo:

git clone https://github.com/muharib979/AccountingLedgerSystem-With-React.js-Tailwind.git


Navigate to frontend:

cd AccountingLedgerSystem

Install packages:

npm install

Start the Project:

npm run dev

Visit: http://localhost:5173/




