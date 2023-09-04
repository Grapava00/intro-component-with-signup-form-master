document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("form");
  const firstNameInput = document.getElementById("firstName");
  const lastNameInput = document.getElementById("lastname");
  const emailInput = document.getElementById("email");
  const passwordInput = document.getElementById("password");

  const firstNameError = document.querySelector("#firstName + .error");
  const lastNameError = document.querySelector("#lastname + .error");
  const emailError = document.querySelector("#email + .error");
  const passwordError = document.querySelector("#password + .error");

  form.addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent form submission for this example

    validateInput(firstNameInput, firstNameError);
    validateInput(lastNameInput, lastNameError);
    validateEmail(emailInput, emailError);
    validateInput(passwordInput, passwordError);
  });

  firstNameInput.addEventListener("input", function () {
    validateInput(firstNameInput, firstNameError);
  });

  lastNameInput.addEventListener("input", function () {
    validateInput(lastNameInput, lastNameError);
  });

  emailInput.addEventListener("input", function () {
    validateEmail(emailInput, emailError);
  });

  passwordInput.addEventListener("input", function () {
    validateInput(passwordInput, passwordError);
  });

  // Function to validate input and show/hide error message
  function validateInput(input, error) {
    if (input.value.trim() === "") {
      error.style.display = "block";
    } else {
      error.style.display = "none";
    }
  }

  // Function to validate email format
  function validateEmail(input, error) {
    const emailPattern = /@/;
    if (!emailPattern.test(input.value)) {
      error.style.display = "block";
    } else {
      error.style.display = "none";
    }
  }
});
