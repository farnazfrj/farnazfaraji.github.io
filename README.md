# farnazfaraji.github.io

Personal academic website of Farnaz Faraji, built with [Eleventy](https://www.11ty.dev/).

Originally based on [Academic CV](https://github.com/simamojtahedi/Academic-cv) by [@simamojtahedi](https://github.com/simamojtahedi), rewritten with 11ty for maintainability.

## Getting started (macOS)

### Prerequisites

Install [Node.js](https://nodejs.org/) if you don't have it. Open **Terminal** and run:

```bash
brew install node
```

If you don't have Homebrew, install it first: https://brew.sh

### Setup

Clone the repo and install dependencies:

```bash
git clone https://github.com/farnazfrj/farnazfaraji.github.io.git
cd farnazfaraji.github.io
npm install
```

### Run locally

```bash
npm run dev
```

Open http://localhost:8080 in your browser. Changes you make to files will reload automatically.

### Other commands

```bash
npm run build      # build for production (output: _site/)
npm run format     # auto-format code with Prettier
```

## Project structure

```
src/
  _data/               # Content data files (edit these to update site content)
    site.json          #   Name, email, social links
    navigation.json    #   Navbar menu items
    publications.json  #   Research publications
    work.json          #   Work experience entries
  _includes/
    base.njk           # Base HTML layout (shared by all pages)
  assets/
    css/style.css      # All styles
    images/icons/      # Icon assets
    scripts/           # AOS animation library, Bootstrap collapse
  files/
    profile.jpg        # Profile photo
    resume.pdf         # CV download
  index.njk            # Home page
  research.njk         # Research / publications page
  teaching.njk         # Teaching page
  work.njk             # Work experience page
  as-i-am.njk          # Personal / hobbies page
  contact.njk          # Contact info page
```

## How to update content

### Edit personal info and social links

Edit `src/_data/site.json`:

```json
{
  "name": "Your Name",
  "email": "your@email.com",
  "social": [
    { "name": "Google Scholar", "url": "https://...", "icon": "/assets/images/icons/google-scholar.png" }
  ]
}
```

### Add or remove menu items

Edit `src/_data/navigation.json`:

```json
[
  { "title": "Research", "url": "/research/" },
  { "title": "New Page", "url": "/new-page/" }
]
```

### Add a publication

Edit `src/_data/publications.json`. Add a new entry to the appropriate section:

```json
{
  "title": "Your paper title.",
  "venue": "Journal name, volume, etc.",
  "date": "2024",
  "link": "https://doi.org/...",
  "github": "",
  "writers": ["Author A.", "Author B."]
}
```

### Add a work experience entry

Edit `src/_data/work.json`. Add a new entry at the top of the array:

```json
{
  "title": "Job Title",
  "company": "Organization Name",
  "start": "Jan 2024",
  "end": "Dec 2024",
  "location": "City, Country",
  "description": "What you did.",
  "achievements": ["Achievement 1", "Achievement 2"]
}
```

### Edit page content directly

Teaching, As I Am, and Home pages have content written directly in their `.njk` files. Just edit the HTML inside `src/teaching.njk`, `src/as-i-am.njk`, or `src/index.njk`.

### Add a new page

1. Create a new file, e.g. `src/workshops.njk`:

```
---
layout: base.njk
title: Workshops
permalink: /workshops/
---

<h1 class="title">Workshops</h1>

<p>Your content here...</p>
```

2. Add it to the navbar in `src/_data/navigation.json`:

```json
{ "title": "Workshops", "url": "/workshops/" }
```

That's it. The page will appear in the navbar and be built automatically.

### Update profile photo or CV

Replace the files:
- `src/files/profile.jpg` — profile photo
- `src/files/resume.pdf` — downloadable CV

## Deployment

Deploys automatically to GitHub Pages via GitHub Actions on every push to `main`.

### How to push changes

After editing files locally:

```bash
git add -A
git commit -m "update: description of what you changed"
git push
```

The site will rebuild and deploy automatically within a couple of minutes.

### First-time GitHub Pages setup

Go to your repo on GitHub: **Settings > Pages > Source** and select **GitHub Actions**.
