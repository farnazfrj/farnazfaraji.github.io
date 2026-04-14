# farnazfaraji.github.io

Personal academic website of Farnaz Faraji, built with [Eleventy](https://www.11ty.dev/).

Originally based on [Academic CV](https://github.com/simamojtahedi/Academic-cv) by [@simamojtahedi](https://github.com/simamojtahedi), rewritten with 11ty for maintainability.

## Getting started (macOS)

You can use the built-in **Terminal** app on Mac. No need for VS Code or any other editor (though you can use any text editor you like to edit files).

### Step 1: Install Homebrew (if you don't have it)

Open **Terminal** (press `Cmd + Space`, type "Terminal", hit Enter) and paste:

```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

Follow the instructions on screen. When it's done, **close and reopen Terminal**.

To verify it works:

```bash
brew --version
```

If it prints a version number, you're good.

### Step 2: Install Node.js and Git

```bash
brew install node git
```

To verify:

```bash
node --version
git --version
```

Both should print a version number.

### Step 3: Clone the repo

```bash
cd ~/Desktop
git clone https://github.com/farnazfrj/farnazfaraji.github.io.git
cd farnazfaraji.github.io
```

This creates a folder on your Desktop with the website code.

### Step 4: Install dependencies

```bash
npm install
```

You only need to do this once (or when dependencies change).

### Step 5: Run the website locally

```bash
npm run dev
```

Open http://localhost:8080 in your browser (Safari, Chrome, Firefox — any works). You'll see your website running locally. When you edit and save a file, the browser refreshes automatically.

To stop the server, press `Ctrl + C` in Terminal.

## Editing workflow

The recommended workflow is:

1. Run `npm run dev` to start the local server
2. Open http://localhost:8080 in your browser
3. Edit files in any text editor (VS Code, Sublime Text, or even TextEdit)
4. Save the file — the browser auto-refreshes so you can see your changes
5. When happy with the changes, push to GitHub (see below)

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

## Pushing changes to the live website

After editing files locally and verifying they look good at http://localhost:8080:

```bash
git add -A
git commit -m "update: description of what you changed"
git push
```

The site will rebuild and deploy automatically within a couple of minutes at https://www.nazfaraji.com.

## Troubleshooting

### `npm: command not found`

Node.js is not installed. Run `brew install node` and reopen Terminal.

### `npm run dev` shows errors

Make sure you ran `npm install` first. If it still fails, try:

```bash
rm -rf node_modules
npm install
npm run dev
```

### Changes don't show on the live site

After `git push`, go to https://github.com/farnazfrj/farnazfaraji.github.io/actions and check if the "Build and Deploy" workflow completed successfully.
