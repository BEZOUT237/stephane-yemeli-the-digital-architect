# Architecture rules

- Keep portfolio facts and project records in browser-safe centralized modules, separate from presentation, so every page uses the same verified information.
- Lazy-load the R3F scene behind a client-only boundary; keep the page content server-renderable so static deployment and no-WebGL visitors still receive a usable portfolio.
- Keep frame-level scene motion in refs with clamped delta and CSS-derived semantic colors; never update React state each frame.
- Use file-based content routes and prerendered static output with a Vercel SPA fallback; never replace TanStack routing.
- Keep motion away from touch navigation and respect reduced-motion; buttons must not drift or blur on mobile.