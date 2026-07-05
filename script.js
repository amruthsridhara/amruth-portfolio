// ── Noir Patisserie · interactions ──────────────────────────

// Scroll reveal
const io = new IntersectionObserver(
  (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add("in")),
  { threshold: 0.12 }
);
document.querySelectorAll(".reveal").forEach((el) => io.observe(el));

// Portfolio filter
const filters = document.querySelectorAll(".filter");
const items = document.querySelectorAll(".g-item");
// make each gallery item focusable so the caption also reveals on keyboard focus / tap
items.forEach((it) => it.setAttribute("tabindex", "0"));
filters.forEach((btn) =>
  btn.addEventListener("click", () => {
    filters.forEach((b) => b.classList.remove("on"));
    btn.classList.add("on");
    const f = btn.dataset.f;
    items.forEach((it) => {
      const show = f === "all" || it.dataset.c === f;
      it.classList.toggle("hide", !show);
      if (show) it.classList.add("in");
    });
  })
);

// Mobile nav
const toggle = document.getElementById("navToggle");
const links = document.getElementById("navLinks");
toggle.addEventListener("click", () => {
  const open = links.classList.toggle("open");
  toggle.classList.toggle("open", open);
  toggle.setAttribute("aria-expanded", open);
});
links.querySelectorAll("a").forEach((a) =>
  a.addEventListener("click", () => {
    links.classList.remove("open");
    toggle.classList.remove("open");
    toggle.setAttribute("aria-expanded", "false");
  })
);

// Year
document.getElementById("yr").textContent = new Date().getFullYear();

// Placeholder treatment for image slots not yet filled
document.querySelectorAll("img").forEach((img) => {
  img.addEventListener("error", () => {
    img.classList.add("missing");
    const name = img.getAttribute("src").split("/").pop();
    const ph = document.createElement("div");
    ph.style.cssText =
      "position:absolute;inset:0;display:flex;align-items:center;justify-content:center;" +
      "background:repeating-linear-gradient(45deg,#1e1b18,#1e1b18 12px,#232019 12px,#232019 24px);" +
      "color:#958d82;font:0.7rem/1.5 'Tenor Sans',sans-serif;letter-spacing:.15em;text-transform:uppercase;text-align:center;padding:1rem";
    ph.textContent = "drop photo → images/" + name;
    const wrap = img.parentElement;
    wrap.style.position = "relative";
    wrap.appendChild(ph);
  });
});
