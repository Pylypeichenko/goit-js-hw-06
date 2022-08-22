const loginForm = document.querySelector(".login-form");
const email = loginForm.firstElementChild.firstElementChild;
const password =
  loginForm.firstElementChild.nextElementSibling.firstElementChild;
const submitButton = loginForm.lastElementChild;

loginForm.addEventListener("submit", (event) => {
  event.preventDefault();

  if (email.value === "" || password.value === "") {
    window.alert("All fields should be filled !");
  }

  const data = {
    email: event.currentTarget.elements.email.value,
    password: event.currentTarget.elements.password.value,
  };

  console.log(data);
  loginForm.reset();
});
