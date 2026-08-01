# Personal Portfolio

A Hugo static portfolio, ready for Cloudflare Pages. Content is plain Markdown
in `content/`; local CSS, fonts, icons, and the light/dark theme script live in
`static/`.

```sh
hugo server
hugo --minify
```

Cloudflare Workers build settings:

- Build command: `hugo --minify --gc --baseURL "$CF_PAGES_URL"`
- Deploy command: `npx wrangler deploy`
- Environment variable: `HUGO_VERSION=0.164.0`

Light mode is the default. The navbar theme control remembers a visitor's dark
mode preference in their browser.

See [CLOUDFLARE.md](CLOUDFLARE.md) for the complete dashboard setup and
deployment checklist.
