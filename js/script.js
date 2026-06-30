// ===== Toggle menu navigasi untuk tampilan mobile =====
const navToggle = document.getElementById("navToggle");
const navMenu = document.getElementById("navMenu");

if (navToggle && navMenu) {
  navToggle.addEventListener("click", () => {
    const isOpen = navMenu.classList.toggle("open");
    navToggle.setAttribute("aria-expanded", isOpen);
  });

  // Tutup menu setiap kali sebuah tautan diklik
  navMenu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navMenu.classList.remove("open");
      navToggle.setAttribute("aria-expanded", "false");
    });
  });
}

// ===== Smooth scroll untuk tautan anchor =====
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", (e) => {
    const target = document.querySelector(anchor.getAttribute("href"));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: "smooth" });
    }
  });
});

// ===== Render daftar anggota tim secara dinamis =====
const teamMembers = [
  { nama: "Andi Pratama", peran: "HTML & Struktur", inisial: "AP" },
  { nama: "Budi Santoso", peran: "CSS & Tampilan", inisial: "BS" },
  { nama: "Citra Dewi", peran: "JavaScript & Interaksi", inisial: "CD" },
];

function renderTeam() {
  const list = document.getElementById("team-list");
  if (!list) return;

  list.innerHTML = teamMembers
    .map(
      (m) => `
      <article class="team-card">
        <div class="avatar">${m.inisial}</div>
        <h3>${m.nama}</h3>
        <p>${m.peran}</p>
      </article>`
    )
    .join("");
}

renderTeam();

// ===== Tahun otomatis di footer =====
const yearEl = document.getElementById("year");
if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}
