function validateForm() {
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;
  var email = document.getElementById("email").value;
  var emailError = document.getElementById("emailError");
if (username === "" || password === "") {
    alert("Введите логин и пароль");
    return false;
  }

  var pattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (!pattern.test(email)) {
    emailError.innerHTML = "Неправильный формат email";
    document.getElementById("email").style.borderColor = "red";
    return false;
  } else {
    emailError.innerHTML = "";
    document.getElementById("email").style.borderColor = "";
    alert("Email проверен успешно");
    return true;
  }
}

