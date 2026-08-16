# Nguyễn Tiến Khang — Personal Portfolio

My personal portfolio and blog, built with Hugo and deployed as a static site through Cloudflare.

## Run locally

```sh
hugo server
```

Build the production site with:

```sh
hugo --minify
```

## Deployment

Cloudflare build settings:

- Build: `hugo --minify --gc --baseURL "$CF_PAGES_URL"`
- Deploy: `npx wrangler deploy`
- Hugo version: `0.164.0`

See [CLOUDFLARE.md](CLOUDFLARE.md) for the deployment setup.

## Citation

This project originally used [AstroPaper](https://github.com/satnaing/astro-paper) by [Sat Naing](https://satnaing.dev). The current version has been substantially adapted to Hugo, including its content structure, layouts, styling, and deployment setup.

The original MIT license and attribution are retained in [LICENSE](LICENSE).
