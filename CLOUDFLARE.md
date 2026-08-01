# Cloudflare Workers deployment

This repository is configured for a static **Cloudflare Worker** deployment.
It uses Hugo to generate the site, then Wrangler uploads `public/` as static
assets.

## One-time dashboard setup

1. Push this repository to GitHub, GitLab, or Bitbucket.
2. In Cloudflare, open **Workers & Pages** and connect this Git repository.
3. Select this repository and use these values:

   | Setting | Value |
   | --- | --- |
   | Production branch | `main` |
   | Build command | `hugo --minify --gc --baseURL "$CF_PAGES_URL"` |
   | Deploy command | `npx wrangler deploy` |
   | Non-production deploy command | `npx wrangler deploy` |
   | Root directory | `/` |

4. Add `HUGO_VERSION` with value `0.164.0` to both **Production** and
   **Preview** environments.
5. Save and deploy.

## What is already configured

- `hugo.toml` defines canonical content routes and Hugo's `rss.xml` output.
- `wrangler.toml` defines the Worker name, compatibility date, and generated
  static-asset directory.
- `static/_redirects` preserves the legacy `/posts/2` URL.
- `static/_headers` adds security headers and long-lived caching for versioned
  local font files.
- `public/` is Hugo's generated output and is intentionally ignored by Git.

## After the first deployment

Add your custom domain under **Pages** → your project → **Custom domains**.
For production canonical URLs, change `baseURL` in `hugo.toml` to that final
domain after it is connected, then commit and deploy again.
