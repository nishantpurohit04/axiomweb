# Backend Standard: The Brain

This document defines the architecture for Tier 2 and Tier 3 projects.

## 1. Architecture
- **API Layer:** Use Next.js Server Actions for simple data mutations and Route Handlers for complex API needs.
- **Data Flow:** Implement a "Single Source of Truth" pattern. Use a global state (e.g., Zustand) to sync backend data with the cinematic frontend.

## 2. Database & Storage
- **Choice:** PostgreSQL (via Prisma/Drizzle) for relational data, or MongoDB for flexible content.
- **Optimization:** Mandatory indexing on frequently queried fields to ensure "instant" load times.
- **Caching:** Implement Redis or Next.js cache tags for high-traffic pages.

## 3. Headless CMS Integration (The Management)
- **Requirement:** Implement a Headless CMS (e.g., Sanity, Contentful, or Strapi) for all Brand/Business sites.
- **Flow:** CMS $\rightarrow$ API $\rightarrow$ Cinematic Frontend. This allows the client to update content without touching the code.

## 4. Authentication
- **Standard:** Use enterprise-grade auth (Clerk, Auth.js, or Firebase Auth).
- **Flow:** JWT-based sessions with secure, HTTP-only cookies.
- **Tier 3:** Implement Multi-Factor Authentication (MFA) for high-transaction sites.
