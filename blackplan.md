# Black Hole Portfolio - Implementation Plan

This document outlines the strategy to replace the current DNA model with an interactive black hole experience, including a starfield background and a gravitational lensing effect.

## 1. Project Setup & Safety

Before making major changes, it's best to work in a safe environment.

- **Action:** Create a new `git` branch to experiment without affecting the main version.
  ```bash
  git checkout -b feature/black-hole
  ```

## 2. Creating the Cosmic Background

We need a backdrop of stars and galaxies to set the scene.

- **Technology:** We'll use `@react-three/drei`'s built-in `Stars` component. It's the most efficient way to create a convincing, performant starfield.
- **Implementation:**
    1. Create a new component, e.g., `src/components/shared/ui/Starfield/Starfield.tsx`.
    2. Inside this component, use `<Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade />`. We will tweak these values.
    3. Add this `Starfield` component to the main canvas where the 3D scene is rendered.

## 3. The Black Hole: Model and Lensing Effect

This is the centerpiece. We need to create the illusion that the black hole is bending the light from the stars behind it.

- **The Smartest Approach (Performance & Quality):** We will use a **custom shader**. A 3D model of a black hole is mostly for the accretion disk (the glowing ring). The gravitational lensing is a screen-space effect that happens on the "sphere" of the black hole itself.
- **Technology:**
    - **GLSL (OpenGL Shading Language):** To write the custom shader.
    - **`@react-three/fiber`:** To apply the shader to a sphere mesh using `<shaderMaterial />`.
- **Implementation Plan:**
    1. **Create the Shader Files:**
        - `src/shaders/blackhole/vertex.glsl`: The vertex shader will be simple, mainly for positioning the sphere.
        - `src/shaders/blackhole/fragment.glsl`: This is where the magic happens.
    2. **Fragment Shader Logic:**
        - It will take two "uniforms" (inputs): the starfield texture and the black hole's radius.
        - For each pixel, it will calculate a "deflection" vector based on its distance from the center of the black hole.
        - It will use this deflected vector to look up the color from the starfield texture, creating a distorted, "lensed" view.
    3. **Create the React Component (`BlackHole.tsx`):**
        - This component will render a `<mesh>` with a `<sphereGeometry />`.
        - It will use `<shaderMaterial />` and load the GLSL code from the files.
        - We will also add a 3D model for the accretion disk, which will spin around the shader-based sphere.

## 4. Scroll-Based Animation

The black hole needs to react to the user's scroll.

- **Technology:** We'll use the `useScroll` hook from `@react-three/drei` and the `useFrame` hook from `@react-three/fiber`.
- **Implementation:**
    1. **Track Scroll Progress:** The `useScroll` hook provides an `offset` value (from 0 to 1) representing the user's scroll position.
    2. **Animate in the Render Loop:** Inside a `useFrame` block, we will update the black hole's properties based on the scroll `offset`.
        - **Growth:** Increase the `scale` of the black hole mesh.
        - **Movement:** Change the `position` of the black hole to move it from the bottom-right towards the center of the screen.
    3. **Screen Blackout:** As the scroll offset approaches its maximum, we will scale the black hole until it fills the entire screen, creating the pitch-black effect.

## 5. Scene Transition

After the screen goes black, we need a smooth transition to the "Contact" section.

- **Implementation:**
    - The scroll animation will naturally lead the user to the next section.
    - We can use Framer Motion to fade in the "Let's get in touch" title and content as soon as the black hole animation is complete. This will create a seamless transition from the black screen to the white-background section.

---

This plan breaks down a complex feature into manageable steps. We'll start by setting up the starfield, then create the black hole with its lensing shader, and finally add the scroll animations.

Ready to begin? I'll start by creating the `blackplan.md` file in your project root.