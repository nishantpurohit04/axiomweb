# Security Hardening: The Vault

This document defines the security protocol for Tier 3 projects. Zero-Trust is the standard.

## 1. The Zero-Trust Perimeter
- **Input Validation:** Every single request must be validated using Zod or a similar schema validator. Never trust client-side data.
- **Sanitization:** Strip all HTML/Script tags from user input to prevent XSS (Cross-Site Scripting).
- **Rate Limiting:** Implement `upstash/ratelimit` or similar to prevent DDoS and Brute Force attacks.

## 2. OWASP Top 10 Defense
- **SQL Injection:** Use Parameterized Queries (via ORMs like Prisma) to prevent database leaks.
- **CSRF:** Implement CSRF tokens for all state-changing requests.
- **Broken Auth:** Enforce strong password policies and secure session timeouts.

## 3. Secret Management
- **No Secrets in Code:** All API keys and DB strings must reside in encrypted `.env` files.
- **Rotation:** Implement a schedule for rotating secret keys.

## 4. Payment Security (E-commerce)
- **PCI Compliance:** Never store credit card data locally. Use Stripe or PayPal's secure elements and webhooks.
- **Webhook Verification:** All payment webhooks must be verified using the provider's cryptographic signature.
