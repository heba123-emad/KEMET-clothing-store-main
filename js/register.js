// register.js — إنشاء الحساب
// مسؤوليته الوحيدة: تسجيل مستخدم جديد.

document.addEventListener("DOMContentLoaded", () => {
  const registerForm = document.getElementById("register-form");

  if (!registerForm) {
    console.error("register-form not found in the DOM");
    return;
  }

  registerForm.addEventListener("submit", handleRegister);
});

function handleRegister(e) {
  e.preventDefault();

  clearErrors();

  // 2. يقرأ البيانات من الفورم
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim().toLowerCase();
  const password = document.getElementById("password").value;
  const confirmPassword = document.getElementById("confirm").value;

  // 3. Validation
  const isValid = validateRegisterData({ name, email, password, confirmPassword });
  if (!isValid) {
    return;
  }

  // 4. يجيب المستخدمين الموجودين من localStorage
  const users = getUsers();

  // 5. يتأكد إن الإيميل مش موجود
  const emailExists = users.some((user) => user.email === email);
  if (emailExists) {
    setFieldError("email", "This email is already registered.");
    setStatus("Account already exists.", "error");
    return;
  }

  // 6. يعمل User Object جديد
  const newUser = {
    id: Date.now(),
    name,
    email,
    password,
    createdAt: new Date().toISOString(),
  };

  // 7. يحفظه في localStorage
  users.push(newUser);
  localStorage.setItem("users", JSON.stringify(users));

  // 8. بعد التسجيل، يروح لصفحة login
  setStatus("Account created. Redirecting to login…", "success");
  setTimeout(() => {
    window.location.href = "login.html";
  }, 800);
}

// ------- Helper Functions -------

function getUsers() {
  const usersJSON = localStorage.getItem("users");
  return usersJSON ? JSON.parse(usersJSON) : [];
}

function validateRegisterData({ name, email, password, confirmPassword }) {
  let valid = true;

  if (!name) {
    setFieldError("name", "Please enter your full name.");
    valid = false;
  }

  if (!email) {
    setFieldError("email", "Please enter a valid email address.");
    valid = false;
  } else if (!isValidEmail(email)) {
    setFieldError("email", "Please enter a valid email address.");
    valid = false;
  }

  if (!password) {
    setFieldError("password", "Your password must be at least 8 characters.");
    valid = false;
  } else if (password.length < 8) {
    setFieldError("password", "Your password must be at least 8 characters.");
    valid = false;
  }

  if (!confirmPassword) {
    setFieldError("confirm", "Passwords do not match.");
    valid = false;
  } else if (password !== confirmPassword) {
    setFieldError("confirm", "Passwords do not match.");
    valid = false;
  }

  return valid;
}

function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

// يعرض رسالة الخطأ الجاهزة جوه الـHTML لكل حقل (span بـ id مثل name-error)
function setFieldError(fieldId, message) {
  const input = document.getElementById(fieldId);
  const errorSpan = document.getElementById(`${fieldId}-error`);

  if (input) {
    input.setAttribute("aria-invalid", "true");
  }

  if (errorSpan) {
    if (message) errorSpan.textContent = message;
    errorSpan.style.display = "block";
  }
}

function clearErrors() {
  const errorSpans = document.querySelectorAll(".error");
  errorSpans.forEach((span) => {
    span.style.display = "none";
  });

  const inputs = document.querySelectorAll("#register-form input[aria-invalid]");
  inputs.forEach((input) => input.removeAttribute("aria-invalid"));

  setStatus("");
}

// يعرض رسالة عامة فوق الزرار (register-status)
function setStatus(message, type = "") {
  const statusEl = document.getElementById("register-status");
  if (!statusEl) return;

  statusEl.textContent = message;
  statusEl.classList.remove("status-error", "status-success");

  if (type === "error") statusEl.classList.add("status-error");
  if (type === "success") statusEl.classList.add("status-success");
}
