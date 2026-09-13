# Nethmini Rathnayake — Portfolio

Built with Next.js 15 (App Router), TypeScript, Tailwind CSS, and Framer Motion.

## Design

- **Motif**: a single circuit-trace line runs through the whole page, tying together the full-stack + hardware identity — signal, not decoration.
- **Palette**: deep teal-black base, copper accent, signal-teal accent.
- **Type**: Fraunces (display), Space Grotesk (body), JetBrains Mono (data labels only) — self-hosted via `@fontsource`, no external font requests at build or runtime.

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Edit your content

All real content — projects, skills, education, links — lives in one place:

`src/data/content.ts`

Change your info there; the sections in `src/components/` just render it.

## Deploy

Push to GitHub, then import the repo on Vercel (vercel.com/new) — zero config needed.

## Structure

    src/
      app/            -> layout, global styles, page assembly
      components/     -> Hero, About, Skills, Projects, Contact, TraceLine
      data/content.ts -> all real content (edit this to update the site)
