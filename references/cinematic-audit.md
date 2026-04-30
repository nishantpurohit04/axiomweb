# Cinematic Audit: The Zero-Failure Checklist

This is the final gate. The project is not complete until every item is checked.

## 1. Visual & Motion Audit
- [ ] **Temporal Fluidity:** Does the site use Lenis? Is there any "jitter" during scroll?
- [ ] **Spatial Depth:** Are there at least 3 layers (Atmosphere $\rightarrow$ Content $\rightarrow$ Overlay)?
- [ ] **Transition Flow:** Does Barba.js prevent all page flashes?
- [ ] **Micro-Interaction:** Do buttons and links have polished AnimeJS effects?

## 2. Engineering & Performance Audit
- [ ] **Frame Rate:** Does the 3D background maintain $\ge 60\text{fps}$ on Desktop?
- [ ] **Asset Weight:** Are all images WebP/AVIF and models Draco-compressed?
- [ ] **LCP:** Does the main content load in under 2.5 seconds?
- [ ] **Responsive:** Does it maintain a "Cinematic" feel on mobile without lagging?

## 3. Security & Stability Audit (Tiers 2 & 3)
- [ ] **Auth Flow:** Is the login secure and bug-free?
- [ ] **Input Validation:** Do all forms have Zod validation?
- [ ] **Vault Check:** Are all secrets stored in `.env`?
- [ ] **Compliance:** Is there a GDPR-compliant cookie banner and Privacy Policy?

## 4. Accessibility Audit
- [ ] **Contrast:** Does all text pass WCAG AA checks?
- [ ] **A11y:** Do all 3D elements have `aria-labels`?
- [ ] **Reduced Motion:** Does the site respect `prefers-reduced-motion`?

**Final Verdict:** If any item is unchecked, the project is returned to Phase 4 for correction.
