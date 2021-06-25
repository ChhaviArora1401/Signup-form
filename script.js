const form = document.getElementById("form");
const firstname = document.getElementById("firstname");
const lastname = document.getElementById("lastname");
const email = document.getElementById("mail");
const password = document.getElementById("password");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  checkInputs();
});

function checkInputs() {
  //get the values from the inputs
  const firstnameValue = firstname.value.trim();
  const lastnameValue = lastname.value.trim();
  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();

  // FIRST NAME
  if (firstnameValue === "") {
    //show error
    // add error class
    setErrorFor(firstname, "First Name cannot be empty");
  } else {
    // add success class
    setsuccessFor(firstname);
  }

  //LAST NAME
  if (lastnameValue === "") {
    //show error
    // add error class
    setErrorFor(lastname, "Last Name cannot be empty");
  } else {
    // add success class
    setsuccessFor(lastname);
  }

  // EMAIL
  if (emailValue === "") {
    setErrorFor(email, "Looks like this is not an email");
    email.placeholder = "email@example.com";
  } else {
    setsuccessFor(email);
  }

  //PASSWORD
  if (passwordValue === "") {
    //show error
    // add error class
    setErrorFor(password, "Password cannot be empty");
  } else {
    // add success class
    setsuccessFor(password);
  }

  //SHOW A SUCCESS MESSAGE
}

function setErrorFor(input, message) {
  const formControl = input.parentElement; //.form-control
  const small = formControl.querySelector("small");
  //add error message inside small
  small.innerText = message;
  //add error class
  formControl.className = "form-control error";
}

function setsuccessFor(input) {
  const formControl = input.parentElement; //.form-control
  formControl.className = "form-control success";
}

function isEmail(email) {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  );
}