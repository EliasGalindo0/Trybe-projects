const letterText = document.getElementById('carta-texto');
const letterDisplay = document.getElementById('carta-gerada');
const counterLetter = document.getElementById('carta-contador');
const buttonLetter = document.getElementById('criar-carta');
const classes = {
  style: ['newspaper', 'magazine1', 'magazine2'],
  size: ['medium', 'big', 'reallybig'],
  rotate: ['rotateleft', 'rotateright'],
  skew: ['skewleft', 'skewright'],
};

function randomClasses(e) {
  const span = e;
  const values = Object.values(classes);
  span.className = '';
  for (let i = 0; i < values.length; i += 1) {
    const valueClass = values[i][Math.floor(Math.random() * values[i].length)];
    if (valueClass) { span.classList.add(valueClass); }
  }
}

function generateText(word) {
  const createSpan = document.createElement('span');
  randomClasses(createSpan);
  createSpan.innerText = word;
  createSpan.addEventListener('click', () => randomClasses(createSpan));
  letterDisplay.appendChild(createSpan);
}

function generateLetter() {
  const words = letterText.value.split(' ');
  letterDisplay.innerHTML = '';
  if (words[0] === '') {
    counterLetter.innerText = '';
    letterDisplay.innerText = 'Por favor, digite o conteúdo da carta.';
  } else {
    counterLetter.innerText = words.length;
    for (let i = 0; i < words.length; i += 1) {
      generateText(words[i]);
    }
  }
}

buttonLetter.addEventListener('click', generateLetter);
