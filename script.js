const colorSelected = document.querySelector('#color-palette');

function captureColor(e) {
  const classSelected = document.querySelector('.selected');
  classSelected.classList.remove('selected');
  e.target.classList.add('selected');
}

colorSelected.addEventListener('click', captureColor);

function color(e) {
  const square = document.querySelector('.selected');
  const style = getComputedStyle(square);
  const background = style.backgroundColor;
  e.target.style.backgroundColor = background;
}

function colorFora() {
  const targetColor = document.querySelectorAll('.pixel');
  for (let index = 0; index < targetColor.length; index += 1) {
    targetColor[index].addEventListener('click', color);
  }
}

colorFora();
