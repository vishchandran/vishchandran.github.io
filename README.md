# Vishnu Chandran — Technical Program Leadership

Responsive static portfolio for Technical Program Leadership across payments, distributed systems, and enterprise modernization.

**Website:** https://vishchandran.github.io/

## Content

- EPOS — Enterprise Platform Operating System (ongoing independent flagship)
- Applied Systems: Payment Simulator, Hybrid Switch Platform, Partner Integration Platform
- Architecture Drills — System Design & Distributed Systems
- Technical Program Leadership, sanitized Professional Experience, and profile links

Project summaries are grounded in the respective repository READMEs. Detailed architecture and program evidence stays in those repositories. EPOS is an incremental independent banking engineering program; the applied systems are evolving simulators and technical projects, separate from professional experience and not claims of production deployments.

## Edit and preview

Edit `index.html` for content, `styles.css` for presentation, and `site.js` for the mobile navigation. There are no build dependencies, analytics, external fonts, or backend services.

```sh
python3 -m http.server 4173
```

Open http://localhost:4173/.

## Deployment

GitHub Pages publishes from the `main` branch, repository root (`/`). The `.nojekyll` file serves these static files directly. Pushes to `main` trigger publication through GitHub Pages.

## Validation

Before publishing, check desktop and mobile layouts, navigation anchors, project links, expandable sections, keyboard interaction, and text enlargement. The initial implementation was checked at 320, 375, 390, 760, 768, 1024, and 1440 pixels, with automated accessibility checks and visual review.

No employer details, tenure, metrics, or résumé links are inferred or included.
