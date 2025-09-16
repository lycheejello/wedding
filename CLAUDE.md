# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

- `npm run dev` - Start development server with hot module replacement
- `npm run build` - Build production version (TypeScript compilation + Vite build)
- `npm run lint` - Run ESLint with TypeScript rules
- `npm run preview` - Preview production build locally

## Project Architecture

This is a wedding website with a dual-site architecture:

### Main Site (`/`)
- Entry point: `index.html` → `src/main.tsx` → `Ha.tsx`
- Features a parallax scrolling experience with multiple sections
- Built using custom parallax components (`ParallaxContainer`, `ParallaxSection`)
- Sections are defined in separate components: `Section1.tsx`, `Section3.tsx`, `Section5.tsx`, etc.
- Uses custom fonts (Operetta, Audrey, Goku) and wedding-specific graphics

### Vietnamese Site (`/vn`)
- Entry point: `vn/index.html` → `vn/src/main.tsx`
- Separate localized version with components: `Hero`, `SaveTheDate`, `Location`, `Footer`
- Independent styling and assets

### Key Technical Details

- **Build System**: Vite with SWC React plugin for fast refresh
- **Multi-entry Build**: Configured to build both main site and `/vn` version simultaneously
- **Path Aliases**: `@` maps to `src/`, `vnsrc` maps to `vn/src/`
- **TypeScript**: Strict mode enabled with unused parameter/local detection
- **Assets**: Custom fonts, wedding photos, and SVG graphics stored in `src/assets/`
- **Deployment**: Homepage configured for https://www.huyson-arkina.com/

### Component Structure

- Main site uses a parallax-based architecture with speed/z-index controls
- Vietnamese site uses a more traditional layout with distinct Hero/SaveTheDate/Footer sections
- Each major section has its own CSS file for styling isolation
- Photos component handles wedding photo galleries with dedicated CSS