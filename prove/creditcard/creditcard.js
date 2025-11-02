const page = document.querySelector('body');
const form = document.getElementById('checkoutForm');
const errorsBox = document.querySelector('.errors');

function displayError(msg) {
  if (!msg) {
    errorsBox.textContent = '';
    errorsBox.style.display = "none";
  } else {
    errorsBox.textContent = msg;
    errorsBox.style.display = "block";
  }
}

function submitHandler(e) {
  e.preventDefault();
  displayError('');

  const cardNum = document.querySelector('#creditCardNumber').value.replace(/\s+/g, '');
  const month = parseInt(document.querySelector('#month').value, 10);
  const yearInput = document.querySelector('#year').value.trim();

  if (cardNum !== '1234123412341234') {
    displayError('Card number not accepted.');
    return;
  }

  const year = yearInput.length === 2 ? 2000 + parseInt(yearInput, 10) : parseInt(yearInput, 10);
  const expiration = new Date(year, month, 1);
  const now = new Date();

  if (now >= expiration) {
    displayError('Card is expired.');
    return;
  }

  displayError('');
  page.innerHTML += '<h2>Thank you for your purchase.</h2>';
}

form.addEventListener('submit', submitHandler);
