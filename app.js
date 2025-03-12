const closeModalBtn = document.querySelector(".close-modal");
const closeDialogBtn = document.querySelectorAll(".close-dialog");
closeDialogBtn.forEach((btn) => {
  btn.addEventListener("click", () => {
    const dialog = btn.closest("dialog");
    dialog.close();
  });
});

closeModalBtn.addEventListener("click", () => {
  const modal = closeModalBtn.closest("#modal");
  modal.classList.remove("active");
});
function formValidation() {
  const form = document.querySelector("#form");
  const emailInput = document.querySelector("#email");
  const nameInput = document.querySelector("#name");
  const passwordInput = document.querySelector("#password");
  const ageInput = document.querySelector("#age");
  const modal = document.querySelector("#reg-confirmation");
  const dialog = document.querySelector("#confirmation-dialog");

  const showErrorMessage = (input, message) => {
    input.closest(".form-group").classList.remove("success");
    input.closest(".form-group").classList.add("error");
    input.closest(".form-group").querySelector(".error-message").textContent =
      message;
  };
  const showSuccessMessage = (input, message) => {
    input.closest(".form-group").classList.remove("error");
    input.closest(".form-group").classList.add("success");
    input.closest(".form-group").querySelector(".error-message").textContent =
      message;
  };

  const isNameValid = () => {
    const val = nameInput.value.trim();
    if (val === "") {
      showErrorMessage(nameInput, "Name is required");
      return false;
    } else if (val.length < 3) {
      showErrorMessage(nameInput, "Name is too short");
      return false;
    } else {
      showSuccessMessage(nameInput, "Name is valid");
      return true;
    }
  };
  const isEmailValid = () => {
    const val = emailInput.value.trim();
    const emailRegExp =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (val === "") {
      showErrorMessage(emailInput, "Email is required");
      return false;
    } else if (!emailRegExp.test(val)) {
      showErrorMessage(emailInput, "Email is not correct format");
      return false;
    } else if (!/@gmail\.com$/.test(val)) {
      showErrorMessage(emailInput, "Email must be gmail.com");
      return false;
    } else {
      showSuccessMessage(emailInput, "Email is valid");
      return true;
    }
  };
  const isAgeValid = () => {
    const val = ageInput.value.trim();
    if (Number(val) < 0 || Number(val) > 10) {
      showErrorMessage(ageInput, "Age must be between 0 and 10");
      return false;
    } else {
      showSuccessMessage(ageInput, "Age is valid");
      return true;
    }
  };

  nameInput.addEventListener("input", isNameValid);
  emailInput.addEventListener("input", isEmailValid);
  ageInput.addEventListener("input", isAgeValid);

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const nameValid = isNameValid();
    const emailValid = isEmailValid();
    const ageValid = isAgeValid();

    if (nameValid && emailValid && ageValid) {
      console.log("Form is valid");
      dialog.showModal();
    }
  });
}
function validateForm() {
  var personalNumber = document.getElementById("personal-number").value;
  var numberPattern = /^\d{11}$/;

  if (!numberPattern.test(personalNumber)) {
    alert(
      "Personal Number უნდა შეიცავდეს მხოლოდ რიცხვებს და უნდა ჰქონდეს 11 სიმბოლო."
    );
    return false;
  }
  return true;
}
document.getElementById("#form").addEventListener("submit", function (event) {
  event.preventDefault();

  const mobileInput = document.getElementById("personal-number");
  const errorMessage = document.getElementById("error-message");
  const mobileNumber = mobileInput.value;
  const regex = /^\d{9}$/;

  if (!regex.test(mobileNumber)) {
    errorMessage.textContent = "გთხოვთ შეიყვანოთ 9-ნიშნა რიცხვი!";
    mobileInput.style.border = "2px solid red";
  } else {
    errorMessage.textContent = "";
    mobileInput.style.border = "2px solid green";
    alert("ნომერი სწორია!");
  }
});
document.getElementById("#form").addEventListener("submit", function (event) {
  event.preventDefault();

  const passwordInput = document.getElementById("confirm-password");
  const errorMessage = document.getElementById("error-message");
  const password = passwordInput.value;

  if (password.length === 0) {
    errorMessage.textContent = "პაროლი სავალდებულოა!";
    passwordInput.classList.add("invalid");
  } else if (password.length < 6) {
    errorMessage.textContent = "პაროლი უნდა შეიცავდეს მინიმუმ 6 სიმბოლოს!";
    passwordInput.classList.add("invalid");
  } else {
    errorMessage.textContent = "";
    passwordInput.classList.remove("invalid");
    passwordInput.classList.add("valid");
    alert("პაროლი სწორია!");
  }
});
document.getElementById("#form").addEventListener("submit", function (event) {
  event.preventDefault();

  const password = document.getElementById("#confirm-password").value;
  const confirmPassword = document.getElementById("#confirmPassword").value;
  const errorMessage = document.getElementById("#error-message");

  if (password === "") {
    errorMessage.textContent = "პაროლი სავალდებულოა!";
    return;
  }

  if (password !== confirmPassword) {
    errorMessage.textContent = "პაროლები არ ემთხვევა!";
    document.getElementById("confirmPassword").classList.add("invalid");
  } else {
    errorMessage.textContent = "";
    document.getElementById("confirmPassword").classList.remove("invalid");
    document.getElementById("confirmPassword").classList.add("valid");
    alert("პაროლი წარმატებით დადასტურდა!");
  }
});
formValidation();
validateForm();
