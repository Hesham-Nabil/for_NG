/* ============================================================
   ✏️  EDIT EVERYTHING ABOUT HER RIGHT HERE
   ============================================================ */
const CONFIG = {
  herName: "Engy",           // on the envelope, letter & cake
  heroName: "Anouge",        // on the big "happy birthday" screen
  fromName: "Hesham",

  // 💌 The letter that comes out of the envelope
  letter: {
    hello: "To Engy, my favorite person 🤍",
    body: [
      "Happy birthday, my love.",
      "I made you this little corner of the internet, because some things are easier to show than to say.",
      "Turn your sound on, scroll slowly, and remember: every bit of this is for you.",
    ],
    sign: "— yours, always. Hesham",
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
    "where it all started", "my favorite smile", "that one perfect day", "us being silly",
    "golden hour with you", "late night talks", "my safe place", "adventure buddies",
    "you, being beautiful", "our little adventures", "next to you is my favorite place", "that laugh though",
    "home is wherever you are", "the day I just knew", "my sunshine", "pure happiness",
    "my whole heart", "best company", "stolen moments", "you & me, always",
    "core memory", "my person", "still my favorite view", "to many more ♥",
  ],
  // Extra captions for any photos beyond the list above
  moreCaptions: ["us ♥", "my favorite view", "my person", "core memory", "you & me", "always us"],
  // Optional: caption a specific file by name, e.g. "beach.jpg": "our beach day" (works for videos too)
  captions: {},
  videoPlaceholders: 6,
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

function renderGallery() {
  const grid = $("#photo-grid");
  grid.innerHTML = "";
  const list = PHOTOS.length ? PHOTOS : Array.from({ length: CONFIG.photoCaptions.length }, () => null);
  list.forEach((src, idx) => {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "polaroid " + (src ? "has-media" : "missing");
    btn.style.setProperty("--rot", (idx % 2 ? 1 : -1) * rand(1.5, 4) + "deg");
    btn.style.setProperty("--delay", (idx % 6) * 0.07 + "s");
    const [c1, c2] = PH_COLORS[idx % PH_COLORS.length];
    const cap = src ? photoCaption(src, idx) : defaultCaption(idx);
    btn.innerHTML = `
      <span class="tape"></span>
      <figure style="margin:0">
        <div class="ph">
          ${src ? `<img src="${src}" alt="${cap}" loading="lazy" decoding="async" />`
                : `<div class="placeholder" style="--pc1:${c1};--pc2:${c2}"><span class="ph-heart">♥</span>photo ${idx + 1}</div>`}
        </div>
        <figcaption>${cap}</figcaption>
      </figure>`;
    btn.addEventListener("click", () => openPhoto(idx, btn));
    grid.appendChild(btn);
    io.observe(btn);
  });
}

function addSnippets() {
  if (!PHOTOS.length) return;
  // spread the photos across the scenes, 2 per screen, without repeating when possible
  const order = [...PHOTOS].sort(() => Math.random() - 0.5);
  let k = 0;
  storyScenes.forEach((sec, i) => {
    const slots = i % 2 ? ["p2", "p3"] : ["p0", "p1"];
    slots.forEach((slot, j) => {
      const src = order[k++ % order.length];
      const fig = document.createElement("figure");
      fig.className = `snip ${slot}`;
      fig.style.setProperty("--rot", (j ? 1 : -1) * rand(4, 9) + "deg");
      fig.innerHTML = `<img src="${src}" alt="" loading="lazy" decoding="async" />`;
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

/* ---------- vlogs ---------- */
const PLAY_SVG = `<svg viewBox="0 0 24 24" width="26" height="26" aria-hidden="true"><path d="M7 4.5v15l13-7.5z" fill="currentColor"/></svg>`;
const VLOG_COLORS = [["#f6d6da", "#f3e3d3"], ["#efe2d2", "#f8dde0"], ["#fbe4dc", "#f1d9c4"], ["#f8dfe2", "#efe2d2"]];

function renderVlogs(videos) {
  const grid = $("#vlog-grid");
  grid.innerHTML = "";
  const list = videos.length ? videos : Array.from({ length: CONFIG.videoPlaceholders }, () => null);
  list.forEach((src, idx) => {
    const card = document.createElement("button");
    card.type = "button";
    card.className = "vlog " + (src ? "has-media" : "missing");
    card.style.setProperty("--delay", (idx % 2) * 0.1 + "s");
    const [c1, c2] = VLOG_COLORS[idx % 4];
    const title = src ? (CONFIG.captions[fileName(src)] || prettyTitle(src) || `recap #${idx + 1}`) : "video coming soon";
    card.innerHTML = `
      <div class="thumb">
        ${src ? "" : `<div class="placeholder" style="--pc1:${c1};--pc2:${c2}"><span class="ph-heart">▶</span>add a vlog to the videos folder</div>`}
        <span class="play">${PLAY_SVG}</span>
      </div>
      <div class="vlog-meta"><h3>${title}</h3><p>${src ? "tap to watch ♥" : "soon ♥"}</p></div>`;
    if (src) {
      const probe = document.createElement("video");
      probe.muted = true;
      probe.playsInline = true;
      probe.preload = "metadata";
      probe.src = src + "#t=0.5";
      probe.setAttribute("aria-hidden", "true");
      probe.tabIndex = -1;
      $(".thumb", card).prepend(probe);
      card.addEventListener("click", () => openVideo(src, title));
    } else {
      card.addEventListener("click", () =>
        card.animate([{ transform: "translateX(0)" }, { transform: "translateX(-6px)" }, { transform: "translateX(6px)" }, { transform: "translateX(0)" }], { duration: 300 }));
    }
    grid.appendChild(card);
    io.observe(card);
  });
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
renderVlogs([]);
listFolder("photos", IMG_EXT).then((list) => {
  PHOTOS = list;
  if (list.length) { renderGallery(); addSnippets(); }
});
listFolder("videos", VID_EXT).then((list) => { if (list.length) renderVlogs(list); });

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
  photoImg.src = PHOTOS[i];
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
}
function stepPhoto(dir) {
  if (!PHOTOS.length) return;
  showPhoto((photoIdx + dir + PHOTOS.length) % PHOTOS.length);
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

/* ============================================================
   Video modal
   ============================================================ */
const videoModal = $("#video-modal");
const player = $("#video-player");

function openVideo(src, title) {
  player.src = src;
  $("#video-title").textContent = title;
  openModal(videoModal);
  const p = player.play();
  if (p && p.catch) p.catch(() => {});
}

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
  if (openedModal === videoModal) {
    player.pause();
    player.removeAttribute("src");
    player.load();
    maybeResumeMusic();
  }
  openedModal.hidden = true;
  openedModal = null;
  document.body.style.overflow = "";
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
  if (cake.classList.contains("out")) return;
  cakeTaps++;
  if (cakeTaps === 1) {
    // first tap: nothing happens yet, just a little nudge
    wishHint.classList.add("nudge");
    typeText(wishHint, "Make a wish first :)");
    cake.classList.remove("shake"); void cake.offsetWidth; cake.classList.add("shake");
    return;
  }
  clearInterval(typeTimer);
  cake.classList.add("out");
  $("#finale").classList.add("wished");
  heartBurst();
  showBirthdayVideo();
}

let BDAY_SRC = null;
listFolder("birthday", VID_EXT).then((list) => { BDAY_SRC = list[0] || null; });
function showBirthdayVideo() {
  const box = $("#bday-video");
  const reveal = () => {
    if (!BDAY_SRC) return;
    $("#bday-player").src = BDAY_SRC + "#t=0.1";
    box.hidden = false;
    requestAnimationFrame(() => requestAnimationFrame(() => box.classList.add("show")));
    setTimeout(() => box.scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth", block: "center" }), 900);
  };
  setTimeout(reveal, 2600);
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
