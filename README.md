# For Engy 💌

A birthday website: a kraft envelope with a letter inside, a love message revealed word by word with our photos popping in, a gallery, our vlogs & recaps, and a cake that unlocks her birthday video. *Lovesong* plays in the background and pauses whenever a video plays.

## Add photos → `photos/`
Upload them into the `photos` folder (any number). They show up automatically in the gallery **and** as little polaroids while scrolling.
Name them `01.jpg`, `02.jpg` … so they appear in this order with these captions:

| file | caption |
|---|---|
| 01 | where it all started |
| 02 | my favorite smile |
| 03 | that one perfect day |
| 04 | us being silly |
| 05 | golden hour with you |
| 06 | late night talks |
| 07 | my safe place |
| 08 | adventure buddies |
| 09 | you, being beautiful |
| 10 | to many more ♥ |

## Add vlogs / recaps → `videos/`
Upload `.mp4` (or `.mov`/`.webm`) files. The file name becomes the title, so `summer-recap.mp4` shows as "summer recap".

## Her birthday video → `birthday/`
Put **one** video in the `birthday` folder. It appears after she blows out the candle.

## Size limits
GitHub's website only accepts files up to **25 MB** per upload, and git pushes up to **100 MB** per file. Compress longer videos first.

## Change any text
Everything is at the top of `script.js` in `CONFIG`: her name, the letter, the love message, captions.

## Turn on the link
Repo **Settings → Pages → Deploy from a branch → `main` / `(root)` → Save**.
