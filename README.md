# cdatainsights.com

Marketing site for [CData Consulting Inc.](https://cdatainsights.com) — data engineering and AI consulting (Toronto, Canada).

Built with **Next.js 15** (App Router, React 19, Tailwind v4) and deployed to **Vercel** on every push to `main`.

## Local development

```bash
pnpm install
pnpm dev          # http://localhost:3000
pnpm build        # production build
pnpm start        # serve production build
```

Requires Node ≥ 18 and pnpm ≥ 9.

## Project structure

```
src/
  app/                 # App Router pages
    blogs/[slug]/      # Dynamic blog post pages
    services/...       # Service pages (data-engineering, ai-ml, etc.)
    industries/...     # Industry pages
    api/               # send-email, subscribe, contact-form (all Turnstile-protected)
    page.tsx           # Homepage
    layout.tsx         # Root layout, metadata, GA, Turnstile, JSON-LD
  components/          # Shared React components (header, footer, hero, etc.)
  lib/
    blogcards.ts       # Blog index (cards shown on /blogs)
    mock-blog-data.ts  # Blog post bodies (rendered by [slug]/page.tsx)
    turnstile.ts       # Cloudflare Turnstile server verification
public/
  logos/               # Client and technology logos (avif + png)
  blog-diagrams/       # SVG diagrams used in blog posts
  sitemap.xml, robots.txt
```

## Adding a blog post

1. Add the card in `src/lib/blogcards.ts`
2. Add the post body + sections in `src/lib/mock-blog-data.ts`
3. Add the URL to `public/sitemap.xml` (use lowercase `/blogs/<slug>`)

## Environment variables

Set in Vercel project settings:

- `RESEND_API_KEY` — for email delivery via Resend
- `ADMIN_EMAIL` — destination for contact-form / newsletter signups
- `TURNSTILE_SECRET_KEY` — Cloudflare Turnstile server secret
- `NEXT_PUBLIC_TURNSTILE_SITE_KEY` — public site key (also hardcoded in `components/turnstile.tsx`)

## Deployment

Push to `main` → Vercel auto-builds → live at https://cdatainsights.com within ~2 minutes.

DNS (apex + `www`) is managed in **AWS Route 53** (account `nitinj025`, hosted zone `Z01165032PAZHTR8OTWM8`). Apex `A` record and `www` CNAME both point to Vercel. 
