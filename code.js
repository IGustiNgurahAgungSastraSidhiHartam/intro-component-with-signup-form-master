const signUpForm = document.forms["sign-up-form"];
console.log(signUpForm);
const firstNameInput = signUpForm["first-name"];
const lastNameInput = signUpForm["last-name"];
const emailInput = signUpForm["email"];
const passwordInput = signUpForm["password"];
const msgFirstName = document.querySelector("#first");
const msgLastName = document.querySelector("#last");
const msgEmail = document.querySelector("#email");
const msgPassword = document.querySelector("#password");
const imageEror = document.querySelector("#image-first");
const imageErorLast = document.querySelector("#image-last");
const imageEroremail = document.querySelector("#image-email");
const imageErorpass = document.querySelector("#image-password");
const tampilPass = document.querySelector("#checkbox");
const icon = document.querySelector(".icon");

function validate() {
  if (firstNameInput.value.trim() === "") {
    imageEror.classList.remove("d-none");
    msgFirstName.innerHTML = "first name cannot be empty";
    icon.classList.remove("show-pass");
    icon.classList.add("show-pass2");
  } else if (firstNameInput.value.length < 3) {
    imageEror.classList.remove("d-none");
    msgFirstName.innerHTML = "first name must be at least 2 characters";
    icon.classList.remove("show-pass");
    icon.classList.add("show-pass2");
  } else {
    imageEror.classList.add("d-none");
    msgFirstName.innerHTML = "";
    icon.classList.remove("show-pass2");
    icon.classList.add("show-pass");
  }

  if (lastNameInput.value.trim() == "") {
    imageErorLast.classList.remove("d-none");
    msgLastName.innerHTML = "last name cannot be empty";
    icon.classList.remove("show-pass");
    icon.classList.add("show-pass2");
  } else if (lastNameInput.value.length < 3) {
    imageErorLast.classList.remove("d-none");
    msgLastName.innerHTML = "last name must be at least 2 characters";
    icon.classList.remove("show-pass");
    icon.classList.add("show-pass2");
  } else {
    imageErorLast.classList.add("d-none");
    msgLastName.innerHTML = "";
    icon.classList.remove("show-pass2");
    icon.classList.add("show-pass");
  }

  if (emailInput.value.trim() == "") {
    imageEroremail.classList.remove("d-none");
    msgEmail.innerHTML = "email cannot be empty";
    icon.classList.remove("show-pass");
    icon.classList.add("show-pass2");
  } else if (
    !emailInput.value.includes("@") ||
    !emailInput.value.includes(".com")
  ) {
    imageEroremail.classList.remove("d-none");
    msgEmail.innerHTML = "example: moon@gmail.com";
    icon.classList.remove("show-pass");
    icon.classList.add("show-pass2");
  } else {
    imageEroremail.classList.add("d-none");
    msgEmail.innerHTML = "";
    icon.classList.remove("show-pass2");
    icon.classList.add("show-pass");
  }
  if (passwordInput.value.trim() == "") {
    imageErorpass.classList.remove("d-none");
    msgPassword.innerHTML = "password cannot be empty";
    icon.classList.remove("show-pass");
    icon.classList.add("show-pass2");
  } else if (!/[A-Z]/.test(passwordInput.value)) {
    imageErorpass.classList.remove("d-none");
    msgPassword.innerHTML = "password must use eatlist 1 capital letter";
    icon.classList.remove("show-pass");
    icon.classList.add("show-pass2");
  } else if (passwordInput.value.length < 8) {
    imageEror.classList.remove("d-none");
    msgPassword.innerHTML = "password must be at least 8 characters";
    icon.classList.remove("show-pass");
    icon.classList.add("show-pass2");
  } else {
    imageErorpass.classList.add("d-none");
    msgPassword.innerHTML = "";
    icon.classList.remove("show-pass2");
    icon.classList.add("show-pass");
  }
}
/* tampilPass.addEventListener("click", function () {
  passwordInput.type = this.checked ? "text" : "password";
}); */

function showPass() {
  if (passwordInput.type === "password") {
    passwordInput.type = "text";
    icon.src = "https://www.svgrepo.com/show/532493/eye.svg";
  } else {
    passwordInput.type = "password";
    icon.src = "https://www.svgrepo.com/show/532465/eye-slash.svg";
  }
}
signUpForm.onsubmit = (event) => {
  event.preventDefault();
  validate();
};
