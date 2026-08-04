const menuButton = document.querySelector(".menu-button");
const sidebar = document.querySelector(".sidebar");
const navLinks = [...document.querySelectorAll(".nav-list a")];
const sections = [...document.querySelectorAll("main section[id]")];

function closeMenu() {
  sidebar.classList.remove("open");
  menuButton.setAttribute("aria-expanded", "false");
}

menuButton.addEventListener("click", () => {
  const isOpen = sidebar.classList.toggle("open");
  menuButton.setAttribute("aria-expanded", String(isOpen));
});

navLinks.forEach((link) => {
  link.addEventListener("click", closeMenu);
});

const activeSectionObserver = new IntersectionObserver(
  (entries) => {
    const visibleEntry = entries
      .filter((entry) => entry.isIntersecting)
      .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

    if (!visibleEntry) return;

    navLinks.forEach((link) => {
      link.classList.toggle("active", link.hash === `#${visibleEntry.target.id}`);
    });
  },
  {
    rootMargin: "-20% 0px -65% 0px",
    threshold: [0, 0.25, 0.5, 0.75, 1],
  },
);

sections.forEach((section) => activeSectionObserver.observe(section));
