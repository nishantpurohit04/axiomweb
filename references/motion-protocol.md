# Motion Protocol: The Superpowers

This document defines the technical implementation of motion. Motion is the "weight" of the website.

## 1. Lenis (The Glide)
- **Mandatory:** Implement Lenis for all projects.
- **Config:** `lerp: 0.1`, `duration: 1.2`, `smoothWheel: true`.
- **Sync:** Ensure GSAP `ScrollTrigger` is synced with the Lenis scroll instance to prevent "jitter."

## 2. GSAP (The Conductor)
- **Timelines:** Never use `setTimeout`. Use `gsap.timeline()` to chain animations.
- **Easing:** Use `power3.out` or `expo.out` for a premium, organic feel. Avoid `linear` easing.
- **ScrollTrigger:** Use `scrub: true` for elements that move as the user scrolls, and `toggleActions` for elements that trigger once.

## 3. AnimeJS (The Jewelry)
- **Micro-Interactions:** Use AnimeJS for button hovers, SVG path drawing, and small UI "pops."
- **Staggering:** Use the `stagger` property to create a "wave" effect when elements appear.

## 4. Barba.js (The Flow)
- **Transition Logic:** Implement a "Curtain" or "Fade" transition.
- **Lifecycle:** Use `beforeLeave` to trigger an "exit" animation and `beforeEnter` to trigger the "entrance" of the new page.
- **State Persistence:** Ensure the 3D background (Three.js) persists across page changes to avoid a flash.
