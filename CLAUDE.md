# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

AI consultancy website for threecommas.ai, built with Next.js 14 (App Router) and Tailwind CSS. Features a Manim-generated animated splash screen.

## Commands

```bash
npm run dev      # Start development server (localhost:3000)
npm run build    # Production build
npm run lint     # Run ESLint

# Splash animation (requires Manim + Python)
manim -ql --format gif splash_animation.py SplashScreenPremium  # Quick render
manim -qm --format webm splash_animation.py SplashScreenPremium # Medium quality
```

## Architecture

### Next.js App Router Structure
- `src/app/layout.tsx` - Root layout with Header, Footer, and SplashScreen components
- `src/app/page.tsx` - Homepage (hero, about, services sections)
- `src/app/contact/page.tsx` - Contact page with business details
- `src/components/SplashScreen.tsx` - Client component showing GIF on first session visit

### Design System

Custom brand colors defined in `tailwind.config.ts`:
- **parchment** (backgrounds): `#FAF8F5`, `#F5F2ED`
- **ink** (text): `#1A1918` → `#7A7672`
- **terracotta** (accent): `#C4725A`

Typography:
- Serif: Cormorant Garamond (headings)
- Sans: DM Sans (body)

CSS utilities in `globals.css`:
- `.link-refined` - Animated underline on hover
- `.hr-refined` - Gradient horizontal rule
- `.grain-overlay` - Subtle texture overlay

### Splash Animation
`splash_animation.py` uses Manim to generate the logo animation. Output goes to `public/splash_quick.gif`. The SplashScreen component uses sessionStorage to show animation only once per session.

## Path Aliases
`@/*` maps to `./src/*` (configured in tsconfig.json)
