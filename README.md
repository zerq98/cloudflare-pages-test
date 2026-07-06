# Przewodnik wyceny stron

Statyczna strona edukacyjno-sprzedażowa o tym, jak przygotować się do wyceny strony internetowej. Projekt działa jako static export Next.js pod Cloudflare Pages.

## Stack

- Next.js 16 App Router
- React 19
- TypeScript
- Tailwind CSS 4
- Static export do `dist`

## Uruchomienie

```bash
npm run dev
npm run lint
npm run build
```

Po `npm run build` gotowe pliki statyczne są w katalogu `dist`.

## Cloudflare Pages

Ustawienia wdrożenia:

```txt
Framework preset: Next.js
Build command: npm run build
Build output directory: dist
Environment variables: brak wymaganych
```

Projekt nie używa formularzy, backendu, Cloudflare Pages Functions, bazy danych, CMS ani zewnętrznych trackerów.

## Trasy

- `/` - główny poradnik o koszcie strony i zakresie projektu
- `/checklista` - checklista przed rozmową z wykonawcą
- `/slownik` - słownik pojęć projektowych
- custom `404.html` generowany przez Next.js

Dodatkowe pliki statyczne:

- `robots.txt`
- `sitemap.xml`
- `llms.txt`
- `_redirects`
