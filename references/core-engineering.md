# Core Engineering Standard

This document defines the stability and speed of the site. Beauty without performance is a bug.

## 1. The Tech Stack
- **Framework:** Next.js (App Router).
- **Language:** TypeScript (Strict Mode).
- **Styling:** Tailwind CSS.

## 2. Performance Budget
- **FPS:** $\ge 60\text{fps}$ on Desktop.
- **LCP (Largest Contentful Paint):** $< 2.5\text{s}$.
- **CLS (Cumulative Layout Shift):** $< 0.1$.

## 3. Asset Pipeline (The Weight Problem)
- **Images:** Convert all to WebP or AVIF. Use `next/image` for automatic optimization.
- **3D Models:** Mandatory Draco compression for all GLTF/GLB files.
- **Texturing:** Use KTX2 or Basis Universal for textures to reduce VRAM usage.
- **Delivery:** All assets must be served via a CDN.

## 4. Mobile-First Responsive Flow
- **Fluid Typography:** Use `clamp(min, preferred, max)` for all headings.
- **Adaptive Rendering:** Implement conditional rendering based on screen width to toggle between "Ultra" and "Lite" cinematic layers.
- **Touch-Optimized:** Ensure all touch targets are $\ge 44\text{px}$.
