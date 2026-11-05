<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

## Project rules
- All institute copy, contact details, courses, faculty, results and testimonials live in `src/content/institute.ts`; components only render it — keeps the site easy to update without touching layout code.
- Admission enquiries go through the `submitEnquiry` server function into the `admission_enquiries` table (anon insert-only, no public read) — submissions stay private and validated server-side.
- Home page is one long scrolling page with section anchors (the brief describes a single-page site); legal pages, sitemap.xml and robots.txt are separate routes.
