const form = document.getElementById('form');
const email = document.getElementById('email');
const emailError = document.querySelector('span.email-error');

function showEmailError() {
  if (email.validity.valueMissing) {
    emailError.textContent = 'You need to enter an e-mail address.';
  }
}

email.addEventListener('input', () => {
  if (email.validity.valid) {
    emailError.textContent = '';
  } else {
    showEmailError();
  }
});

form.addEventListener('submit', (event) => {
  if (!email.validity.valid) {
    showEmailError();
    event.preventDefault();
  }
});
