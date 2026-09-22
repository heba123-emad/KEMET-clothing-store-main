// ========================================
// KEMET - Main JavaScript
// Navbar + Theme + Global Functions
// ========================================

// ========================================
// 1. MOBILE MENU
// ========================================

const navToggle = document.getElementById("nav-toggle");
const navDrawer = document.querySelector(".nav-drawer");

// Close menu when clicking a navigation link

if (navToggle && navDrawer) {
  const navLinks = navDrawer.querySelectorAll("a");

  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      navToggle.checked = false;
    });
  });
}

// Close menu with Escape key

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && navToggle) {
    navToggle.checked = false;
  }
});

// ========================================
// 2. THEME SWITCH
// ========================================

const themeToggle = document.getElementById("theme-toggle");

// Load saved theme

if (themeToggle) {
  const savedTheme = localStorage.getItem("theme");

  if (savedTheme === "light") {
    themeToggle.checked = true;
  }
}

// Save theme when changed

if (themeToggle) {
  themeToggle.addEventListener("change", () => {
    const theme = themeToggle.checked ? "light" : "dark";

    localStorage.setItem("theme", theme);
  });
}

// ========================================
// 3. BAG COUNT
// ========================================

function updateBagCount() {
  const bagCountElements = document.querySelectorAll(".bag-count");

  let cart = [];

  try {
    cart = JSON.parse(localStorage.getItem("cart") || "[]");
  } catch (error) {
    cart = [];
  }

  const totalItems = cart.reduce((total, item) => {
    return total + (Number(item.quantity) || 0);
  }, 0);

  bagCountElements.forEach((element) => {
    element.textContent = totalItems;
  });
}

// Run when page loads

updateBagCount();

// Make function available to other JS files

window.updateBagCount = updateBagCount;

// ========================================
// 4. CURRENT YEAR
// ========================================

const yearElements = document.querySelectorAll("[data-current-year]");

yearElements.forEach((element) => {
  element.textContent = new Date().getFullYear();
});
