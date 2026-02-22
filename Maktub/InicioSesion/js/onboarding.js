(function () {
  "use strict";

  var form = document.getElementById("signup-form");
  if (!form) {
    return;
  }

  var fullNameInput = document.getElementById("full-name");
  var emailInput = document.getElementById("email");
  var termsInput = document.getElementById("terms");
  var continueButton = document.getElementById("continue-btn");

  var fullNameField = form.querySelector('[data-field="fullName"]');
  var emailField = form.querySelector('[data-field="email"]');
  var fullNameError = document.getElementById("full-name-error");
  var emailError = document.getElementById("email-error");
  var termsError = document.getElementById("terms-error");

  var touched = {
    fullName: false,
    email: true
  };

  var EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

  function fullNameMessage(value) {
    var cleanValue = value.trim();
    if (!cleanValue) {
      return "Ingresa tu nombre completo para continuar.";
    }
    if (cleanValue.length < 3) {
      return "El nombre debe tener al menos 3 caracteres.";
    }
    return "";
  }

  function emailMessage(value) {
    var cleanValue = value.trim();
    if (!cleanValue) {
      return "El correo el necesario para tu registro";
    }
    if (!EMAIL_REGEX.test(cleanValue)) {
      return "Ingresa un correo electrónico válido.";
    }
    return "";
  }

  function updateFieldState(fieldEl, inputEl, errorEl, message, isTouched) {
    var hasError = Boolean(message) && isTouched;

    fieldEl.classList.toggle("onb-field--error", hasError);
    fieldEl.classList.toggle("onb-field--active", !hasError);
    inputEl.setAttribute("aria-invalid", String(hasError));

    if (hasError) {
      errorEl.textContent = message;
      errorEl.classList.remove("visually-hidden");
    } else {
      errorEl.classList.add("visually-hidden");
    }
  }

  function validateFullName(forceShow) {
    var message = fullNameMessage(fullNameInput.value);
    updateFieldState(
      fullNameField,
      fullNameInput,
      fullNameError,
      message,
      forceShow || touched.fullName
    );
    return message === "";
  }

  function validateEmail(forceShow) {
    var message = emailMessage(emailInput.value);
    updateFieldState(
      emailField,
      emailInput,
      emailError,
      message,
      forceShow || touched.email
    );
    return message === "";
  }

  function validateTerms(forceShow) {
    var valid = termsInput.checked;
    if (!valid && forceShow) {
      termsError.classList.remove("visually-hidden");
    } else {
      termsError.classList.add("visually-hidden");
    }
    return valid;
  }

  function updateButtonState() {
    var isReady = fullNameMessage(fullNameInput.value) === "" &&
      emailMessage(emailInput.value) === "" &&
      termsInput.checked;

    continueButton.disabled = !isReady;
    continueButton.setAttribute("aria-disabled", String(!isReady));
  }

  fullNameInput.addEventListener("input", function () {
    touched.fullName = true;
    validateFullName(false);
    updateButtonState();
  });

  fullNameInput.addEventListener("blur", function () {
    touched.fullName = true;
    validateFullName(true);
    updateButtonState();
  });

  emailInput.addEventListener("input", function () {
    touched.email = true;
    validateEmail(false);
    updateButtonState();
  });

  emailInput.addEventListener("blur", function () {
    touched.email = true;
    validateEmail(true);
    updateButtonState();
  });

  termsInput.addEventListener("change", function () {
    validateTerms(false);
    updateButtonState();
  });

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    touched.fullName = true;
    touched.email = true;

    var validFullName = validateFullName(true);
    var validEmail = validateEmail(true);
    var validTerms = validateTerms(true);

    updateButtonState();

    if (!validFullName) {
      fullNameInput.focus();
      return;
    }
    if (!validEmail) {
      emailInput.focus();
      return;
    }
    if (!validTerms) {
      termsInput.focus();
      return;
    }
  });

  validateFullName(false);
  validateEmail(true);
  validateTerms(false);
  updateButtonState();
}());
