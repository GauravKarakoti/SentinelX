# Contributing to SentinelX

First off, thank you for considering contributing to SentinelX! It's people like you that make open-source security tools powerful and accessible to everyone. 

This document outlines the process for contributing to the project.

## Table of Contents
1. [Where to Start](#where-to-start)
2. [Reporting Bugs](#reporting-bugs)
3. [Suggesting Enhancements](#suggesting-enhancements)
4. [Local Development Setup](#local-development-setup)
5. [Pull Request Process](#pull-request-process)
6. [Creating Custom Scanner Plugins](#creating-custom-scanner-plugins)
7. [Coding Standards](#coding-standards)

---

## Where to Start

If you are looking for a way to contribute but aren't sure where to begin, check out our issue tracker. Look for issues labeled `good first issue` or `help wanted`. These are specifically curated to be accessible for new contributors.

## Reporting Bugs

If you find a bug in the source code, please help us by submitting an issue to our GitHub Repository. Even better, you can submit a Pull Request with a fix.

**When reporting a bug, please include:**
* A quick summary and/or background.
* Steps to reproduce the behavior.
* Expected vs. actual behavior.
* OS, browser, and environment details (Docker version, Go version, etc.).
* Relevant logs or screenshots.

*Note: If you discover a security vulnerability within SentinelX itself, please DO NOT report it on the public issue tracker. Email security@sentinelx.io instead.*

## Suggesting Enhancements

We welcome suggestions for new features, dashboard widgets, and scanner integrations! To suggest an enhancement:
1. Open a new issue and select the `Feature Request` template.
2. Clearly describe the feature and the problem it solves.
3. Provide mockups or examples if applicable.
4. Explain how this fits into the broader SentinelX ecosystem.

---

## Local Development Setup

To set up a local development environment:

1. **Fork the repo** and clone it locally:
   ```bash
   git clone [https://github.com/GauravKarakoti/SentinelX.git](https://github.com/GauravKarakoti/SentinelX.git)
   ```
2. Install dependencies:
  - Backend: Navigate to `api/` and run `go mod tidy` or `pip install -r requirements.txt` (depending on the service).
  - Frontend: Navigate to `dashboard/` and run `npm install`.
3. Start local services:
We provide a `docker-compose.dev.yml` file to spin up databases (PostgreSQL/Redis) without starting the pre-compiled application containers.
```bash
docker-compose -f docker-compose.dev.yml up -d
```

## Pull Request Process
1. Create a branch: Create a new branch from `main` for your feature or bugfix (e.g., `git checkout -b feature/nmap-plugin` or `git checkout -b fix/dashboard-auth`).
2. Commit your changes: Write clear, descriptive commit messages. We follow conventional commits (e.g., `feat: add nmap integration, fix: resolve JWT expiration bug`).
3. Run the test suite: Ensure all unit and integration tests pass.
```bash
make test
```
4. Update documentation: If your change modifies user-facing behavior, update the `README.md` or the `docs/` folder accordingly.
5. Open a PR: Push your branch to your fork and open a Pull Request against the `main` branch of the upstream repository.
6. Code Review: Maintainers will review your PR. Please be responsive to feedback and ready to make requested changes.

## Creating Custom Scanner Plugins
SentinelX is built to be extensible. To create a new scanner module:
1. Navigate to `plugins/scanners/`.
2. Duplicate the `example-plugin/` directory.
3. Implement the `ScannerInterface` (defined in `pkg/interfaces/scanner.go` or Python equivalent).
4. Ensure your plugin outputs results in the standard SentinelX JSON Vulnerability Format.
5. Update `plugins/README.md` with configuration instructions for your new module.

## Coding Standards
- Go: Follow standard `gofmt` formatting. Use `golangci-lint` before committing.
- Python: Follow PEP-8. Use `black` for formatting and `flake8` for linting.
- React/TypeScript: Use `Prettier` for formatting and follow the established `ESLint` configuration in the `dashboard/` directory.