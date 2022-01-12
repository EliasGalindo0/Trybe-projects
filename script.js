const buttonEnter = document.querySelector('#submit-btn-header');
const buttonSubmit = document.querySelector('#submit-btn');
const agreement = document.querySelector('#agreement');

function validatePassword() {
  const email = document.querySelector('#email').value;
  const password = document.querySelector('#password').value;
  if (email === 'tryber@teste.com' && password === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
}
buttonEnter.addEventListener('click', validatePassword);

function ableSubmit() {
  if (agreement.checked === true) {
    buttonSubmit.removeAttribute('disabled');
  } else {
    buttonSubmit.setAttribute('disabled', 'disabled');
  }
}
agreement.addEventListener('click', ableSubmit);
