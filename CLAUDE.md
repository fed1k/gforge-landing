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
- **react-icons** for icons (e.g. `react-icons/bs`, `react-icons/ti`)
- **next-view-transitions** wraps the root layout to enable view transitions between pages
- **next-sitemap** — config in `next-sitemap.config.js`, generates `sitemap.xml` and `robots.txt` for `https://giftedforge.com`

## Architecture

### App Router pages

| Route | File | Content |
|---|---|---|
| `/` | `app/page.tsx` | Hero → Mission → Trust → Demand → Process → Stories → Reviews |
| `/about` | `app/about/page.tsx` | HeroOthers → AboutTrust → AboutChoose → AboutTeam → AboutFAQ |
| `/contact` | `app/contact/page.tsx` | ContactHero → ContactForm |
| `/success-stories` | `app/success-stories/page.tsx` | HeroOthers → Videos → Stories |

The root layout (`app/layout.tsx`) renders `<Navbar>` and `<Footer>` around all pages. Primary font: **Montserrat** (loaded globally via `next/font/google`). `HeroOthers` loads **Poppins** locally for its heading.

### Component split

- `components/layout/` — full-width page sections (one per visual block on a page)
- `components/ui/` — small reusable pieces consumed by layout components (cards, tags, modals, etc.)

`HeroOthers` in `components/layout/HeroOthers.tsx` is the shared hero banner used on all non-home pages; it accepts `title`, `subtext`, `subtextWidth`, and `isAbout` props. When `isAbout` is true (default) it renders floating stat widgets (1M+ projects, 4.8 rating, etc.).

### Navigation and page transitions

`NavLink` (`components/ui/NavLink.tsx`) wraps `next/link` and must be used for all internal navigation — it hooks into `useTransitionRouter` from `next-view-transitions` to trigger the vertical slide page animation. Plain `<Link>` bypasses the transition. The active route is highlighted with `text-[#6B6AFD]` and a `border-[#6B6AFD]` underline.

The transition animation itself (old page slides up, new page slides in from below) is defined inline in `NavLink`'s `pageAnimation` function. The CSS counterpart that makes this work is the `::view-transition-*` rules in `app/globals.css`.

### Server actions

`app/actions.ts` contains `sendEmailToTelegram`, a Next.js server action that forwards a submitted email to a Telegram bot. The bot token and chat ID are **hardcoded** in this file (not in env vars) — the comment says it's used by the ComingSoon wishlist form, which is currently commented out in `app/page.tsx`. The `ContactForm` component's submit button is also currently non-functional (no handler wired up).

### Styling conventions

- Brand purple: `#6B6AFD`; dark navy: `#0E0636`
- Custom animation utility classes are defined in `app/globals.css`: `animate-float`, `animate-sway`, `animate-drift`, `animate-pulse-glow`, `animate-float-slow`, `animate-float-reverse`, plus `animation-delay-{200..1200}` helpers.
- Custom utilities also in `globals.css`: `bg-linear`, `custom-shadow`, `animate-scroll`, `animate-scroll-right`, `cardonic-1/2/3` (hover icon swap for Process section cards).
- Path alias `@/*` resolves to the project root.

### Known incomplete areas

- `ContactForm`: the Submit button has no action; form state and submission logic are not implemented.
- `Videos` (`components/layout/Videos.tsx`): all video thumbnails and metadata are hardcoded inline; placeholder video URLs point to a w3schools sample.
- `ComingSoon` component and the `sendEmailToTelegram` server action exist but are commented out of `app/page.tsx`.
