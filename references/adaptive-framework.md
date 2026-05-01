# Adaptive Framework: The Decision Tree

This document defines the "Rule of Necessity." The orchestrator must use this matrix to determine the technical scope of the project.

## 1. Project Tiering Matrix

| Tier | Project Type | Primary Goal | Required Modules | Excluded Modules |
| :--- | :--- | :--- | :--- | :--- |
| **Tier 1** | **Showcase** | Purely visual impact, identity, portfolio. | Visual Fidelity, Motion, Atmospheric, Core Engineering | Backend Standard, Security Hardening |
| **Tier 2** | **Brand** | Professional presence, easy content updates. | All Tier 1 + Backend (CMS), Core Engineering (SEO) | High-Security Vault, Payment Gateways |
| **Tier 3** | **Business** | E-commerce, SaaS, Member-sites, High-Transaction. | **ALL MODULES** including Security Hardening and Vault | None |

## 2. The Mood-Matrix (Atmospheric Selection)

The agent must select a mood *before* implementing the 3D/Visual layer.

| Mood | Visual Language | Technical Execution |
| :--- | :--- | :--- |
| **Luxury** | Soft-lighting, Serif fonts, Gold/Deep tones, wide whitespace. | Slow-motion GSAP, Soft-reflection Three.js, subtle floating elements. |
| **Tech** | High-contrast, Mono fonts, Neon/Dark tones, Data-driven. | Fast-snappy GSAP, GLSL Shaders, Particle Systems, Matrix-like effects. |
| **Clean** | Glassmorphism, Sans-serif, High-white space, Soft shadows. | Micro-motions (AnimeJS), subtle blur transitions, minimal 3D depth. |

## 3. Mandatory Tier-Confirmation Protocol
The agent must present the following to the user before starting Phase 1:
*"Based on your request, I have categorized this as a **[Tier X]** project. This means we will implement [List of Modules]. Do you agree with this scope, or should we upgrade/downgrade the tier?"*

## 4. The Impeccable Polishing Loop (Phase 5)
During the "Adaptive Optimization" phase, the agent MUST NOT simply write code and save. They must employ the **Live-Polishing Loop**:
1. **Inject:** Apply a visual change to the live page.
2. **Sensing:** Poll the DOM and capture a visual state (via screenshot/metric).
3. **Tweak:** Adjust spacing, color, or typography based on the Impeccable Visual Standards.
4. **Verify:** Run the `detect-antipatterns` scan.
5. **Commit:** Only once the "Judge" (Detector) returns a pass, save the final code to the file.
