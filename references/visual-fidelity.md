     1|# Visual Fidelity Standard
     2|
     3|This document defines the "Look" of a AxiomWeb project. Aesthetics are not subjective; they follow these rules.
     4|
     5|## 1. The Grid & Layout
- **The Golden Ratio:** Use asymmetrical but balanced layouts. Avoid "boxed" containers; prefer fluid, full-width cinematic sections.
    - **Whitespace as a Tool:** Whitespace is not "empty"; it is a design element used to create focus and luxury.
    - **Responsive Fluidity:** Use `clamp()` for typography and `rem` for spacing to ensure a seamless transition from 4K monitors to mobile screens.
    - **Visual Rhythm:** Avoid equal padding everywhere. Create a "beat" of tight groupings (8-12px for related elements) paired with generous separations (48-96px between sections).
    - **Anti-Monotony:** Break card-grid repetition. Don't default to "icon + heading + text" grids everywhere; vary card sizes or mix cards with non-card content.
    - **Hierarchy through Space:** Use space alone to draw the eye. The most sophisticated designs achieve rhythm with just space and weight before adding color or size contrast.
    - **Structural Integrity:** Use Flexbox for 1D layouts and Grid for 2D layouts. Avoid arbitrary z-index values (999, 9999)—use a semantic z-index scale (e.g., dropdown $\rightarrow$ modal $\rightarrow$ toast).
     9|
    10|## 2. Typography (The Voice)
    11|- **The Pairing:** Always pair a high-character "Display" font (for headings) with a highly legible "UI" font (for body).
    12|- **Standard:** Geist Sans/Mono is the default recommendation for a modern, high-tech feel.
    13|- **Hierarchy:** Strict adherence to font-weight and scale to create a clear visual path for the user.
    - **Modular Scale:** Use a 5-size system to avoid "muddy" hierarchy: `xs` (0.75rem), `sm` (0.875rem), `base` (1rem), `lg` (1.25-1.5rem), `xl+` (2-4rem). Pick a consistent ratio (e.g., 1.25 or 1.333).
    - **Vertical Rhythm:** Line-height is the base unit. All vertical spacing must be multiples of the body line-height (e.g., if line-height is 24px, margins/padding should be 24px, 48px, etc.).
    - **Readability Measure:** Constrain prose to a `max-width: 65ch` to prevent eye strain on wide screens.
    - **Dark Mode Compensation:** For light text on dark backgrounds, bump line-height by 0.05–0.1 and add letter-spacing (0.01–0.02em) to maintain perceived weight.
    - **Rendering Polish:** Use `text-wrap: balance` for headings and `text-wrap: pretty` for long prose. Enable `font-optical-sizing: auto` for variable fonts.
    - **All-Caps Tracking:** Apply 5–12% letter-spacing (`0.05em` to `0.12em`) to all-caps labels and eyebrows.
    14|
    15|## 3. Color & Lighting
- **Deep Contrast:** Avoid pure #000 or pure #FFF. Use "Deep-Blacks" (#050505) and "Soft-Whites" (#F5F5F5) to prevent eye strain and add depth.
    - **The OKLCH Standard:** Stop using HSL. Use `oklch(lightness chroma hue)` for all colors. It is perceptually uniform, ensuring that lightness steps *look* equal across different hues.
    - **Tinted Neutrals:** Pure gray is dead. Add a tiny chroma value (0.005-0.015) to neutrals, hued toward the brand color, to create subconscious cohesion.
    - **The 60-30-10 Rule:** Manage visual weight: 60% Neutral backgrounds, 30% Secondary colors (text/borders), and 10% Accent (CTAs/highlights). Accent colors work *because* they are rare.
    - **Contrast Logic:** All body text must pass WCAG AA (4.5:1). Avoid "gray text on colored backgrounds"; use a darker shade of the background color or transparency instead.
    - **Dark Mode Depth:** Depth in dark mode comes from surface lightness, not shadows. Use a 3-step surface scale (e.g., 15% / 20% / 25% lightness) using the brand's hue.
    - **Luminous Accents:** Use a single accent color applied via CSS variables. Apply it using "glow" effects (box-shadow, text-shadow) to create a cinematic light source.
    18|
    19|## 4. Inclusive Cinema (Accessibility)
    20|- **Contrast:** All text must pass WCAG AA contrast checks.
    21|- **Motion Sensitivity:** Implement a `prefers-reduced-motion` media query. If active, disable heavy parallax and replace smooth scroll with standard scroll.
    22|- **A11y:** All 3D canvases must have an `aria-label` describing the visual experience.
    23|