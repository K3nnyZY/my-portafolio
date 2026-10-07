# Kenny Zhu Portfolio

A bilingual portfolio built with **Next.js 16 (App Router), React 19, TypeScript, and Tailwind CSS 4**. Content is adapted from Kenny's résumé, with original CSS/SVG illustrations rather than borrowed project screenshots.

## Development

```bash
npm install
npm run dev
```

Open http://localhost:3000. `/` redirects to `/en`; `/es` serves the Spanish version. Both pages are statically generated and have their own document language and metadata.

```bash
npm run lint
npm run build
npm start
```

## Architecture

- `src/app/[locale]/`: localized routes, root layout, metadata, and generated social preview image.
- `src/components/layout/`: navigation, container, and footer.
- `src/components/sections/`: presentational portfolio sections and interactive project/contact components.
- `src/components/ui/`: reusable button, card, and section title.
- `src/features/portfolio/content.ts`: typed English and Spanish portfolio content and locale validation.
- `src/config/site.ts`: contact details, social profiles, résumé path, and supported locales.
- `src/types/`: shared content types.
- `src/hooks/` and `src/lib/`: reserved for reusable hooks and utilities as needed.

`Portfolio-main/` is the original reference template. It is not imported by the application and is excluded from TypeScript and ESLint checks.

## Updating content

Edit both languages in `src/features/portfolio/content.ts`. Contact URLs live in `src/config/site.ts`. Project details use résumé information; the cards' illustrations are conceptual, not screenshots. Add project-specific source/demo URLs only when verified.

The résumé download follows the selected language: `/en` uses `public/documents/resume_english.pdf`, while `/es` uses `public/documents/kenny-zhu-resume-es.pdf`. Both URLs are configured in `src/config/site.ts`, with localized labels and download filenames.

The portrait in About uses `src/app/perfil.png` through Next.js Image for responsive optimization. Replace that file to update the photo; the caption and alternative text are localized in the portfolio content. The hero combines animated connections and floating nodes with selectable data, AI, and software details. Motion stops when the visitor prefers reduced motion. Both themes use blue accents.

When deploying, set `NEXT_PUBLIC_SITE_URL` to the site's full public origin (e.g. `https://your-domain.com`) to enable canonical and alternate-language metadata. No hosting provider is required by the architecture.

The portfolio includes keyboard focus styles, a skip link, accessible mobile navigation, reduced-motion support, project filters, expandable project details, and email copy feedback. Email uses the visitor's mail client; no contact backend or secret credentials are needed.

The sun/moon button switches between black (dark) and white (light) modes. The theme follows the visitor's system preference until they choose a mode, then saves that choice locally across reloads and language changes. Theme logic lives in `src/lib/theme.ts` and `src/hooks/useTheme.ts`; both palettes use CSS variables in `src/app/globals.css`.

Typography uses Chivo for headings and Source Sans 3 for body text, loaded locally with `next/font/local`. The Latin variable WOFF2 files and their SIL Open Font Licenses live in `src/assets/fonts/`; they cover English and Spanish without external font requests. Sources: [Chivo](https://github.com/Omnibus-Type/Chivo) and [Source Sans 3](https://github.com/adobe-fonts/source-sans), with web fonts distributed by Google Fonts.
