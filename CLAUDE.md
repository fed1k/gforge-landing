# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # start dev server (localhost:3000)
npm run build    # production build
npm run start    # serve production build
npm run lint     # ESLint
```

No test suite is configured.

## Stack

- **Next.js 16** with App Router, **React 19**, **TypeScript** (strict)
- **Tailwind CSS v4** — imported via `@import "tailwindcss"` in `app/globals.css` (no `tailwind.config.*` file)
- **Framer Motion** for animations
- **next-view-transitions** wraps the root layout to enable view transitions between pages
- **next-sitemap** — config in `next-sitemap.config.js`, generates `sitemap.xml` and `robots.txt` for `https://giftedforge.com`

## Architecture

### App Router pages

| Route | File | Content |
|---|---|---|
| `/` | `app/page.tsx` | Hero → Mission → Trust → Demand → Process → Stories → Reviews |
| `/about` | `app/about/page.tsx` | HeroOthers → AboutTrust → AboutTeam → AboutFAQ |
| `/contact` | `app/contact/page.tsx` | ContactHero → ContactForm |
| `/success-stories` | `app/success-stories/page.tsx` | HeroOthers → Videos → Stories |

The root layout (`app/layout.tsx`) renders `<Navbar>` and `<Footer>` around all pages. Font: **Montserrat** (loaded globally via `next/font/google`).

### Component split

- `components/layout/` — full-width page sections (one per visual block on a page)
- `components/ui/` — small reusable pieces consumed by layout components (cards, tags, modals, etc.)

`HeroOthers` in `components/layout/HeroOthers.tsx` is the shared hero banner used on all non-home pages; it accepts `title`, `subtext`, `subtextWidth`, and `isAbout` props.

### Server actions

`app/actions.ts` contains `sendEmailToTelegram`, a Next.js server action that forwards a submitted email to a Telegram bot. It is used by the ComingSoon wishlist form (currently commented out in `app/page.tsx`).

### Styling conventions

- Brand purple: `#6B6AFD`; dark navy: `#0E0636`
- Custom animation utility classes are defined in `app/globals.css`: `animate-float`, `animate-sway`, `animate-drift`, `animate-pulse-glow`, `animate-float-slow`, `animate-float-reverse`, plus `animation-delay-{200..1200}` helpers.
- Custom utilities also in `globals.css`: `bg-linear`, `custom-shadow`, `animate-scroll`, `animate-scroll-right`, `cardonic-1/2/3` (hover icon swap for Process section cards).
- Path alias `@/*` resolves to the project root.
