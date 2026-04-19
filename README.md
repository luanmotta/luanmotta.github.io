# luanmotta.com · portfolio

One-page portfolio for **Luan Motta** (Senior Product Engineer). Built with **Next.js 15** (App Router), **TypeScript**, and **Tailwind CSS v4**, exported as static HTML for speed and SEO.

## Local development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Production build

```bash
npm run build
```

Static files are written to `out/`. Open `out/index.html` in a browser to sanity-check the export.

## Deploy (GitHub Pages)

This repo uses **static export** (`output: "export"` in [`next.config.ts`](next.config.ts)).

1. In the repository on GitHub: **Settings → Pages**.
2. Under **Build and deployment**, set **Source** to **GitHub Actions** (not “Deploy from a branch” unless you intentionally publish `out/` from `main`).
3. Push to `main`. The workflow in [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml) runs `npm ci`, `npm run build`, and publishes the `out` directory.

**Custom domain:** [`public/CNAME`](public/CNAME) is copied into `out/` on build. Configure DNS and the Pages custom domain in repo settings as needed.

## Content reference

Internal profile notes (not deployed as a route): [`docs/profile.md`](docs/profile.md).

## OG / social image

[`public/og-image.jpg`](public/og-image.jpg) is used for Open Graph and Twitter cards. It is currently aligned with the profile photo; for best link previews, replace it with a **1200×630** image when you have one.

## Analytics

Google Analytics **G-FME1N9D85Z** is loaded in [`src/app/layout.tsx`](src/app/layout.tsx) via `next/script`.

## License

Private / all rights reserved.
