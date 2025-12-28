# TS-Playwright-API-UI-Engine 🚀

[![Playwright](https://img.shields.io/badge/Framework-Playwright-2EAD33.svg)](https://playwright.dev/)
[![TypeScript](https://img.shields.io/badge/Language-TypeScript-3178C6.svg)](https://www.typescriptlang.org/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

A professional-grade, unified automation engine designed for high-speed validation of modern web applications. **TS-Playwright-API-UI-Engine** bridges the gap between backend reliability and frontend excellence by combining API and UI testing into a single, type-safe ecosystem.

---

## 🌟 Core Philosophy

Most automation suites suffer from "flakiness" and slow execution. This engine solves that by:
1.  **API-Driven Setup:** Using API calls to bypass UI-heavy setup (e.g., creating users or data via REST) before executing UI tests.
2.  **Strict Typing:** Leveraging TypeScript interfaces to catch script errors during development, not at runtime.
3.  **Unified Context:** Sharing state and authentication between API and UI layers for seamless transitions.

---

## ✨ Key Features

* **🎭 Full Playwright Power:** Native support for Chromium, Firefox, and WebKit.
* **🔗 Integrated API Testing:** Built-in `request` context usage for RESTful API validation.
* **🏗️ Advanced POM:** Robust Page Object Model implementation for scalable UI maintenance.
* **📊 Smart Reporting:** Rich HTML reports with embedded videos, screenshots, and trace logs.
* **🛡️ Type-Safe Data:** Interfaces for API responses and test data to ensure contract consistency.
* **⚡ Parallel Execution:** Optimized worker configuration to reduce CI/CD pipeline time.

---

## 🛠️ Technical Stack

* **Language:** TypeScript (Strict Mode)
* **Test Runner:** Playwright Test
* **Design Pattern:** Page Object Model (POM) & Singleton Utility Pattern
* **CI/CD:** GitHub Actions ready
* **Security:** Dotenv for environment variable management

---

## 📂 Architecture Overview

```text
TS-Playwright-API-UI-Engine/
├── .github/workflows/    # CI/CD pipeline definitions
├── data/                 # Test data (JSON/CSV)
├── lib/                  # Custom API clients and common utilities
├── pages/                # Page Object Models (UI abstraction)
├── specs/                # Test suites
│   ├── api/              # REST API tests
│   ├── e2e/              # Integrated UI + API flows
│   └── ui/               # Component & Layout tests
├── playwright.config.ts  # Engine configuration
└── package.json          # Dependencies & execution scripts
```
---

## 📜 License

Distributed under the **MIT License**. See `LICENSE` for more information. This allows for free use, modification, and distribution in both private and commercial projects.

---

## 📧 Contact

**mashtura Mazed** *Automation Specialist*

[![Email](https://img.shields.io/badge/Email-D14836?style=for-the-badge&logo=gmail&logoColor=white)](mzmashtura@gmail.com)

**Project Link:** [https://github.com/mashtura-m/TS-Playwright-API-UI-Engine](https://github.com/mashtura-m/TS-Playwright-API-UI-Engine)

---
