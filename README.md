# Flip Dynasty Holdings LLC — Website

Corporate B2B website for **Flip Dynasty Holdings LLC** (Iowa, USA) — everyday consumer
goods and business-supply coordination for commercial clients. Bilingual (EN / ES).

Future domain: **flipdynastyusa.com**

## Stack

- Next.js 16 (App Router) + React 19 + TypeScript
- No CSS framework — design ported from a Claude Design prototype using inline styles
  + a small `globals.css` for hover/focus and responsive rules
- Fonts: Source Serif 4 (headings) + Hanken Grotesk (body) via `next/font`
- Stock imagery from Unsplash

## Pages

- `/` — home (hero, about, services, categories, process, stats, contact)
- `/category/[slug]` — 6 product categories (statically generated)
- `/terms`, `/privacy` — legal pages

## Language

Client-side EN/ES toggle in the header (`lib/i18n.tsx`), preference stored in
`localStorage`. All copy lives in `lib/content.ts`, `lib/categories.ts`, `lib/legal.ts`.

## Contact form

`components/ContactForm.tsx` posts to [Web3Forms](https://web3forms.com) when
`NEXT_PUBLIC_WEB3FORMS_KEY` is set (see `.env.example`). Without a key it shows the
success state without delivering email — set the key to receive leads by email.

## Develop

```bash
pnpm install
pnpm dev
```

## Build

```bash
pnpm build
pnpm start
```

## Deploy

Hosted on Vercel. Set `NEXT_PUBLIC_WEB3FORMS_KEY` in the Vercel project's
Environment Variables to enable form delivery.
