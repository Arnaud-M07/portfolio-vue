# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev       # Start dev server (Vite)
npm run build     # Production build → /dist
npm run preview   # Preview production build locally
```

No linting, testing, or type-checking scripts are configured.

## Stack

Vue 3 (Composition API, `<script setup>`) + Vite. No Vue Router, no Pinia/Vuex — this is a single-page portfolio with anchor-based navigation (`#about`, `#work`, `#contact`).

Key dependencies:
- **Three.js** — WebGL fluid simulation (`LiquidEther.vue`)
- **GSAP** (+ SplitText, ScrambleTextPlugin) — text animations and scroll effects
- **Motion-v** — spring-based 3D tilt animations (`TiltedCard.vue`)
- **AOS** — scroll-triggered fade-in, initialized globally in `main.js`

## Architecture

`App.vue` is the layout shell: it composes all page sections in order (`Header`, `HeroHeader`, `About`, `Skills`, `Work`, `Contact`, `Footer`) with no routing.

### Animation components

These are the technically complex parts of the codebase:

- **`LiquidEther.vue`** — The heaviest component. Runs a real-time fluid simulation using Three.js, custom GLSL shaders, and ping-pong framebuffers. Accepts `color` and `speed` props. Used in both `Work.vue` and `Contact.vue`. Do not modify the shader code without understanding the advection/divergence/pressure pipeline.
- **`ScrollVelocity.vue`** — Renders infinitely scrolling text rows whose speed scales with scroll velocity. Uses `requestAnimationFrame` with manual transform tracking — no scroll library.
- **`ScrambleText.vue`** — GSAP `ScrambleTextPlugin` activates when the pointer comes within a configurable `proximity` radius. Reads text content from the slot via `useTemplateRef`.

### Styling

Global CSS variables (`--white`, `--beige`, `--black`, `--orange`) are defined in `src/assets/css/style.css` alongside custom `@font-face` declarations (Migra, TT Firs Neue). Component styles are scoped. No Tailwind or CSS framework.

### Project data

Portfolio projects are hardcoded as an array inside `Work.vue` — there is no CMS or external data source.

### Mixed JS/TS

Some components use `<script setup lang="ts">` (e.g., `LiquidEther.vue`, `ScrollVelocity.vue`), others are plain JS. No `tsconfig.json` — Vite handles inference automatically.
