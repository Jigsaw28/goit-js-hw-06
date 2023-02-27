const formLogin = document.querySelector(".login-form");
const newObj = {};

formLogin.addEventListener("submit", onSubmit);

function onSubmit(event) {
  event.preventDefault();

  const {
    elements: { email, password },
  } = event.currentTarget;

  if (email.value === "" || password.value === "") {
    return alert("Please fill in all the fields!");
  }
  
  newObj.Email = email.value;
  newObj.password = password.value;
  console.log(newObj);
  event.currentTarget.reset();
}
