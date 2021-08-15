const form = document.getElementById('form');
const email = document.getElementById('email');
const emailError = document.querySelector('span.email-error');
const country = document.getElementById('country');
const countryError = document.querySelector('span.country-error');
const zipCode = document.getElementById('zip-code');
const zipCodeError = document.querySelector('span.zip-error');
const password = document.getElementById('password');
const passwordError = document.querySelector('span.password-error');
const passwordConf = document.getElementById('password-conf');
const passwordConfError = document.querySelector('span.password-conf-error');

function showEmailError() {
  if (email.validity.valueMissing) {
    emailError.textContent = 'You need to enter an e-mail address.';
  } else if (email.validity.typeMismatch) {
    emailError.textContent = 'Entered value needs to be an e-mail address.';
  } else if (email.validity.tooShort) {
    emailError.textContent = `Email should be at least ${email.minLength} characters; you entered ${email.value.length}.`;
  }
}

function showCountryError() {
  if (country.validity.valueMissing) {
    countryError.textContent = 'You need to enter a country.';
  }
}

function showZipError() {
  if (zipCode.validity.valueMissing) {
    zipCodeError.textContent = 'You need to enter a zip code.';
  } else if (zipCode.validity.typeMismatch) {
    zipCodeError.textContent = 'Entered value needs to be an zip code.';
  } else if (zipCode.validity.tooShort) {
    zipCodeError.textContent = `Zip code should be at least ${zipCode.minLength} characters; you entered ${zipCode.value.length}.`;
  } else if (zipCode.validity.tooLong) {
    zipCodeError.textContent = `Zip code should be at least ${zipCode.maxLength} characters; you entered ${zipCode.value.length}.`;
  }
}

function showPasswordError() {
  if (password.validity.valueMissing) {
    passwordError.textContent = 'You need to enter a password.';
  } else if (password.validity.tooShort) {
    passwordError.textContent = `Password should be at least ${password.minLength} characters; you entered ${password.value.length}.`;
  } else if (password.validity.tooLong) {
    passwordError.textContent = `Password should be at least ${password.maxLength} characters; you entered ${password.value.length}.`;
  }
}

function showPasswordConfError() {
  if (passwordConf.validity.valueMissing) {
    passwordConfError.textContent = 'You need to confirm a password.';
  } else if (passwordConf.validity.tooShort) {
    passwordConfError.textContent = `This should be at least ${passwordConf.minLength} characters; you entered ${passwordConf.value.length}.`;
  } else if (passwordConf.validity.tooLong) {
    passwordConfError.textContent = `This should be at least ${passwordConf.maxLength} characters; you entered ${passwordConf.value.length}.`;
  } else if (passwordConf.value !== password.value) {
    passwordConfError.textContent = 'Those passwords didn’t match. Try again';
  }
}

function formVilidation() {
  email.addEventListener('input', () => {
    if (email.validity.valid) {
      emailError.textContent = '';
    } else {
      showEmailError();
    }
  });

  country.addEventListener('input', () => {
    if (country.validity.valid) {
      countryError.textContent = '';
    } else {
      showCountryError();
    }
  });

  zipCode.addEventListener('input', () => {
    if (zipCode.validity.valid) {
      zipCodeError.textContent = '';
    } else {
      showZipError();
    }
  });

  password.addEventListener('input', () => {
    if (password.validity.valid) {
      passwordError.textContent = '';
    } else {
      showPasswordError();
    }
  });

  passwordConf.addEventListener('input', () => {
    if (passwordConf.validity.valid && passwordConf.value === password.value) {
      passwordConfError.textContent = '';
    } else {
      showPasswordConfError();
    }
  });

  form.addEventListener('submit', (event) => {
    if (!email.validity.valid) {
      showEmailError();
      event.preventDefault();
    }
  });
}

formVilidation();
