# Vítor Martins Cinematic Portfolio

Cinematic one-page portfolio built with Next.js App Router + TypeScript + TailwindCSS + Framer Motion + Lenis.

## Stack

- Next.js 14+ (App Router)
- TypeScript
- TailwindCSS
- Framer Motion
- Lenis smooth scroll (disabled when `prefers-reduced-motion` is enabled)

## Getting started

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Build

```bash
npm run build
npm run start
```

## Deploy

### Vercel

1. Import the repository in Vercel.
2. Framework preset: `Next.js`.
3. Build command: `npm run build`.
4. Output: default Next.js output.

### Netlify

1. Import the repository in Netlify.
2. Build command: `npm run build`.
3. Publish directory: `.next`.
4. Ensure Next.js runtime is enabled (Netlify detects this automatically for Next projects).

If needed, create `netlify.toml`:

```toml
[build]
  command = "npm run build"
  publish = ".next"

[[plugins]]
  package = "@netlify/plugin-nextjs"
```

## Content quick-edit

- Main copy and section structure: `components/Hero.tsx` and `components/Scenes.tsx`
- Project data: `lib/projects.ts`
- Contact links: `components/Footer.tsx`
- Theme and design tokens: `tailwind.config.ts` + `app/globals.css`

## Accessibility and motion

- Uses visible focus states on interactive elements.
- Respects `prefers-reduced-motion`.
- Lenis smooth scroll is automatically disabled for reduced motion users.
