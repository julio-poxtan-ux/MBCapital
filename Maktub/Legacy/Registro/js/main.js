document.addEventListener('DOMContentLoaded', () => {
  setupValidation();
  setupPasswordToggles();
  setupPinInputs();
  setupCopyButtons();
  setupPlanSelection();
});

function setupValidation() {
  const forms = document.querySelectorAll('[data-mk-validate]');
  forms.forEach((form) => {
    form.setAttribute('novalidate', 'novalidate');

    form.addEventListener('submit', (event) => {
      let isValid = true;
      const inputs = form.querySelectorAll('input, select, textarea');

      inputs.forEach((input) => {
        if (!input.hasAttribute('required')) {
          return;
        }

        let fieldValid = true;

        if (input.type === 'checkbox') {
          fieldValid = input.checked;
        } else if (input.dataset.match) {
          const match = form.querySelector(input.dataset.match);
          fieldValid = match && input.value === match.value && input.value.trim() !== '';
        } else {
          fieldValid = input.value.trim() !== '' && input.checkValidity();
        }

        if (!fieldValid) {
          isValid = false;
          showError(input);
        } else {
          clearError(input);
        }
      });

      if (!isValid) {
        event.preventDefault();
      }
    });

    form.querySelectorAll('input, select, textarea').forEach((input) => {
      input.addEventListener('input', () => clearError(input));
      input.addEventListener('change', () => clearError(input));
    });
  });
}

function showError(input) {
  const field = input.closest('.mk-field');
  if (!field) {
    return;
  }

  field.classList.add('mk-field--error');
  input.setAttribute('aria-invalid', 'true');
}

function clearError(input) {
  const field = input.closest('.mk-field');
  if (!field) {
    return;
  }

  field.classList.remove('mk-field--error');
  input.removeAttribute('aria-invalid');
}

function setupPasswordToggles() {
  document.querySelectorAll('[data-mk-toggle="password"]').forEach((button) => {
    button.addEventListener('click', () => {
      const targetId = button.getAttribute('aria-controls');
      const input = document.getElementById(targetId);
      if (!input) {
        return;
      }

      const isPassword = input.type === 'password';
      input.type = isPassword ? 'text' : 'password';
      button.setAttribute('aria-pressed', String(isPassword));
      button.querySelector('i')?.classList.toggle('bi-eye');
      button.querySelector('i')?.classList.toggle('bi-eye-slash');
    });
  });
}

function setupPinInputs() {
  document.querySelectorAll('[data-mk-pin]').forEach((container) => {
    const inputs = Array.from(container.querySelectorAll('input'));

    inputs.forEach((input, index) => {
      input.addEventListener('input', (event) => {
        const value = event.target.value.replace(/\D/g, '').slice(0, 1);
        event.target.value = value;

        if (value && inputs[index + 1]) {
          inputs[index + 1].focus();
        }
      });

      input.addEventListener('keydown', (event) => {
        if (event.key === 'Backspace' && !input.value && inputs[index - 1]) {
          inputs[index - 1].focus();
        }
      });
    });
  });
}

function setupCopyButtons() {
  document.querySelectorAll('[data-mk-copy]').forEach((button) => {
    button.addEventListener('click', async () => {
      const targetSelector = button.getAttribute('data-mk-copy');
      const target = document.querySelector(targetSelector);
      if (!target) {
        return;
      }

      try {
        await navigator.clipboard.writeText(target.textContent.trim());
        button.classList.add('mk-copy--done');
        setTimeout(() => button.classList.remove('mk-copy--done'), 1200);
      } catch (error) {
        console.error('Error al copiar el texto');
      }
    });
  });
}

function setupPlanSelection() {
  const cards = document.querySelectorAll('[data-mk-plan]');
  if (!cards.length) {
    return;
  }

  cards.forEach((card) => {
    const button = card.querySelector('[data-mk-plan-select]');
    if (!button) {
      return;
    }

    button.addEventListener('click', () => {
      cards.forEach((item) => {
        item.classList.remove('mk-plan-card--selected');
        const btn = item.querySelector('[data-mk-plan-select]');
        if (btn) {
          btn.classList.add('mk-btn--outline');
          btn.textContent = 'Seleccionar';
        }
      });

      card.classList.add('mk-plan-card--selected');
      button.classList.remove('mk-btn--outline');
      button.textContent = 'Seleccionada';
    });
  });
}
