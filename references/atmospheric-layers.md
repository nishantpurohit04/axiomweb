# Atmospheric Layers: 3D & Space

This document defines how to create a sense of depth.

## 1. The Three-Layer System
Every cinematic page must have:
- **Background Layer:** A slow-moving, atmospheric element (e.g., GLSL Shader, Particle Field, Gradient Mesh).
- **Midground Layer:** The actual content (Text, Images, UI).
- **Foreground Layer:** Interactive 3D elements or "Glass" overlays that move with the mouse.

## 2. The Mood-Matrix Implementation
- **Luxury Mood:** Three.js `MeshPhysicalMaterial` with high reflectivity, soft ambient lighting, and slow, floating rotation.
- **Tech Mood:** `Points` and `Line` geometries, additive blending, neon emissive colors, and high-speed particle movements.
- **Clean Mood:** Soft-body shapes, Gaussian blur backgrounds, and minimal 3D depth.

## 3. Spline Integration
- **Usage:** Use Spline for complex, pre-designed 3D scenes.
- **Optimization:** Always use the Spline runtime for performance. Trigger animations via the Spline API linked to GSAP timelines.

## 4. Mobile Adaptation (The Lite Version)
- **LOD (Level of Detail):**
    - **Desktop:** High-poly models, complex shaders, 10,000+ particles.
    - **Mobile:** Low-poly models, simplified shaders, 1,000 particles or a static high-res image.
- **Interactivity:** Replace `onMouseMove` with `deviceorientation` (Gyroscope) for mobile devices.
