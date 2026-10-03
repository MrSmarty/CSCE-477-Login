//window.onload = function() {
document.getElementById("login-button").disabled = true;
//}

document.getElementById("email").addEventListener("change", function () {
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;
  if (
    email &&
    password &&
    email.includes("@") &&
    email.includes(".") &&
    password.length >= 8
  ) {
    document.getElementById("login-button").disabled = false;
  } else {
    document.getElementById("login-button").disabled = true;
  }
});

document.getElementById("password").addEventListener("change", function () {
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;
  if (
    email &&
    password &&
    email.includes("@") &&
    email.includes(".") &&
    password.length >= 8
  ) {
    document.getElementById("login-button").disabled = false;
  } else {
    document.getElementById("login-button").disabled = true;
  }
});
