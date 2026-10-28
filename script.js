/* ============================================================
   ✏️  EDIT EVERYTHING ABOUT HER RIGHT HERE
   ============================================================ */
const CONFIG = {
  herName: "Engy",           // on the envelope, letter & cake
  heroName: "Anouge",        // on the big "happy birthday" screen
  fromName: "Hesham",

  // 💌 The letter that comes out of the envelope
  letter: {
    hello: "My Anouge 🤍",
    body: [
      "Happy birthday, habebty.",
      "I've tried to write this so many times, and nothing ever sounds good enough for you. So I'll just say it the way I feel it.",
      "You make everything lighter. You're the first thing I think about when I wake up and the last thing on my mind before I sleep, and I wouldn't want it any other way.",
      "Thank you for your patience with me, for your laugh, and for believing in me even on the days I didn't.",
      "I stayed up way too late making this, just to see you smile today. Turn the sound up, take your time, and know that every little piece of it is you.",
    ],
    sign: "Yours, always,\nHesham",
  },

  // The love message: one screen per scene, revealed word by word.
  // Wrap a word in *stars* to make it BIG. Use " / " for a new line.
  // background options: cream, blush, sand, rose, peach
  scenes: [
    { bg: "peach", tag: "things I never said out loud",
      text: "I'm *not* perfect, / but for you / I want to be *everything*" },
    { bg: "cream",
      text: "I want to *understand* you, / not just the *big* things, / but every *little* detail" },
    { bg: "blush",
      text: "the way your *eyes* light up / when you talk about / something you *love*… / I could watch that *forever*" },
    { bg: "sand",
      text: "*tell* me what makes you *laugh*, / what makes you feel *safe*, / and *teach* me how to love you *right*" },
    { bg: "rose",
      text: "you have *no* *idea* / how often you're / on my *mind*" },
    { bg: "peach",
      text: "*somehow* / even my most *ordinary* days / feel *softer* with you in them" },
    { bg: "cream",
      text: "your *happiness* / means *everything* / to me" },
    { bg: "blush",
      text: "I *still* get *butterflies* / every single time / your *name* lights up my phone" },
    { bg: "sand",
      text: "I want to be the one who *shows* *up*, / who *learns*, / who *grows* with you" },
    { bg: "rose",
      text: "on your *hardest* days, / *lean* on me. / I'm *not* going *anywhere*" },
    { bg: "peach",
      text: "and I'll *love* you a little *deeper* / every single *day*" },
    { bg: "cream",
      text: "share your *dreams* / and your *fears* with me, / I *promise* I'll be *there*" },
    { bg: "blush",
      text: "if I had to *choose* again, / a *thousand* times over, / I'd *still* choose *you*" },
    { bg: "sand",
      text: "you *deserve* a love / that feels like *home*, / and I'll do *whatever* it takes / to be *that* for you" },
    { bg: "rose",
      text: "thank you for being *you*, / for being *mine*, / for being my *favorite* *everything*" },
    { bg: "blush",
      text: "because *you* are / my *number* *one*, / *Anouge* ♥" },
  ],
  finaleLine: "I love you, today and every day ♥",

  // 📁 Photos & videos load AUTOMATICALLY from the /photos and /videos folders.
  // Just upload files there (any names). Supported: jpg, jpeg, png, webp, gif / mp4, webm, mov
  // Photos are shown in file-name order (01.jpg, 02.jpg, …) and get these captions in the same order.
  photoCaptions: [
    "candlelight & you", "evening strolls with you", "our Philly adventure", "my favorite smile",
    "our special day 💍", "you in red… wow", "my forever person", "golden hour with you",
    "road trips with you", "late-night food runs", "dinner dates with you", "colorful days with you",
    "us being silly 😎", "sunset drives", "my safe place", "date night",
    "so proud of you 🎓", "you're my favorite channel", "our kind of night out", "the way you make me laugh",
    "my favorite passenger", "snowy days with you ❄️", "night walks with you", "to many more ♥",
    "shopping dates", "all dressed up", "cheering together 🇪🇬", "board game dates 🎲",
    "car selfies forever", "co-pilot of my life", "little adventures", "late-night drives",
    "snowfall with you", "Brooklyn Bridge with you 🌉", "you & your teddy 🧸", "my favorite selfie",
    "celebrating you", "E & H ♥", "kids at heart", "coffee dates ☕", "my graduate 🎓",
  ],
  photosPerPage: 24,
  // Extra captions for any photos beyond the list above
  moreCaptions: ["us ♥", "my favorite view", "my person", "core memory", "you & me", "always us"],
  // Optional: caption a specific file by name, e.g. "beach.jpg": "our beach day" (works for videos too)
  captions: {},
  // where the site lives on GitHub (used to read the folders)
  github: { owner: "Hesham-Nabil", repo: "for_NG", branch: "main" },
};

/* ============================================================
   You don't need to touch anything below this line
   ============================================================ */
const $ = (s, el = document) => el.querySelector(s);
const $$ = (s, el = document) => [...el.querySelectorAll(s)];
const rand = (a, b) => a + Math.random() * (b - a);
const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const IMG_EXT = /\.(jpe?g|png|webp|gif|avif)$/i;
const VID_EXT = /\.(mp4|webm|mov|m4v)$/i;

/* ---------- names & letter ---------- */
$$(".her-name").forEach((el) => (el.textContent = CONFIG.herName));
$("#from-name").textContent = CONFIG.fromName;
document.title = `For ${CONFIG.herName} 💌`;
$(".letter-hello").textContent = CONFIG.letter.hello;
$(".letter-body").innerHTML = CONFIG.letter.body.map((t) => `<p>${t}</p>`).join("");
$(".letter-sign").textContent = CONFIG.letter.sign;
$(".finale-line").textContent = CONFIG.finaleLine;

/* ---------- hero title ---------- */
(function buildHero() {
  const h = $("#hb-title");
  let i = 0;
  [["happy birthday,", "ink"], [CONFIG.heroName + " ♥", "burgundy"]].forEach(([line, color]) => {
    const row = document.createElement("span");
    row.className = "row c-" + color;
    [...line].forEach((ch) => {
      const l = document.createElement("span");
      if (ch === " ") { l.className = "sp"; row.appendChild(l); return; }
      l.className = "l";
      l.textContent = ch;
      l.style.setProperty("--i", i++);
      row.appendChild(l);
    });
    h.appendChild(row);
  });
  const fl = $(".floaties");
  const bits = ["♥", "♡", "♥", "✿", "♥", "♡"];
  for (let k = 0; k < (innerWidth < 600 ? 14 : 24); k++) {
    const s = document.createElement("span");
    s.textContent = bits[k % bits.length];
    s.style.left = rand(0, 100) + "%";
    s.style.color = ["var(--rose)", "var(--burgundy)", "#e9a3b0"][k % 3];
    s.style.setProperty("--s", rand(14, 30) + "px");
    s.style.setProperty("--d", rand(8, 16) + "s");
    s.style.setProperty("--delay", rand(0, 12) + "s");
    s.style.setProperty("--r", rand(-60, 60) + "deg");
    fl.appendChild(s);
  }
})();

/* ---------- story scenes ---------- */
const HEART = `<svg viewBox="0 0 24 24"><path d="M12 21s-7.5-4.6-9.6-9.2C.9 8.4 3 4.5 6.7 4.5c2.2 0 3.6 1.3 5.3 3.2 1.7-1.9 3.1-3.2 5.3-3.2 3.7 0 5.8 3.9 4.3 7.3C19.5 16.4 12 21 12 21z" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/></svg>`;

function decor() {
  let out = `<div class="blob b1"></div><div class="blob b2"></div>`;
  [[10, 42], [86, 36], [50, 92]].forEach(([x, y]) => {
    if (Math.random() < 0.4) return;
    const size = rand(24, 46).toFixed(0);
    out += `<span class="deco drift" style="left:${x + rand(-4, 4)}%;top:${y + rand(-4, 4)}%;width:${size}px;height:${size}px;--d:${rand(5, 9).toFixed(1)}s;--r0:${rand(-15, 0).toFixed(0)}deg;--r1:${rand(0, 15).toFixed(0)}deg">${HEART}</span>`;
  });
  return out;
}

function buildWords(text) {
  const wrap = document.createElement("div");
  wrap.className = "words";
  let i = 0;
  text.split(/\s+/).forEach((tok) => {
    if (tok === "/") {
      const br = document.createElement("span");
      br.className = "br";
      wrap.appendChild(br);
      return;
    }
    const big = /^\*.*\*[,.!?]*$/.test(tok);
    const w = document.createElement("span");
    w.className = big ? "w big c-burgundy" : "w c-ink";
    w.textContent = tok.replace(/\*/g, "");
    w.style.setProperty("--i", i++);
    wrap.appendChild(w);
  });
  return wrap;
}

const storyScenes = CONFIG.scenes.map((sc) => {
  const sec = document.createElement("section");
  sec.className = `scene scene--${sc.bg || "cream"} story-scene`;
  sec.innerHTML = decor() + (sc.tag ? `<p class="scene-tag">${sc.tag}</p>` : "");
  sec.appendChild(buildWords(sc.text));
  $("#story").appendChild(sec);
  return sec;
});

/* ============================================================
   Load photos & videos from the folders
   ============================================================ */
async function listFolder(folder, extRe) {
  // 1) ask GitHub what's in the folder (works on GitHub Pages, no list to maintain)
  const host = location.hostname;
  let { owner, repo, branch } = CONFIG.github;
  if (host.endsWith(".github.io")) {
    owner = host.split(".")[0];
    const first = location.pathname.split("/").filter(Boolean)[0];
    if (first && !first.includes(".")) repo = first;
  }
  try {
    const r = await fetch(`https://api.github.com/repos/${owner}/${repo}/contents/${folder}?ref=${branch}`, { headers: { Accept: "application/vnd.github+json" } });
    if (r.ok) {
      const items = await r.json();
      const files = items.filter((it) => it.type === "file" && extRe.test(it.name)).map((it) => it.name);
      if (files.length) return sortNames(files).map((n) => `${folder}/${encodeURIComponent(n)}`);
    }
  } catch (e) { /* fall through */ }
  // 2) fallback: a list.json inside the folder
  try {
    const r = await fetch(`${folder}/list.json`, { cache: "no-store" });
    if (r.ok) {
      const names = (await r.json()).filter((n) => extRe.test(n));
      return names.map((n) => `${folder}/${encodeURIComponent(n)}`);
    }
  } catch (e) { /* nothing */ }
  return [];
}
function sortNames(arr) {
  return arr.sort((a, b) => a.localeCompare(b, undefined, { numeric: true, sensitivity: "base" }));
}
// small version for the grid & scroll polaroids (falls back to the full photo if missing)
function thumb(src) { return src.replace(/^photos\//, "photos/thumbs/"); }
const THUMB_FALLBACK = `onerror="if(!this.dataset.f){this.dataset.f=1;this.src=this.dataset.full}"`;
function fileName(path) { return decodeURIComponent(path.split("/").pop()); }
function prettyTitle(path) {
  const base = fileName(path).replace(/\.[^.]+$/, "");
  if (/^(img|dsc|vid|pxl|mvimg|screenshot|whatsapp|snapchat)?[\W_]*\d[\d\W_]*$/i.test(base) || /^(IMG|VID|PXL|DSC)[_-]/i.test(base)) return "";
  return base.replace(/[-_]+/g, " ").replace(/\s+/g, " ").trim();
}

let PHOTOS = [];
const PH_COLORS = [["#f8dde0", "#f9e8d6"], ["#f3e3d3", "#f6d6da"], ["#fbe9e4", "#f1d9c4"], ["#f6dcd8", "#fdf0e6"], ["#efe2d2", "#f8dfe2"]];

function defaultCaption(idx) {
  const pc = CONFIG.photoCaptions;
  return idx < pc.length ? pc[idx] : CONFIG.moreCaptions[(idx - pc.length) % CONFIG.moreCaptions.length];
}
function photoCaption(path, idx) {
  const name = fileName(path);
  return CONFIG.captions[name] || defaultCaption(idx);
}

let galleryPage = 0;
function renderGallery(scroll) {
  const grid = $("#photo-grid");
  const pager = $("#pager");
  grid.innerHTML = "";
  const list = PHOTOS.length ? PHOTOS : Array.from({ length: CONFIG.photoCaptions.length }, () => null);
  const per = CONFIG.photosPerPage;
  const pages = Math.max(1, Math.ceil(list.length / per));
  galleryPage = Math.min(galleryPage, pages - 1);
  const start = galleryPage * per;
  list.slice(start, start + per).forEach((src, k) => {
    const idx = start + k;
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "polaroid " + (src ? "has-media" : "missing");
    btn.style.setProperty("--rot", (idx % 2 ? 1 : -1) * rand(1.5, 4) + "deg");
    btn.style.setProperty("--delay", (k % 6) * 0.07 + "s");
    const [c1, c2] = PH_COLORS[idx % PH_COLORS.length];
    const cap = src ? photoCaption(src, idx) : defaultCaption(idx);
    btn.innerHTML = `
      <span class="tape"></span>
      <figure style="margin:0">
        <div class="ph">
          ${src ? `<img src="${thumb(src)}" data-full="${src}" ${THUMB_FALLBACK} alt="${cap}" loading="lazy" decoding="async" />`
                : `<div class="placeholder" style="--pc1:${c1};--pc2:${c2}"><span class="ph-heart">♥</span>photo ${idx + 1}</div>`}
        </div>
        <figcaption>${cap}</figcaption>
      </figure>`;
    btn.addEventListener("click", () => openPhoto(idx, btn));
    grid.appendChild(btn);
    if (scroll) requestAnimationFrame(() => btn.classList.add("in")); else io.observe(btn);
  });
  // page buttons
  pager.hidden = pages < 2;
  pager.innerHTML = "";
  if (pages < 2) return;
  const mk = (label, page, extra = "") => {
    const b = document.createElement("button");
    b.type = "button";
    b.className = "pg " + extra;
    b.innerHTML = label;
    if (page === null) { b.disabled = true; return b; }
    b.addEventListener("click", () => { galleryPage = page; renderGallery(true); $("#gallery").scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth" }); });
    return b;
  };
  pager.append(mk("‹ prev", galleryPage > 0 ? galleryPage - 1 : null, "arrow"));
  for (let p = 0; p < pages; p++) pager.append(mk(String(p + 1), p, p === galleryPage ? "on" : ""));
  pager.append(mk("next ›", galleryPage < pages - 1 ? galleryPage + 1 : null, "arrow"));
}

function addSnippets() {
  if (!PHOTOS.length) return;
  // spread the photos across the scenes, 2 per screen, without repeating when possible
  const order = [...PHOTOS].sort(() => Math.random() - 0.5);
  let k = 0;
  storyScenes.forEach((sec, i) => {
    const slots = i % 2 ? ["p2", "p3"] : ["p0", "p1"];
    slots.forEach((slot, j) => {
      if (k >= order.length) return;          // never show the same photo twice
      const src = order[k++];
      const fig = document.createElement("figure");
      fig.className = `snip ${slot}`;
      fig.style.setProperty("--rot", (j ? 1 : -1) * rand(4, 9) + "deg");
      fig.innerHTML = `<img src="${thumb(src)}" data-full="${src}" ${THUMB_FALLBACK} alt="${photoCaption(src, PHOTOS.indexOf(src))}" loading="lazy" decoding="async" />`;
      fig.tabIndex = 0;
      fig.setAttribute("role", "button");
      const open = () => openPhoto(PHOTOS.indexOf(src), fig);
      fig.addEventListener("click", open);
      fig.addEventListener("keydown", (e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); open(); } });
      sec.appendChild(fig);
    });
  });
  // gentle parallax while scrolling
  const snips = $$(".snip");
  let ticking = false;
  const update = () => {
    const vh = innerHeight;
    snips.forEach((s) => {
      const r = s.parentElement.getBoundingClientRect();
      const p = (r.top + r.height / 2 - vh / 2) / vh;      // -1 .. 1 around the centre
      s.style.setProperty("--py", (p * (s.classList.contains("p1") || s.classList.contains("p3") ? 60 : -60)).toFixed(1) + "px");
    });
    ticking = false;
  };
  if (!reduceMotion) {
    addEventListener("scroll", () => { if (!ticking) { ticking = true; requestAnimationFrame(update); } }, { passive: true });
    update();
  }
}

/* ============================================================
   Reveal on scroll
   ============================================================ */
const io = new IntersectionObserver((entries) => {
  entries.forEach((en) => {
    if (en.isIntersecting) { en.target.classList.add("in"); io.unobserve(en.target); }
  });
}, { threshold: 0.3 });
storyScenes.forEach((el) => io.observe(el));

// first paint with placeholders, then fill from the folders
renderGallery();
listFolder("photos", IMG_EXT).then((list) => {
  PHOTOS = list;
  if (list.length) { renderGallery(); addSnippets(); }
});

/* ============================================================
   Music: plays in the background, pauses while any video plays
   ============================================================ */
const music = $("#bg-music");
const musicBtn = $("#music-btn");
const nowPlaying = $("#now-playing");
let musicOn = false;        // what the user wants (button state)
let fadeTimer = null;
const TARGET_VOL = 0.85;

function setBtn(playing) {
  musicBtn.classList.toggle("playing", playing);
  musicBtn.setAttribute("aria-label", playing ? "Pause music" : "Play music");
}
function fadeTo(target, ms, done) {
  clearInterval(fadeTimer);
  const start = music.volume;
  const steps = Math.max(1, Math.round(ms / 40));
  let n = 0;
  fadeTimer = setInterval(() => {
    n++;
    music.volume = Math.min(1, Math.max(0, start + (target - start) * (n / steps)));
    if (n >= steps) { clearInterval(fadeTimer); done && done(); }
  }, 40);
}
function musicPlay() {
  music.volume = 0;
  const p = music.play();
  if (p && p.catch) p.catch(() => setBtn(false));
  fadeTo(TARGET_VOL, 1200);
  setBtn(true);
}
function musicPause(fast) {
  fadeTo(0, fast ? 250 : 600, () => music.pause());
  setBtn(false);
}
function anyVideoPlaying() {
  return $$("video").some((v) => !v.paused && !v.ended && !v.muted);
}
function maybeResumeMusic() {
  setTimeout(() => { if (musicOn && !anyVideoPlaying() && music.paused) musicPlay(); }, 150);
}
// capture-phase listeners catch play/pause from every <video> on the page
document.addEventListener("play", (e) => {
  if (e.target.tagName === "VIDEO" && !e.target.muted && !music.paused) musicPause(true);
}, true);
["pause", "ended"].forEach((evt) =>
  document.addEventListener(evt, (e) => {
    if (e.target.tagName === "VIDEO" && !e.target.muted) maybeResumeMusic();
  }, true)
);
musicBtn.addEventListener("click", () => {
  musicOn = !musicOn;
  if (musicOn && !anyVideoPlaying()) musicPlay();
  else musicPause();
});

/* ---------- envelope → letter → site ---------- */
const gate = $("#gate");
const envelope = $("#envelope");
function openEnvelope() {
  if (envelope.classList.contains("open")) return;
  musicOn = true;
  musicPlay();   // must start inside the tap so phones allow sound
  musicBtn.hidden = false;
  envelope.classList.add("open");
  setTimeout(() => gate.classList.add("letter-open"), 1500);
  setTimeout(() => { gate.classList.add("letter-shown"); $("#letter-card").removeAttribute("aria-hidden"); }, 1900);
}
envelope.addEventListener("click", openEnvelope);
envelope.addEventListener("keydown", (e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); openEnvelope(); } });

$("#letter-go").addEventListener("click", () => {
  if (musicOn && music.paused) musicPlay();
  gate.classList.add("gone");
  document.body.classList.remove("locked");
  nowPlaying.hidden = false;
  setTimeout(() => nowPlaying.classList.add("hide"), 4500);
  $("#hb-title").classList.add("go");
  setTimeout(() => $("#hero").classList.add("in"), 50);
  setTimeout(() => gate.remove(), 1300);
});

/* ============================================================
   Photo lightbox
   ============================================================ */
const photoModal = $("#photo-modal");
const photoImg = $("#photo-modal-img");
const photoCap = $("#photo-modal-cap");
let photoIdx = 0;

function showPhoto(i) {
  photoIdx = i;
  const full = PHOTOS[i];
  photoImg.src = thumb(full);           // appears instantly (already loaded in the grid)
  photoImg.onerror = () => { photoImg.onerror = null; photoImg.src = full; };
  const hi = new Image();
  hi.onload = () => { if (photoIdx === i) photoImg.src = full; };
  hi.src = full;
  const cap = photoCaption(PHOTOS[i], i);
  photoImg.alt = cap;
  photoCap.textContent = cap;
}
function openPhoto(i, card) {
  if (!PHOTOS.length) {
    card.animate([{ transform: "rotate(0) scale(1)" }, { transform: "rotate(-4deg) scale(1.05)" }, { transform: "rotate(3deg) scale(1.05)" }, { transform: "rotate(0) scale(1)" }], { duration: 400 });
    return;
  }
  showPhoto(i);
  openModal(photoModal);
  zoomFrom(card);
}
// the photo grows out of the one she tapped
function zoomFrom(card) {
  if (reduceMotion || !card) return;
  const from = ($("img", card) || card).getBoundingClientRect();
  const fig = $(".modal-figure", photoModal);
  const run = () => {
    const to = photoImg.getBoundingClientRect();
    if (!to.width) return;
    const sx = from.width / to.width, sy = from.height / to.height;
    const dx = from.left + from.width / 2 - (to.left + to.width / 2);
    const dy = from.top + from.height / 2 - (to.top + to.height / 2);
    photoImg.animate(
      [{ transform: `translate(${dx}px, ${dy}px) scale(${sx}, ${sy})`, opacity: .6 },
       { transform: "none", opacity: 1 }],
      { duration: 480, easing: "cubic-bezier(.2, 1.1, .3, 1)" });
    $("figcaption", fig).animate([{ opacity: 0, transform: "translateY(10px)" }, { opacity: 1, transform: "none" }], { duration: 400, delay: 250, fill: "backwards" });
  };
  if (photoImg.complete && photoImg.naturalWidth) run(); else photoImg.addEventListener("load", run, { once: true });
}
function stepPhoto(dir) {
  if (!PHOTOS.length) return;
  showPhoto((photoIdx + dir + PHOTOS.length) % PHOTOS.length);
  if (!reduceMotion) photoImg.animate([{ opacity: 0, transform: `translateX(${dir * 40}px) rotate(${dir * 2}deg)` }, { opacity: 1, transform: "none" }], { duration: 350, easing: "ease-out" });
}
$("#photo-prev").addEventListener("click", (e) => { e.stopPropagation(); stepPhoto(-1); });
$("#photo-next").addEventListener("click", (e) => { e.stopPropagation(); stepPhoto(1); });

let touchX = null;
photoModal.addEventListener("touchstart", (e) => (touchX = e.touches[0].clientX), { passive: true });
photoModal.addEventListener("touchend", (e) => {
  if (touchX === null) return;
  const dx = e.changedTouches[0].clientX - touchX;
  if (Math.abs(dx) > 45) stepPhoto(dx < 0 ? 1 : -1);
  touchX = null;
});

/* ---------- shared modal behaviour ---------- */
let openedModal = null;
function openModal(m) {
  m.hidden = false;
  openedModal = m;
  document.body.style.overflow = "hidden";
  $(".modal-close", m).focus({ preventScroll: true });
}
function closeModal() {
  if (!openedModal) return;
  const m = openedModal;
  openedModal = null;
  document.body.style.overflow = "";
  if (reduceMotion) { m.hidden = true; return; }
  m.classList.add("closing");
  setTimeout(() => { m.hidden = true; m.classList.remove("closing"); }, 220);
}
$$(".modal").forEach((m) => {
  m.addEventListener("click", (e) => {
    if (e.target === m || e.target.closest("[data-close]")) closeModal();
  });
});
document.addEventListener("keydown", (e) => {
  if (!openedModal) return;
  if (e.key === "Escape") closeModal();
  if (openedModal === photoModal && e.key === "ArrowRight") stepPhoto(1);
  if (openedModal === photoModal && e.key === "ArrowLeft") stepPhoto(-1);
});

/* ============================================================
   Finale: blow out the candle
   ============================================================ */
const cake = $("#cake");
const wishHint = $("#wish-hint");
let cakeTaps = 0;
let typeTimer = null;

function typeText(el, text, speed = 55) {
  clearInterval(typeTimer);
  el.innerHTML = "";
  const span = document.createElement("span");
  const caret = document.createElement("span");
  caret.className = "caret";
  el.append(span, caret);
  let i = 0;
  typeTimer = setInterval(() => {
    span.textContent = text.slice(0, ++i);
    if (i >= text.length) clearInterval(typeTimer);
  }, speed);
}

function blowCandle() {
  if (cake.classList.contains("out")) {
    // after the wish, every tap throws more confetti 🎉
    cake.classList.remove("hop"); void cake.offsetWidth; cake.classList.add("hop");
    streamers(innerWidth < 600 ? 40 : 70);
    return;
  }
  cakeTaps++;
  if (cakeTaps === 1) {
    // first tap: nothing happens yet, just a little nudge
    wishHint.classList.add("nudge");
    typeText(wishHint, "Make a wish first :)");
    cake.classList.remove("shake"); void cake.offsetWidth; cake.classList.add("shake");
    return;
  }
  clearInterval(typeTimer);
  celebrate();
  cake.classList.add("out");
  $("#finale").classList.add("wished");
  heartBurst();
}

cake.addEventListener("click", blowCandle);
cake.addEventListener("keydown", (e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); blowCandle(); } });

function heartBurst() {
  if (reduceMotion) return;
  const box = $("#confetti");
  const bits = ["♥", "♥", "♡", "❤️", "✿", "♥"];
  const n = innerWidth < 600 ? 50 : 90;
  for (let i = 0; i < n; i++) {
    const s = document.createElement("span");
    s.textContent = bits[i % bits.length];
    s.style.left = rand(0, 100) + "vw";
    s.style.color = ["var(--rose)", "var(--burgundy)", "#e9a3b0", "#d9b089"][i % 4];
    s.style.setProperty("--s", rand(14, 30) + "px");
    s.style.setProperty("--d", rand(2.4, 4.2) + "s");
    s.style.setProperty("--delay", rand(0, 0.8) + "s");
    s.style.setProperty("--x", rand(-80, 80) + "px");
    s.style.setProperty("--r", rand(-540, 540) + "deg");
    box.appendChild(s);
    setTimeout(() => s.remove(), 5500);
  }
}

/* ============================================================
   Celebration: cake hop, sparkles, streamers, bunting
   ============================================================ */
function celebrate() {
  cake.classList.remove("shake", "hop"); void cake.offsetWidth; cake.classList.add("hop");
  sparkles();
  $("#finale").classList.add("party");
  if (reduceMotion) return;
  streamers(innerWidth < 600 ? 70 : 130);
  setTimeout(() => streamers(innerWidth < 600 ? 40 : 80), 1300);
}

function sparkles() {
  if (reduceMotion) return;
  const box = document.createElement("div");
  box.className = "sparkles";
  cake.appendChild(box);
  const n = 14;
  for (let i = 0; i < n; i++) {
    const s = document.createElement("span");
    s.textContent = i % 3 ? "✦" : "♥";
    const a = (i / n) * Math.PI * 2;
    const r = rand(90, 140);
    s.style.color = ["var(--burgundy)", "var(--rose)", "#e8c27a"][i % 3];
    box.appendChild(s);
    s.animate(
      [{ transform: "translate(-50%, -50%) scale(.2)", opacity: 1 },
       { transform: `translate(calc(-50% + ${Math.cos(a) * r}px), calc(-50% + ${Math.sin(a) * r}px)) scale(1.2) rotate(${rand(-90, 90)}deg)`, opacity: 1, offset: .7 },
       { transform: `translate(calc(-50% + ${Math.cos(a) * r * 1.15}px), calc(-50% + ${Math.sin(a) * r * 1.15 + 20}px)) scale(.6)`, opacity: 0 }],
      { duration: 1300, easing: "cubic-bezier(.2, .8, .3, 1)", fill: "forwards" });
  }
  setTimeout(() => box.remove(), 1500);
}

// paper streamers & ribbons that shoot up from both bottom corners and flutter down
function streamers(count) {
  if (reduceMotion) return;
  const box = $("#confetti");
  const colors = ["#8b1e3f", "#c95b72", "#e9a3b0", "#ddb994", "#e8c27a", "#ffffff", "#f3c6cf"];
  const W = innerWidth, H = innerHeight;
  for (let i = 0; i < count; i++) {
    const left = i % 2 === 0;
    const el = document.createElement("span");
    const kind = Math.random();
    el.className = "streamer " + (kind < 0.25 ? "curl" : kind < 0.55 ? "long" : "bit");
    el.style.background = colors[i % colors.length];
    el.style.left = left ? "-10px" : W + 10 + "px";
    el.style.top = H + 10 + "px";
    box.appendChild(el);
    const dir = left ? 1 : -1;
    const peakX = dir * rand(W * 0.15, W * 0.7);
    const peakY = -rand(H * 0.55, H * 1.05);
    const endX = peakX + dir * rand(20, 160);
    const spin = rand(360, 1080) * (Math.random() < 0.5 ? -1 : 1);
    const dur = rand(2600, 4200);
    el.animate(
      [{ transform: `translate(0, 0) rotate(0deg) rotateX(0deg)` },
       { transform: `translate(${peakX}px, ${peakY}px) rotate(${spin * 0.4}deg) rotateX(${spin}deg)`, offset: 0.32, easing: "cubic-bezier(.3, 0, .6, 1)" },
       { transform: `translate(${endX}px, 20px) rotate(${spin}deg) rotateX(${spin * 3}deg)` }],
      { duration: dur, delay: rand(0, 350), easing: "cubic-bezier(.15, .7, .4, 1)", fill: "both" }
    ).onfinish = () => el.remove();
  }
}

// little paper flags along the bunting string
(function buildBunting() {
  const g = $(".bunting .flags");
  if (!g) return;
  const colors = ["#8b1e3f", "#f3c6cf", "#ddb994", "#c95b72", "#fffdf9", "#e8c27a"];
  const n = innerWidth < 600 ? 11 : 19;
  let html = "";
  for (let i = 0; i < n; i++) {
    const t = (i + 0.5) / n;
    const x = (1 - t) * (1 - t) * 0 + 2 * (1 - t) * t * 500 + t * t * 1000;
    const y = (1 - t) * (1 - t) * 10 + 2 * (1 - t) * t * 110 + t * t * 10;
    const w = 1000 / n * 0.42;
    html += `<polygon points="${x - w},${y} ${x + w},${y} ${x},${y + 52}" fill="${colors[i % colors.length]}" stroke="rgba(139,30,63,.12)" style="animation-delay:${(-i * 0.37).toFixed(2)}s"/>`;
  }
  g.innerHTML = html;
})();
