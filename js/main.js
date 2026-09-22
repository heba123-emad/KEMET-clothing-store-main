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

// ========================================
// 5. LOGIN / LOGOUT STATE
// ========================================

// بيرجع بيانات المستخدم الحالي سواء متخزنة فى localStorage
// (Keep me signed in) أو فى sessionStorage (تسجيل دخول عادي)
function getCurrentUser() {
  const stored =
    localStorage.getItem("currentUser") || sessionStorage.getItem("currentUser");

  if (!stored) {
    return null;
  }

  try {
    return JSON.parse(stored);
  } catch (error) {
    return null;
  }
}

function logoutUser() {
  localStorage.removeItem("currentUser");
  sessionStorage.removeItem("currentUser");
  window.location.href = "login.html";
}

function handleLogoutClick(event) {
  event.preventDefault();
  logoutUser();
}

function updateAuthUI() {
  const user = getCurrentUser();

  if (!user) {
    return; // مفيش يوزر مسجل، الأزرار تفضل زي ما هي (Sign Up / Login)
  }

  // زرار الحساب في الهيدر (Sign Up أو Login حسب الصفحة)
  const headerAuthLink = document.querySelector(".nav-account");

  if (headerAuthLink) {
    headerAuthLink.textContent = "Logout";
    headerAuthLink.setAttribute("href", "#");
    headerAuthLink.removeAttribute("aria-current");
    headerAuthLink.addEventListener("click", handleLogoutClick);
  }

  // لينك Login في قايمة الموبايل، مع الحفاظ على رقم البادچ (span)
  const drawerLoginLink = document.querySelector('.nav-drawer a[href="login.html"]');

  if (drawerLoginLink) {
    const badge = drawerLoginLink.querySelector("span");
    drawerLoginLink.textContent = "Logout ";
    if (badge) {
      drawerLoginLink.appendChild(badge);
    }
    drawerLoginLink.setAttribute("href", "#");
    drawerLoginLink.addEventListener("click", handleLogoutClick);
  }
}

updateAuthUI();

// Make functions available to other JS files
window.getCurrentUser = getCurrentUser;
window.logoutUser = logoutUser;
