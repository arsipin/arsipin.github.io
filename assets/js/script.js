/* =========================================================
   Muhammad Arifin — E-Portfolio
   Main JavaScript
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {
  initNavToggle();
  initActiveNavLink();
  initScrollReveal();
  initBackToTop();
  initSkillBars();
  initWhatsappButton();
  initGmailButton();
  initYear();
  initThemeToggle();
});

/* ---------- Mobile nav toggle ---------- */
function initNavToggle() {
  const toggle = document.querySelector(".nav-toggle");
  const links = document.querySelector(".nav-links");
  if (!toggle || !links) return;

  toggle.addEventListener("click", () => {
    const isOpen = links.classList.toggle("open");
    toggle.classList.toggle("open", isOpen);
    toggle.setAttribute("aria-expanded", String(isOpen));
  });

  links.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      links.classList.remove("open");
      toggle.classList.remove("open");
      toggle.setAttribute("aria-expanded", "false");
    });
  });
}

/* ---------- Highlight active nav link based on current page ---------- */
function initActiveNavLink() {
  const current = window.location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll(".nav-links a").forEach((link) => {
    const href = link.getAttribute("href").split("/").pop();
    if (href === current) {
      link.classList.add("active");
    }
  });
}

/* ---------- Reveal elements as they scroll into view ---------- */
function initScrollReveal() {
  const items = document.querySelectorAll(".reveal");
  if (!items.length) return;

  if (!("IntersectionObserver" in window)) {
    items.forEach((el) => el.classList.add("in-view"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in-view");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
  );

  items.forEach((el) => observer.observe(el));
}

/* ---------- Back to top button ---------- */
function initBackToTop() {
  const btn = document.querySelector(".back-to-top");
  if (!btn) return;

  window.addEventListener("scroll", () => {
    btn.classList.toggle("show", window.scrollY > 480);
  });

  btn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

/* ---------- Animate skill bars when visible ---------- */
function initSkillBars() {
  const bars = document.querySelectorAll(".skill-bar-fill");
  if (!bars.length) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const target = entry.target.dataset.level || "0";
          entry.target.style.width = target + "%";
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.4 }
  );

  bars.forEach((bar) => observer.observe(bar));
}

/* ---------- WhatsApp contact ---------- */
const WHATSAPP_NUMBER = "6285885833601";

function initWhatsappButton() {
  const waLink = document.querySelector("#whatsapp-link");
  if (!waLink) return;

  waLink.addEventListener("click", (e) => {
    e.preventDefault();

    const name = (document.querySelector("#name")?.value || "").trim();
    const subject = (document.querySelector("#subject")?.value || "").trim();
    const message = (document.querySelector("#message")?.value || "").trim();

    let text = "";
    if (name) text += `Halo, saya ${name}.`;
    if (subject) text += (text ? " " : "") + `Perihal: ${subject}.`;
    if (message) text += (text ? "\n\n" : "") + message;

    const url = `https://wa.me/${WHATSAPP_NUMBER}` + (text ? `?text=${encodeURIComponent(text)}` : "");
    window.open(url, "_blank", "noopener");
  });
}

/* ---------- Gmail contact (tombol "Kirim Pesan") ---------- */
// GANTI dengan alamat Gmail tujuan kamu
const GMAIL_ADDRESS = "arifin@email.com";

function initGmailButton() {
  const gmailBtn = document.querySelector("#gmail-submit-btn");
  if (!gmailBtn) return;

  gmailBtn.addEventListener("click", () => {
    const name = (document.querySelector("#name")?.value || "").trim();
    const email = (document.querySelector("#email")?.value || "").trim();
    const subject = (document.querySelector("#subject")?.value || "").trim();
    const message = (document.querySelector("#message")?.value || "").trim();

    const mailSubject = subject || `Pesan dari ${name || "Pengunjung Website"}`;
    let body = "";
    if (name) body += `Nama: ${name}\n`;
    if (email) body += `Email: ${email}\n`;
    if (name || email) body += "\n";
    body += message;

    const url =
      `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(GMAIL_ADDRESS)}` +
      `&su=${encodeURIComponent(mailSubject)}` +
      `&body=${encodeURIComponent(body)}`;

    window.open(url, "_blank", "noopener");
  });
}

/* ---------- Footer year ---------- */
function initYear() {
  const yearEl = document.querySelector("#current-year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();
}

/* ---------- Dark mode toggle ---------- */
function initThemeToggle() {
  const toggle = document.querySelector("#theme-toggle");
  if (!toggle) return;

  const stored = localStorage.getItem("theme");
  if (stored === "dark") {
    document.documentElement.setAttribute("data-theme", "dark");
  }

  toggle.addEventListener("click", () => {
    const isDark = document.documentElement.getAttribute("data-theme") === "dark";
    if (isDark) {
      document.documentElement.removeAttribute("data-theme");
      localStorage.setItem("theme", "light");
    } else {
      document.documentElement.setAttribute("data-theme", "dark");
      localStorage.setItem("theme", "dark");
    }
  });
}