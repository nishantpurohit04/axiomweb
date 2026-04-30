     1|# Visual Fidelity Standard
     2|
     3|This document defines the "Look" of a AxiomWeb project. Aesthetics are not subjective; they follow these rules.
     4|
     5|## 1. The Grid & Layout
     6|- **The Golden Ratio:** Use asymmetrical but balanced layouts. Avoid "boxed" containers; prefer fluid, full-width cinematic sections.
     7|- **Whitespace as a Tool:** Whitespace is not "empty"; it is a design element used to create focus and luxury.
     8|- **Responsive Fluidity:** Use `clamp()` for typography and `rem` for spacing to ensure a seamless transition from 4K monitors to mobile screens.
     9|
    10|## 2. Typography (The Voice)
    11|- **The Pairing:** Always pair a high-character "Display" font (for headings) with a highly legible "UI" font (for body).
    12|- **Standard:** Geist Sans/Mono is the default recommendation for a modern, high-tech feel.
    13|- **Hierarchy:** Strict adherence to font-weight and scale to create a clear visual path for the user.
    14|
    15|## 3. Color & Lighting
    16|- **Deep Contrast:** Avoid pure #000 or pure #FFF. Use "Deep-Blacks" (#050505) and "Soft-Whites" (#F5F5F5) to prevent eye strain and add depth.
    17|- **Luminous Accents:** Use a single accent color applied via CSS variables. Apply it using "glow" effects (box-shadow, text-shadow) to create a cinematic light source.
    18|
    19|## 4. Inclusive Cinema (Accessibility)
    20|- **Contrast:** All text must pass WCAG AA contrast checks.
    21|- **Motion Sensitivity:** Implement a `prefers-reduced-motion` media query. If active, disable heavy parallax and replace smooth scroll with standard scroll.
    22|- **A11y:** All 3D canvases must have an `aria-label` describing the visual experience.
    23|