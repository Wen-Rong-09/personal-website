# Personal Website

A simple personal website (plain HTML/CSS/JS, no build step), styled after
[filipzaleski.com](https://filipzaleski.com): a cream background, serif
headline, a featured-work carousel, and a photo gallery.

## Structure

```
index.html       Home page (intro, featured carousel, glimpses gallery)
about.html        Bio / CV
projects.html      Full project list
contact.html       Contact links
assets/css/style.css  All styling
assets/js/main.js    Carousel behavior
assets/img/        Put your photos here
```

## Editing

Everything is placeholder content right now. Search each HTML file for
`PLACEHOLDER` comments and the generic text ("Your Name", `you@example.com`,
`Project Title One`, etc.) and replace with your own. Photos go in
`assets/img/` — swap the `.gallery-item.placeholder` divs in `index.html`
for `<img src="assets/img/your-photo.jpg" alt="...">`.

## Running locally

No build step needed — just open `index.html` in a browser, or serve the
folder locally:

```bash
python3 -m http.server 8000
```

Then visit `http://localhost:8000`.

## Deploying (GitHub Pages)

1. Push this repo to GitHub.
2. In the repo settings, go to **Pages**.
3. Set the source to the `main` branch, root folder.
4. Your site will be live at `https://<username>.github.io/<repo-name>/`.
