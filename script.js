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
  // theme options: sunset, night, rain, dusk, field, sunrise, moon
  // add  lang: "ar"  for an Arabic scene (right-to-left, Arabic font)
  scenes: [
    { theme: "sunset",  lang: "ar", tag: "كلام جوايا عمري ما قلتهولك",
      text: "*عارف* إني مش كامل / بس نفسي أكون *كل* حاجة *حلمتي* بيها" },
    { theme: "night",   lang: "ar",
      text: "*نفسي* أكون الراجل اللي *فاهمك* / مش بس في الحاجات *الكبيرة* / لكن في *أصغر* التفاصيل" },
    { theme: "field",   lang: "ar",
      text: "*قوليلي* إيه اللي بيضحكك / وإيه اللي بيحسسك *بالأمان* / *وعلميني* أحبك إزاي" },
    { theme: "dusk",    lang: "ar",
      text: "مش عايز *أفترض* إني عارف / *سعادتك* بالنسبالي / هي *كل* حاجة" },
    { theme: "sunrise", lang: "ar",
      text: "*عايز* أكون اللي *موجود* دايمًا / اللي بيعملها *صح* / *وبيتعلم* من غلطه" },
    { theme: "rain",    lang: "ar",
      text: "*وهفضل* دايمًا مستعد *أكبر* / *وأحبك* أعمق من *إمبارح*" },
    { theme: "night",   lang: "ar",
      text: "*احكيلي* عن *أحلامك* / وعن *خوفك* / *وأوعدك* هكون *جنبك*" },
    { theme: "dusk",    lang: "ar",
      text: "*انتي* تستاهلي حب *يليق* بيكي / *وأنا* مستعد أعمل *أي* حاجة / عشان أكون *الشخص* ده ليكي" },
    { theme: "moon",    lang: "ar",
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
const COLORS = ["orange", "blue", "red", "yellow", "pink", "purple", "green"];
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
  ["happy", "birthday"].forEach((word, wi) => {
    const row = document.createElement("span");
    row.className = "row";
    [...word].forEach((ch, ci) => {
      const l = document.createElement("span");
      l.className = `l c-${COLORS[(i + wi * 3) % COLORS.length]}` + (ci % 3 === 0 ? " wiggle" : "");
      l.textContent = ch;
      l.style.setProperty("--i", i++);
      row.appendChild(l);
    });
    h.appendChild(row);
  });
  const fl = $(".floaties");
  const bits = ["♥", "♡", "✦", "♥", "🎈", "✨", "♥"];
  for (let k = 0; k < (innerWidth < 600 ? 14 : 24); k++) {
    const s = document.createElement("span");
    s.textContent = bits[k % bits.length];
    s.style.left = rand(0, 100) + "%";
    s.style.color = `var(--${COLORS[k % COLORS.length]})`;
    s.style.setProperty("--s", rand(14, 30) + "px");
    s.style.setProperty("--d", rand(8, 16) + "s");
    s.style.setProperty("--delay", rand(0, 12) + "s");
    s.style.setProperty("--r", rand(-60, 60) + "deg");
    fl.appendChild(s);
  }
})();

/* ---------- story scenes ---------- */
const HILLS = `<svg class="hills" viewBox="0 0 400 100" preserveAspectRatio="none" aria-hidden="true">
  <path d="M0 100 L0 55 Q60 30 130 50 T260 45 T400 40 L400 100 Z" fill="rgba(20,30,25,.55)"/>
  <path d="M0 100 L0 75 Q90 50 200 70 T400 62 L400 100 Z" fill="rgba(12,20,16,.85)"/></svg>`;

function decorFor(theme) {
  switch (theme) {
    case "sunset":
    case "sunrise": {
      let sea = "";
      for (let i = 0; i < 9; i++)
        sea += `<i style="top:${10 + i * 10}%;left:${rand(10, 60)}%;width:${rand(10, 30)}%;animation-delay:${rand(0, 3).toFixed(1)}s"></i>`;
      return `<div class="cloud" style="top:14%;width:240px;height:40px;--d:55s"></div>
              <div class="cloud" style="top:28%;width:160px;height:28px;--d:40s;animation-delay:-20s"></div>
              <div class="sun"></div><div class="sea">${sea}</div>`;
    }
    case "night":
      return `<div class="stars" data-count="110"></div><div class="moon"><span></span><span></span><span></span></div>`;
    case "rain": {
      let r = "";
      const n = innerWidth < 600 ? 40 : 80;
      for (let i = 0; i < n; i++)
        r += `<i style="left:${rand(0, 100)}%;--d:${rand(0.6, 1.2).toFixed(2)}s;--delay:${rand(0, 2).toFixed(2)}s"></i>`;
      return `<div class="rain">${r}</div><div class="lamp"></div><div class="window"></div>`;
    }
    case "field": {
      let f = "";
      for (let i = 0; i < 14; i++)
        f += `<span class="firefly" style="left:${rand(5, 95)}%;top:${rand(60, 92)}%;--d:${rand(4, 9).toFixed(1)}s;--delay:${rand(0, 4).toFixed(1)}s;--x:${rand(-40, 40)}px;--y:${rand(-60, -10)}px"></span>`;
      return `<div class="cloud" style="top:12%;width:260px;height:50px;background:rgba(255,255,255,.45);--d:60s"></div>
              <div class="cloud" style="top:24%;width:180px;height:36px;background:rgba(255,255,255,.35);--d:45s;animation-delay:-25s"></div>
              ${HILLS}${f}`;
    }
    case "dusk":
      return `<div class="stars" data-count="40"></div>
              <div class="cloud" style="top:30%;width:300px;height:50px;--d:50s"></div>
              <div class="cloud" style="top:48%;width:200px;height:34px;--d:38s;animation-delay:-15s"></div>${HILLS}`;
    default:
      return `<div class="stars" data-count="100"></div>`;
  }
}

function buildWords(text, lang) {
  const wrap = document.createElement("div");
  wrap.className = "words" + (lang === "ar" ? " ar" : "");
  if (lang === "ar") { wrap.dir = "rtl"; wrap.lang = "ar"; }
  let i = 0;
  let colorStart = Math.floor(rand(0, COLORS.length));
  text.split(/\s+/).forEach((tok) => {
    if (tok === "/") {
      const br = document.createElement("span");
      br.className = "br";
      wrap.appendChild(br);
      return;
    }
    const big = /^\*.*\*[,.!?،]*$/.test(tok);
    const w = document.createElement("span");
    w.className = `w ${big ? "big" : ""} c-${COLORS[(colorStart + i) % COLORS.length]}`;
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
const PH_COLORS = [["#ffd0dc", "#ffe3b8"], ["#cfe6ff", "#ffd6ec"], ["#ffe0b3", "#ffc2c2"], ["#e2d4ff", "#ffd9e6"], ["#d4f5e0", "#fff0b8"]];

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
    const [c1, c2] = [["#3b2a6b", "#a3466e"], ["#203a6b", "#7b4aa8"], ["#5a2a55", "#d0703f"], ["#1f4a5e", "#8a3d78"]][idx % 4];
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
$("#open-btn").addEventListener("click", () => {
  musicOn = true;
  musicPlay();   // must start inside the tap so phones allow sound
  musicBtn.hidden = false;
  $("#envelope").classList.add("open");
  setTimeout(() => gate.classList.add("letter-open"), 1500);
  setTimeout(() => { gate.classList.add("letter-shown"); $("#letter-card").removeAttribute("aria-hidden"); }, 1900);
});

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
  const bits = ["♥", "♥", "✦", "♡", "✨", "💛", "🎉"];
  const n = innerWidth < 600 ? 50 : 90;
  for (let i = 0; i < n; i++) {
    const s = document.createElement("span");
    s.textContent = bits[i % bits.length];
    s.style.left = rand(0, 100) + "vw";
    s.style.color = `var(--${COLORS[i % COLORS.length]})`;
    s.style.setProperty("--s", rand(14, 30) + "px");
    s.style.setProperty("--d", rand(2.4, 4.2) + "s");
    s.style.setProperty("--delay", rand(0, 0.8) + "s");
    s.style.setProperty("--x", rand(-80, 80) + "px");
    s.style.setProperty("--r", rand(-540, 540) + "deg");
    box.appendChild(s);
    setTimeout(() => s.remove(), 5500);
  }
}
