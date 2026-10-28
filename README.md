# For her 💛

A little birthday website: a love message revealed word by word, a photo gallery, and our vlogs & recaps, with *Lovesong* playing in the background (it pauses on its own whenever a video plays).

## Personalize it
Open `script.js`. Everything you'd want to change is in the `CONFIG` block at the top:
- `herName` / `fromName`
- `scenes`: the love message (wrap a word in `*stars*` to make it big, use ` / ` for a new line)
- `photos`: 10 captions + file names
- `videos`: titles + file names

## Add photos
Put your photos in `photos/` named `01.jpg`, `02.jpg` … `10.jpg`.
Anything missing shows a cute placeholder until you add it. Portrait photos look best (4:5).

## Add vlogs / recaps
Put `.mp4` files in `videos/` named `vlog-01.mp4` … `vlog-04.mp4`.
GitHub's limit is **100 MB per file**, so compress long videos first (1080p at a modest bitrate is plenty).
Want more or fewer videos or photos? Add or remove lines in `CONFIG`.

## Turn on the link (GitHub Pages)
Repo **Settings → Pages → Build and deployment → Source: Deploy from a branch → Branch: `main` / `(root)` → Save**.
After a minute the site is live at `https://<username>.github.io/<repo-name>/`.
