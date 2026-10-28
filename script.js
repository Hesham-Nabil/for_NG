/* ============================================================
   ✏️  EDIT EVERYTHING ABOUT HER RIGHT HERE
   ============================================================ */
const CONFIG = {
  herName: "my love",        // her name or nickname
  fromName: "Hesham",        // how you sign it

  // 💌 The letter that comes out of the envelope (Arabic)
  letter: {
    hello: "إلى أحلى حد في الدنيا 🤍",
    body: [
      "كل سنة وانتي طيبة يا حبيبتي، وكل سنة وانتي معايا.",
      "عملتلك الحتة الصغيرة دي من الإنترنت عشان أقولك كل الكلام اللي ساعات بيقف على لساني ومش بعرف أقوله.",
      "علّي الصوت، وانزلي على مهلك… كل حاجة هنا معمولة عشانك.",
    ],
    sign: "— بحبك، هشام",
  },
  finaleArabic: "وكل سنة وانتي حبيبتي 🤍",

  // The love message: one scene per screen, revealed word by word.
  // Wrap a word in *stars* to make it BIG. Use " / " to force a line break.
  // theme (background) options: cream, blush, sand, rose, peach
  // add  lang: "ar"  for an Arabic scene (right-to-left, Arabic font)
  scenes: [
    { theme: "peach",   lang: "ar", tag: "كلام جوايا عمري ما قلتهولك",
      text: "*عارف* إني مش كامل / بس نفسي أكون *كل* حاجة *حلمتي* بيها" },
    { theme: "cream",   lang: "ar",
      text: "*نفسي* أكون الراجل اللي *فاهمك* / مش بس في الحاجات *الكبيرة* / لكن في *أصغر* التفاصيل" },
    { theme: "sand",    lang: "ar",
      text: "*قوليلي* إيه اللي بيضحكك / وإيه اللي بيحسسك *بالأمان* / *وعلميني* أحبك إزاي" },
    { theme: "blush",   lang: "ar",
      text: "مش عايز *أفترض* إني عارف / *سعادتك* بالنسبالي / هي *كل* حاجة" },
    { theme: "peach",   lang: "ar",
      text: "*عايز* أكون اللي *موجود* دايمًا / اللي بيعملها *صح* / *وبيتعلم* من غلطه" },
    { theme: "rose",    lang: "ar",
      text: "*وهفضل* دايمًا مستعد *أكبر* / *وأحبك* أعمق من *إمبارح*" },
    { theme: "cream",   lang: "ar",
      text: "*احكيلي* عن *أحلامك* / وعن *خوفك* / *وأوعدك* هكون *جنبك*" },
    { theme: "blush",   lang: "ar",
      text: "*انتي* تستاهلي حب *يليق* بيكي / *وأنا* مستعد أعمل *أي* حاجة / عشان أكون *الشخص* ده ليكي" },
    { theme: "blush",   lang: "ar",
      text: "*عشان* انتي / *رقم* *واحد* عندي 🤍" },
  ],

  // 📸 Photos: drop your pictures in the /photos folder with these names
  // (or change the names here). Any missing file shows a cute placeholder.
  photos: [
    { src: "photos/01.jpg", caption: "where it all started" },
    { src: "photos/02.jpg", caption: "my favorite smile" },
    { src: "photos/03.jpg", caption: "that one perfect day" },
    { src: "photos/04.jpg", caption: "us being silly" },
    { src: "photos/05.jpg", caption: "golden hour with you" },
    { src: "photos/06.jpg", caption: "late night talks" },
    { src: "photos/07.jpg", caption: "my safe place" },
    { src: "photos/08.jpg", caption: "adventure buddies" },
    { src: "photos/09.jpg", caption: "you, being beautiful" },
    { src: "photos/10.jpg", caption: "to many more ♥" },
  ],

  // 🎬 Vlogs & recaps: drop .mp4 files in the /videos folder.
  // poster is optional (a .jpg thumbnail); leave "" to use the video's first frame.
  videos: [
    { src: "videos/vlog-01.mp4", poster: "", title: "our first vlog",      note: "the beginning of us" },
    { src: "videos/vlog-02.mp4", poster: "", title: "summer recap",        note: "sun, snacks & you" },
    { src: "videos/vlog-03.mp4", poster: "", title: "that trip together",  note: "my favorite adventure" },
    { src: "videos/vlog-04.mp4", poster: "", title: "random days with you", note: "the little moments" },
  ],
};

/* ============================================================
   You don't need to touch anything below this line
   ============================================================ */
const COLORS = ["ink", "burgundy", "rose", "brown"];
const $ = (s, el = document) => el.querySelector(s);
const $$ = (s, el = document) => [...el.querySelectorAll(s)];
const rand = (a, b) => a + Math.random() * (b - a);
const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

/* ---------- names ---------- */
$$(".her-name").forEach((el) => (el.textContent = CONFIG.herName));
$("#from-name").textContent = CONFIG.fromName;
document.title = `For ${CONFIG.herName} 🌙`;
$(".ar-hello").textContent = CONFIG.letter.hello;
$(".ar-body").innerHTML = CONFIG.letter.body.map((t) => `<p>${t}</p>`).join("");
$(".ar-sign").textContent = CONFIG.letter.sign;
$(".finale-ar").textContent = CONFIG.finaleArabic;

/* ---------- stars ---------- */
function sprinkleStars(root = document) {
  $$(".stars", root).forEach((box) => {
    if (box.dataset.done) return;
    box.dataset.done = 1;
    const n = Number(box.dataset.count || 60) * (innerWidth < 600 ? 0.6 : 1);
    const frag = document.createDocumentFragment();
    for (let i = 0; i < n; i++) {
      const s = document.createElement("i");
      s.className = "star" + (Math.random() < 0.15 ? " lg" : "");
      s.style.left = rand(0, 100) + "%";
      s.style.top = rand(0, 75) + "%";
      s.style.setProperty("--d", rand(2, 5).toFixed(2) + "s");
      s.style.setProperty("--delay", rand(0, 5).toFixed(2) + "s");
      frag.appendChild(s);
    }
    box.appendChild(frag);
  });
}

/* ---------- hero title ---------- */
(function buildHero() {
  const h = $("#hb-title");
  let i = 0;
  [["he made you", "ink"], ["a whole website", "burgundy"]].forEach(([line, color]) => {
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

function decorFor() {
  // two soft colour blobs + a few drifting outline hearts
  let out = `<div class="blob b1"></div><div class="blob b2"></div>`;
  const spots = [[8, 14], [80, 10], [14, 78], [84, 72], [50, 88]];
  spots.forEach(([x, y], k) => {
    if (Math.random() < 0.35) return;
    const size = rand(26, 54).toFixed(0);
    out += `<span class="deco drift" style="left:${x + rand(-5, 5)}%;top:${y + rand(-5, 5)}%;width:${size}px;height:${size}px;--d:${rand(5, 9).toFixed(1)}s;--r0:${rand(-15, 0).toFixed(0)}deg;--r1:${rand(0, 15).toFixed(0)}deg">${HEART}</span>`;
  });
  return out;
}

function buildWords(text, lang) {
  const wrap = document.createElement("div");
  wrap.className = "words" + (lang === "ar" ? " ar" : "");
  if (lang === "ar") { wrap.dir = "rtl"; wrap.lang = "ar"; }
  let i = 0;
  let bigCount = 0, smallCount = 0;
  text.split(/\s+/).forEach((tok) => {
    if (tok === "/") {
      const br = document.createElement("span");
      br.className = "br";
      wrap.appendChild(br);
      return;
    }
    const big = /^\*.*\*[,.!?،]*$/.test(tok);
    const w = document.createElement("span");
    const color = big ? ["burgundy", "rose"][bigCount++ % 2] : ["ink", "ink", "brown"][smallCount++ % 3];
    w.className = `w ${big ? "big" : ""} c-${color}`;
    w.textContent = tok.replace(/\*/g, "");
    w.style.setProperty("--i", i++);
    wrap.appendChild(w);
  });
  return wrap;
}

(function buildStory() {
  const story = $("#story");
  CONFIG.scenes.forEach((sc) => {
    const sec = document.createElement("section");
    sec.className = `scene scene--${sc.theme} story-scene`;
    const tagCls = sc.lang === "ar" ? "scene-tag ar" : "scene-tag";
    sec.innerHTML = decorFor(sc.theme) + (sc.tag ? `<p class="${tagCls}">${sc.tag}</p>` : "");
    sec.appendChild(buildWords(sc.text, sc.lang));
    story.appendChild(sec);
  });
})();

/* ---------- photos ---------- */
const PH_COLORS = [["#f8dde0", "#f9e8d6"], ["#f3e3d3", "#f6d6da"], ["#fbe9e4", "#f1d9c4"], ["#f6dcd8", "#fdf0e6"], ["#efe2d2", "#f8dfe2"]];

(function buildPhotos() {
  const grid = $("#photo-grid");
  CONFIG.photos.forEach((p, idx) => {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "polaroid missing";
    btn.style.setProperty("--rot", (idx % 2 ? 1 : -1) * rand(1.5, 4) + "deg");
    btn.style.setProperty("--delay", (idx % 5) * 0.08 + "s");
    const [c1, c2] = PH_COLORS[idx % PH_COLORS.length];
    btn.innerHTML = `
      <span class="tape"></span>
      <figure style="margin:0">
        <div class="ph">
          <div class="placeholder" style="--pc1:${c1};--pc2:${c2}"><span class="ph-heart">♥</span>photo ${idx + 1}</div>
        </div>
        <figcaption>${p.caption || ""}</figcaption>
      </figure>`;
    const img = new Image();
    img.alt = p.caption || `photo ${idx + 1}`;
    img.decoding = "async";
    img.onload = () => {
      btn.classList.remove("missing");
      btn.classList.add("has-media");
      $(".ph", btn).prepend(img);
    };
    img.src = p.src;
    btn.addEventListener("click", () => openPhoto(idx));
    grid.appendChild(btn);
  });
})();

/* ---------- vlogs ---------- */
const PLAY_SVG = `<svg viewBox="0 0 24 24" width="26" height="26" aria-hidden="true"><path d="M7 4.5v15l13-7.5z" fill="currentColor"/></svg>`;

(function buildVlogs() {
  const grid = $("#vlog-grid");
  CONFIG.videos.forEach((v, idx) => {
    const card = document.createElement("button");
    card.type = "button";
    card.className = "vlog missing";
    card.style.setProperty("--delay", (idx % 2) * 0.1 + "s");
    const [c1, c2] = [["#f6d6da", "#f3e3d3"], ["#efe2d2", "#f8dde0"], ["#fbe4dc", "#f1d9c4"], ["#f8dfe2", "#efe2d2"]][idx % 4];
    card.innerHTML = `
      <div class="thumb">
        <div class="placeholder" style="--pc1:${c1};--pc2:${c2}"><span class="ph-heart">▶</span>video coming soon</div>
        <span class="play">${PLAY_SVG}</span>
      </div>
      <div class="vlog-meta"><h3>${v.title}</h3><p>${v.note || ""}</p></div>`;
    const thumb = $(".thumb", card);
    const markReady = () => { card.classList.remove("missing"); card.classList.add("has-media"); };
    if (v.poster) {
      const img = new Image();
      img.alt = "";
      img.onload = markReady;
      img.src = v.poster;
      thumb.prepend(img);
    }
    // probe the video file (also gives a first-frame thumbnail when no poster)
    const probe = document.createElement("video");
    probe.muted = true;
    probe.playsInline = true;
    probe.preload = "metadata";
    probe.addEventListener("loadedmetadata", markReady, { once: true });
    probe.src = v.src + "#t=0.5";
    probe.setAttribute("aria-hidden", "true");
    probe.tabIndex = -1;
    if (!v.poster) thumb.prepend(probe);
    card.addEventListener("click", () => {
      if (card.classList.contains("missing")) {
        card.animate([{ transform: "translateX(0)" }, { transform: "translateX(-6px)" }, { transform: "translateX(6px)" }, { transform: "translateX(0)" }], { duration: 300 });
        return;
      }
      openVideo(v);
    });
    grid.appendChild(card);
  });
})();

sprinkleStars();

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

// capture-phase listeners catch play/pause from every <video> on the page
document.addEventListener("play", (e) => {
  if (e.target.tagName === "VIDEO" && !e.target.muted && !music.paused) musicPause(true);
}, true);
function maybeResumeMusic() {
  setTimeout(() => { if (musicOn && !anyVideoPlaying() && music.paused) musicPlay(); }, 150);
}
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

/* ---------- gate ---------- */
const gate = $("#gate");
const envelope = $("#envelope");
function openEnvelope() {
  if (envelope.classList.contains("open")) return;
  musicOn = true;
  musicPlay();   // must start inside the tap so phones allow sound
  musicBtn.hidden = false;
  $("#envelope").classList.add("open");
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
  setTimeout(() => $("#gate").remove(), 1300);
});

/* ============================================================
   Reveal on scroll
   ============================================================ */
const io = new IntersectionObserver((entries) => {
  entries.forEach((en) => {
    if (en.isIntersecting) { en.target.classList.add("in"); io.unobserve(en.target); }
  });
}, { threshold: 0.35 });
$$(".story-scene, .polaroid, .vlog").forEach((el) => io.observe(el));

/* ============================================================
   Photo lightbox
   ============================================================ */
const photoModal = $("#photo-modal");
const photoImg = $("#photo-modal-img");
const photoCap = $("#photo-modal-cap");
let photoIdx = 0;

function availablePhotos() {
  return $$(".polaroid").map((el, i) => (el.classList.contains("has-media") ? i : -1)).filter((i) => i >= 0);
}
function showPhoto(i) {
  photoIdx = i;
  const p = CONFIG.photos[i];
  photoImg.src = p.src;
  photoImg.alt = p.caption || "";
  photoCap.textContent = p.caption || "";
}
function openPhoto(i) {
  const card = $$(".polaroid")[i];
  if (!card.classList.contains("has-media")) {
    card.animate([{ transform: "rotate(0) scale(1)" }, { transform: "rotate(-4deg) scale(1.05)" }, { transform: "rotate(3deg) scale(1.05)" }, { transform: "rotate(0) scale(1)" }], { duration: 400 });
    return;
  }
  showPhoto(i);
  openModal(photoModal);
}
function stepPhoto(dir) {
  const list = availablePhotos();
  if (!list.length) return;
  const pos = list.indexOf(photoIdx);
  showPhoto(list[(pos + dir + list.length) % list.length]);
}
$("#photo-prev").addEventListener("click", (e) => { e.stopPropagation(); stepPhoto(-1); });
$("#photo-next").addEventListener("click", (e) => { e.stopPropagation(); stepPhoto(1); });

// swipe on phones
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

function openVideo(v) {
  player.src = v.src;
  if (v.poster) player.poster = v.poster; else player.removeAttribute("poster");
  $("#video-title").textContent = v.title;
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
function blowCandle() {
  if (cake.classList.contains("out")) return;
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
