// login.js - صفحة تسجيل الدخول

const form = document.querySelector("form");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const keepCheckbox = document.querySelector('.auth-row input[type="checkbox"]');
const forgotLink = document.querySelector(".link-line");

form.addEventListener("submit", function (event) { 
  event.preventDefault();
  clearErrors();

  let email = emailInput.value.trim();
  let password = passwordInput.value;
  let isValid = true;

  // ----------validation----------

  
  if (email === "") {
    showError(emailInput, "Email is required.");
    isValid = false;
  }
  
  else if (!isValidEmail(email)) {
    showError(emailInput, "Please enter a valid email address.");
    isValid = false;
  }

  if (password === "") {
    showError(passwordInput, "Password is required.");
    isValid = false;
  }
  
  else if (password.length < 8) {
    showError(passwordInput, "Your password must be at least 8 characters.");
    isValid = false;
  }

  if (isValid === false) {
    return;
  }

  let users = getUsers();
  let foundUser = null;

  for (let i = 0; i < users.length; i++) {
    let sameEmail = users[i].email.toLowerCase() === email.toLowerCase();
    let samePassword = users[i].password === password;

    if (sameEmail && samePassword) {
      foundUser = users[i];
      break; 
    }
  }

  if (foundUser === null) {
    showMessage("please sign up first.");
    return;
  }
loginUser(foundUser);
});

// ----------Forgot password ----------
forgotLink.addEventListener("click", function (event) {
  event.preventDefault(); 
  forgotPassword();
});

//======Functions========

function getUsers() {
  let data = localStorage.getItem("users"); 
  if (data === null) {
    return []; 
  }
  return JSON.parse(data); 
}

function isValidEmail(email) {
  let pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return pattern.test(email); 
}

function loginUser(user) {
  let currentUser = {
    id: user.id,
    name: user.name,
    email: user.email,
  };

  if (keepCheckbox && keepCheckbox.checked) {
    localStorage.setItem("currentUser", JSON.stringify(currentUser));
  } else {
    sessionStorage.setItem("currentUser", JSON.stringify(currentUser));
  }
  window.location.href = "products.html";
}

function showError(input, message) {
  let field = input.closest(".field"); 
  let errorSpan = field.querySelector(".error"); 
  field.classList.add("invalid"); 
  errorSpan.textContent = message; 
  errorSpan.style.display = "block"; 
}

function clearErrors() {
  let fields = document.querySelectorAll(".field");
  for (let i = 0; i < fields.length; i++) {
    fields[i].classList.remove("invalid");
    fields[i].querySelector(".error").style.display = "none";
  }
  let msg = document.getElementById("login-message");
  if (msg) {
    msg.remove();
  }
}

function showMessage(text) {
  let msg = document.getElementById("login-message");
  if (msg === null) {
    msg = document.createElement("p"); 
    msg.id = "login-message";
    msg.style.color = "red";
    let row = document.querySelector(".auth-row");
    row.before(msg); 
  }
  msg.textContent = text;
}

//-----------Forgot Password-----------

function forgotPassword() {
  let email = prompt("Enter your email:");
  if (email === null) {
    return;
  }
  email = email.trim();
  if (!isValidEmail(email)) {
    alert("Please enter a valid email address.");
    return;
  }
  let users = getUsers();
  let foundUser = null;
  for (let i = 0; i < users.length; i++) {
    if (users[i].email.toLowerCase() === email.toLowerCase()) {
      foundUser = users[i];
      break;
    }
  }
  if (foundUser === null) {
    alert("No account found with this email.");
    return;
  }

  let code = String(Math.floor(100000 + Math.random() * 900000));
  alert("We sent a code to your email.\n\n(Demo code: " + code + ")");
  let enteredCode = prompt("Enter the 6-digit code:");
  if (enteredCode === null) {
    return;
  }
  if (enteredCode.trim() === code) {
    loginUser(foundUser); 
  } else {
    alert("Incorrect code. Please try again.");
  }
}


//---------Logout----------- 

function logout() {
  localStorage.removeItem("currentUser");
  sessionStorage.removeItem("currentUser");
  window.location.href = "login.html";
}