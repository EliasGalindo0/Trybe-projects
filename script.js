const inputName = document.querySelector('#input-name');
const inputLastName = document.querySelector('#input-lastname');
const inputEmail = document.querySelector('#input-email');
const inputHouse = document.getElementById('house');
const inputFamily = document.querySelectorAll('.family');
const checkbox = document.querySelectorAll('.subject');
const ratingInput = document.querySelectorAll('.rating');
const textareaInput = document.querySelector('#textarea');
const form = document.querySelector('#evaluation-form');
const buttonEnter = document.querySelector('#submit-btn-header');
const agreement = document.querySelector('#agreement');
const counter = document.getElementById('counter');
const buttonSubmit = document.querySelector('#submit-btn');

const validatePassword = () => {
  const email = document.querySelector('#email').value;
  const password = document.querySelector('#password').value;
  if (email === 'tryber@teste.com' && password === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
};

const ableSubmit = () => {
  if (agreement.checked === true) {
    buttonSubmit.removeAttribute('disabled');
  } else {
    buttonSubmit.setAttribute('disabled', 'disabled');
  }
};

const contador = () => {
  counter.innerText = 500 - textareaInput.value.length;
};

const familyChecked = () => {
  for (let index = 0; index < inputFamily.length; index += 1) {
    if (inputFamily[index].checked) {
      return `Família: ${inputFamily[index].value}`;
    }
  }
};

const subjectsChecked = () => {
  const checkboxList = [];
  for (let index = 0; index < checkbox.length - 1; index += 1) {
    if (checkbox[index].checked && index === 0) {
      checkboxList.push(checkbox[index].value);
    } else if (checkbox[index].checked) {
      checkboxList.push(` ${checkbox[index].value}`);
    }
  }
  return `Matérias: ${checkboxList}`;
};

const rating = () => {
  for (let index = 0; index < ratingInput.length; index += 1) {
    if (ratingInput[index].checked) {
      return `Avaliação: ${ratingInput[index].value}`;
    }
  }
};

const getFormsValues = () => {
  const infoShow = [`Nome: ${inputName.value} ${inputLastName.value}`,
    `Email: ${inputEmail.value}`,
    `Casa: ${inputHouse.value}`,
    familyChecked(),
    subjectsChecked(),
    rating(),
    `Observações: ${textareaInput.value}`];
  for (let index = 0; index < 7; index += 1) {
    form.children[index].innerHTML = infoShow[index];
  }
};

const submit = () => {
  form.innerHTML = '';
  for (let index = 0; index < 7; index += 1) {
    const formSpan = document.createElement('span');
    form.appendChild(formSpan);
  }
  getFormsValues();
};

textareaInput.addEventListener('input', contador);
buttonEnter.addEventListener('click', validatePassword);
agreement.addEventListener('click', ableSubmit);
buttonSubmit.addEventListener('click', submit);
