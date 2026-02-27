"use strict";

(function initOnboarding() {
  const form = document.querySelector("#onboarding-form");
  if (!form) return;

  const fullNameInput = document.querySelector("#full-name");
  const emailInput = document.querySelector("#email");
  const termsInput = document.querySelector("#terms");
  const continueBtn = document.querySelector("#continue-btn");

  const fullNameError = document.querySelector("#full-name-error");
  const emailError = document.querySelector("#email-error");
  const termsError = document.querySelector("#terms-error");

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
  const nameRegex = /^[A-Za-zÁÉÍÓÚÜÑáéíóúüñ'. -]{3,}$/;

  function setInputErrorState(input, messageEl, message) {
    if (!messageEl || !input) return;
    messageEl.textContent = message;
    input.setAttribute("aria-invalid", message ? "true" : "false");
  }

  function validateName(showErrors) {
    const value = fullNameInput.value.trim();
    let error = "";

    if (!value) {
      error = "Ingresa tu nombre completo.";
    } else if (!nameRegex.test(value)) {
      error = "Usa al menos 3 caracteres válidos (solo letras y espacios).";
    }

    if (showErrors) setInputErrorState(fullNameInput, fullNameError, error);
    return !error;
  }

  function validateEmail(showErrors) {
    const value = emailInput.value.trim();
    let error = "";

    if (!value) {
      error = "Ingresa tu correo electrónico.";
    } else if (!emailRegex.test(value)) {
      error = "El formato del correo no es válido.";
    }

    if (showErrors) setInputErrorState(emailInput, emailError, error);
    return !error;
  }

  function validateTerms(showErrors) {
    const valid = termsInput.checked;
    termsInput.setAttribute("aria-invalid", String(!valid));
    if (showErrors && termsError) {
      termsError.textContent = valid ? "" : "Debes aceptar los términos y condiciones.";
    }
    return valid;
  }

  function syncButtonState() {
    const isValid = validateName(false) && validateEmail(false) && validateTerms(false);
    continueBtn.disabled = !isValid;
    continueBtn.setAttribute("aria-disabled", String(!isValid));
  }

  fullNameInput.addEventListener("input", () => {
    validateName(true);
    syncButtonState();
  });

  fullNameInput.addEventListener("blur", () => {
    validateName(true);
  });

  emailInput.addEventListener("input", () => {
    validateEmail(true);
    syncButtonState();
  });

  emailInput.addEventListener("blur", () => {
    validateEmail(true);
  });

  termsInput.addEventListener("change", () => {
    validateTerms(true);
    syncButtonState();
  });

  form.addEventListener("submit", (event) => {
    const validName = validateName(true);
    const validEmail = validateEmail(true);
    const validTerms = validateTerms(true);
    const validForm = validName && validEmail && validTerms;

    if (!validForm) {
      event.preventDefault();
      const firstInvalid = [fullNameInput, emailInput, termsInput].find(
        (element) => element.getAttribute("aria-invalid") === "true" || (element.type === "checkbox" && !validTerms)
      );
      if (firstInvalid) firstInvalid.focus();
      return;
    }

    event.preventDefault();
    continueBtn.textContent = "Validado";
  });

  syncButtonState();
})();
