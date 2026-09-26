# 🛡️ SentinelX

[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](CONTRIBUTING.md)
[![Contributor Covenant](https://img.shields.io/badge/Contributor%20Covenant-2.1-4baaaa.svg)](CODE_OF_CONDUCT.md)

**SentinelX** is an open-source, highly extensible security assessment platform built for modern engineering and security teams. It streamlines the entire vulnerability management lifecycle—from continuous asset discovery and automated scanning to vulnerability correlation, severity scoring, and remediation tracking.

Whether you are scanning a single API endpoint or monitoring a massive microservices architecture, SentinelX provides the visibility and actionable intelligence needed to secure your infrastructure.

---

## ✨ Key Features

*   **Continuous Asset Discovery:** Automatically index domains, subdomains, cloud resources, and endpoints to maintain a real-time inventory of your attack surface.
*   **Comprehensive Scanning Engine:** Built-in modules for scanning web applications and APIs (REST, GraphQL, gRPC) for OWASP Top 10 vulnerabilities, misconfigurations, and exposed secrets.
*   **Extensible Plugin Architecture:** Easily integrate third-party scanners (e.g., Nmap, Nuclei, ZAP, Trivy) or write custom Python/Go plugins to tailor assessments to your environment.
*   **Intelligent Vulnerability Correlation:** Deduplicate findings from multiple scanning tools to reduce alert fatigue and present a unified view of actual risk.
*   **Dynamic Severity Assignment:** Context-aware risk scoring (CVSS 3.1) that adjusts based on asset criticality, exploitability, and business impact.
*   **Remediation Tracking Dashboard:** A centralized, interactive UI for security and development teams to track open findings, assign tickets, and verify patches.
*   **Automated Reporting:** Generate compliance-ready reports (PDF, CSV, JSON) for executives, auditors, and engineering teams.

---

## 🚀 Getting Started

### Prerequisites
*   Docker & Docker Compose (v2.0+)
*   Node.js (v18+) - *For UI development*
*   Python (v3.10+) or Go (v1.20+) - *For core engine development*

### Quick Start (Docker)
The easiest way to spin up SentinelX is via Docker Compose.

1. **Clone the repository:**
   ```bash
   git clone [https://github.com/GauravKarakoti/SentinelX.git](https://github.com/GauravKarakoti/SentinelX.git)
   cd SentinelX
   ```
2. Start the platform:
```bash
docker-compose up -d
```
3. Access the Dashboard:
Navigate to http://localhost:8080 and log in with default credentials (`admin` / `admin`). `Please change these upon first login!`

## 📖 Architecture Overview
SentinelX is composed of three primary microservices:
1. The Core API (Go): Handles authentication, plugin orchestration, scan scheduling, and data correlation.
2. The Scanner Nodes (Python/Go): Distributed, lightweight workers that execute specific scanning tasks and report back to the core.
3. The Web Dashboard (React/Next.js): The control plane for viewing assets, launching scans, and tracking remediation.

🤝 Contributing
We welcome contributions from the community! Whether it's adding a new scanner plugin, fixing a bug, or improving the documentation, your help makes SentinelX better.

Please review our [Contributing Guidelines](./CONTRIBUTING.md) and our [Code of Conduct](./CODE_OF_CONDUCT.md) before submitting a Pull Request.