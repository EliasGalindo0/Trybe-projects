const randomColors = document.querySelectorAll('.random');
const answer = document.querySelector('#answer');
const colorList = document.querySelector('#color-list');
const resetButton = document.getElementById('reset-game');

function randomColorsGenerate() {
  const aux = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i += 1) {
    color += aux[Math.floor(Math.random() * 16)];
  }
  return `${color}FF`;
}

function setColors() {
  for (let i = 0; i < randomColors.length; i += 1) {
    const color = randomColorsGenerate();
    randomColors[i].style.backgroundColor = color;
  }
  const rgbText = document.getElementById('rgb-color');
  const rgbColor = document.querySelector('.ball');
  const bgColor = getComputedStyle(rgbColor).backgroundColor;
  rgbText.innerHTML = bgColor;
  return randomColors;
}

window.onload = setColors();

function changeClassChoosen(e) {
  e.target.classList.contains('ball');
  e.target.classList.add('choosen');
  const choose = document.querySelector('.choosen');
  const bkgChoose = getComputedStyle(choose).backgroundColor;
  const rgbCompare = document.getElementById('rgb-color').innerText;
  if (bkgChoose === rgbCompare) {
    answer.innerText = 'Acertou!';
  } else {
    answer.innerText = 'Errou! Tente novamente!';
  }
  console.log(bkgChoose);
  console.log(rgbCompare);
  // console.log();
}

function reset() {
  window.location.reload();
}
// function answerGenerate() {
// }

colorList.addEventListener('click', changeClassChoosen);
resetButton.addEventListener('click', reset);
