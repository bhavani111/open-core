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
- **Hosting**: Netlify / GitHub Pages / Vercel

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
└── netlify.toml        # Netlify deployment config
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

### Netlify (Recommended)

1. Push your code to GitHub
2. Sign up at [Netlify](https://www.netlify.com/)
3. Click "New site from Git"
4. Select your repository
5. Netlify will auto-detect settings from `netlify.toml`
6. Click "Deploy site"

### GitHub Pages

1. Push your code to GitHub
2. Go to repository Settings → Pages
3. Set source to GitHub Actions
4. Create `.github/workflows/deploy.yml`

### Vercel

1. Push your code to GitHub
2. Sign up at [Vercel](https://vercel.com/)
3. Import your repository
4. Vercel will auto-detect Eleventy
5. Click "Deploy"

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
