# Personal Website

A simple personal website (plain HTML/CSS/JS, no build step), styled after
[filipzaleski.com](https://filipzaleski.com): a cream background, serif
headline, a featured-work carousel, and a photo gallery.

## Structure

```
index.html       Home / Bio (intro, education, experience, skills)
work.html        Work (academic/research projects)
me.html         Me (travel and sports, with photo + video placeholders)
assets/css/style.css  All styling
assets/js/main.js    Carousel behavior
assets/img/        Photos go here
assets/video/      Video clips go here
```

Contact links (email, GitHub) live in the footer on every page — there's
no separate contact page.

## Editing

Search each HTML file for `placeholder-note` blocks and generic text
(e.g. the tag-list "Add more…" entry on `me.html`) and replace with your
own. Photos go in `assets/img/` — swap a `.gallery-item.placeholder` div
for `<img src="assets/img/your-photo.jpg" alt="...">`. Video clips go in
`assets/video/` — swap a `.video-item.placeholder` div for
`<video src="assets/video/your-clip.mp4" controls></video>`.

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
