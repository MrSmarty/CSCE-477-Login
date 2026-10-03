const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const loginButton = document.getElementById("login-button");
const form = document.getElementById("login-form");
const messageDiv = document.getElementById("message");

function validateForm() {
  const email = emailInput.value.trim();
  const password = passwordInput.value;

  const isValid =
    email.length > 0 &&
    password.length > 0 &&
    email.includes("@") &&
    password.length >= 8;

  loginButton.disabled = !isValid;
}

emailInput.addEventListener("input", validateForm);
passwordInput.addEventListener("input", validateForm);

form.addEventListener("submit", async function (e) {
  e.preventDefault();

  const email = emailInput.value.trim();
  const password = passwordInput.value;

  const response = await fetch("/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password }),
  });

  const text = await response.text();
  messageDiv.innerHTML = text; 
  messageDiv.className = response.ok ? "success" : "error";
});