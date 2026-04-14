# farnazfaraji.github.io

Personal academic website of Farnaz Faraji, built with [Eleventy](https://www.11ty.dev/).

Originally based on [Academic CV](https://github.com/simamojtahedi/Academic-cv) by [@simamojtahedi](https://github.com/simamojtahedi), rewritten with 11ty for maintainability.

## Development

```bash
npm install        # install dependencies
npm run dev        # start dev server (http://localhost:8080)
npm run build      # build for production (output: _site/)
npm run format     # format code with Prettier
```

## Project structure

```
src/
  _data/             # Content data (edit these to update the site)
    site.json        # Name, email, social links
    navigation.json  # Navbar menu items
    publications.json # Research publications
    work.json        # Work experience
  _includes/
    base.njk         # Base HTML layout (shared by all pages)
  assets/
    css/style.css    # All styles
    images/icons/    # Icon assets
    scripts/         # AOS animation library, Bootstrap collapse
  files/
    profile.jpg      # Profile photo
    resume.pdf       # CV download
  index.njk          # Home page
  research.njk       # Research / publications
  teaching.njk       # Teaching
  work.njk           # Work experience
  as-i-am.njk        # Personal / hobbies
  contact.njk        # Contact info
```

## How to update content

- **Personal info and social links**: edit `src/_data/site.json`
- **Menu items**: edit `src/_data/navigation.json`
- **Publications**: edit `src/_data/publications.json`
- **Work experience**: edit `src/_data/work.json`
- **Page content** (teaching, as-i-am, home): edit the `.njk` files directly
- **Profile photo**: replace `src/files/profile.jpg`
- **CV**: replace `src/files/resume.pdf`

## Deployment

Deploys automatically to GitHub Pages via GitHub Actions on push to `main`.
