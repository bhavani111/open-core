# OpenCore Dispatch

A blog focused on RISC-V processors, FPGA development, Zephyr RTOS, and open source hardware tools.

## About

OpenCore Dispatch is dedicated to sharing knowledge about:
- 🔧 RISC-V Development
- ⚡ FPGA Design with Open Source Tools
- 🚀 Zephyr RTOS
- 🛠️ Open Source Hardware Tools

## Tech Stack

- **Static Site Generator**: [Eleventy](https://www.11ty.dev/)
- **Template Engine**: Nunjucks
- **Styling**: Custom CSS
- **Hosting**: GitHub Pages / Vercel / Cloudflare Pages

## Local Development

### Prerequisites

- Node.js 18 or higher
- npm

### Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/opencore-dispatch.git
cd opencore-dispatch

# Install dependencies
npm install

# Run development server
npm run dev
```

The site will be available at `http://localhost:8081/`

## Building for Production

```bash
npm run build
```

The built site will be in the `_site` directory.

## Project Structure

```
.
├── src/
│   ├── _data/          # Global data files
│   ├── _includes/      # Layout templates
│   ├── assets/         # CSS and static assets
│   ├── posts/          # Blog posts (Markdown)
│   ├── about.njk       # About page
│   ├── contact.njk     # Contact page
│   ├── index.njk       # Homepage
│   └── posts.njk       # Posts archive
├── .eleventy.js        # Eleventy configuration
├── package.json        # Dependencies and scripts
└── .github/
    └── workflows/      # GitHub Actions workflows
```

## Writing Posts

Create a new Markdown file in `src/posts/`:

```markdown
---
layout: layouts/base.njk
title: "Your Post Title"
description: "A brief description"
date: 2025-10-26
tags: ["risc-v", "fpga"]
---

# Your Post Title

Your content here...
```

## Deployment

### GitHub Pages (Recommended)

This repository ships with a GitHub Actions workflow that builds Eleventy and
publishes the static site to GitHub Pages.

1. Update `src/_data/site.json` so the `url` points to your published site, for
   example `https://YOUR_USERNAME.github.io/opencore-dispatch`.
2. Push your code to GitHub.
3. In your repository settings enable **Pages** and choose "GitHub Actions" as the
   source.
4. In **Settings → Pages → Build and deployment** select the `github-pages`
   environment if it is not already chosen.
5. On every push to `main`, the `Deploy site` workflow builds the site and
   publishes it to Pages. You can also trigger the workflow manually from the
   **Actions** tab.

> The workflow automatically configures Eleventy's `pathPrefix` so CSS, images,
> and RSS feed links work whether you deploy to `YOUR_USERNAME.github.io` or a
> repository page like `YOUR_USERNAME.github.io/opencore-dispatch/`.

### Vercel

1. Push your code to GitHub.
2. Sign up at [Vercel](https://vercel.com/) (or log in).
3. Import your repository.
4. Vercel auto-detects Eleventy; keep the default `npm run build` command and
   deploy.

### Cloudflare Pages

1. Push your code to GitHub.
2. In Cloudflare Pages, create a new project and connect your repository.
3. Set the build command to `npm run build` and the output directory to `_site`.
4. Save and deploy.

> **Newsletter form note:** This starter is configured for third-party form
> providers. Update `forms.newsletter.endpoint` in `src/_data/site.json` to point
> to your service (for example a [Formspree](https://formspree.io/) endpoint) if
> you want to collect email addresses.

## Contributing

Contributions are welcome! Feel free to:
- Suggest topics for future posts
- Submit guest articles
- Report issues or improvements

## License

MIT License - feel free to use this template for your own blog!

## Contact

- GitHub: [yourusername](https://github.com/yourusername)
- Twitter: [@yourusername](https://twitter.com/yourusername)

---

Built with ❤️ using [Eleventy](https://www.11ty.dev/)
