# Service detail pages

Each `.mdx` file in this directory becomes a fully SEO-ready page at `/services/{slug}`.

## To add a new service

1. Pick a slug (kebab-case). It must be unique and match the filename.
2. Copy `dental-implants.mdx` as a starting template.
3. Fill in the frontmatter (see `app/lib/service-types.ts` for the full type — every supported field has a JSDoc comment).
4. Write the body in MDX. Aim for roughly 600–1,200 words across 4–6 H2 sections.
5. (Optional) Add an entry in `app/services/services.ts` with a matching `slug` so the new page is linked from the `/services` grid.
6. Run `npm run build` once to confirm `generateStaticParams` picks up the new route.

## Frontmatter must-haves for SEO

- `title` — short display name (used in cards, breadcrumbs, schema)
- `h1` — the H1 used on the detail page; include locality
- `metaDescription` — 140–160 characters, no boilerplate
- `keywords` — 5–10 high-intent terms (location + service variations)
- `heroImage` + `heroImageAlt` — required for hero LCP
- `faq` — at least 4 Q&A pairs (becomes both UI and `FAQPage` JSON-LD)
- `considerations` — AHPRA-aligned risk/suitability statements

## AHPRA-compliant copy

- Avoid superlatives ("best", "perfect smile", "guaranteed").
- Use language like "may help", "supports", "designed to".
- Always include a clinical-significance / risks paragraph.
- No patient testimonials (Section 133 of the National Law).
- Cost statements should be ranges or starting points, never fixed.

## How content lands in the page

| Frontmatter             | Renders as                               |
| ----------------------- | ---------------------------------------- |
| `intro`                 | Hero subtitle                            |
| `signs[]`               | Sidebar-adjacent "Signs you may benefit" |
| `process[]`             | "What to expect" numbered steps          |
| `considerations[]`      | Amber risk panel                         |
| `features[]`            | Sidebar "What we offer" bullets          |
| `priceFrom`             | Sidebar pricing card                     |
| `faq[]`                 | FAQ accordion + JSON-LD                  |
| MDX body                | Long-form content between intro and FAQ  |
| `relatedServiceSlugs[]` | Bottom "Related services" grid           |
| `relatedBlogSlugs[]`    | Bottom "From our blog" grid              |
