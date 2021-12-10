const colorSelected = document.querySelector('#color-palette');

function captureColor(e) {
  const classSelected = document.querySelector('.selected');
  classSelected.classList.remove('selected');
  e.target.classList.add('selected');
}

colorSelected.addEventListener('click', captureColor);

function getColor(e) {
  const square = document.querySelector('.selected');
  const style = getComputedStyle(square);
  const background = style.backgroundColor;
  e.target.style.backgroundColor = background;
}

function colorPixel() {
  const targetColor = document.querySelectorAll('.pixel');
  for (let index = 0; index < targetColor.length; index += 1) {
    targetColor[index].addEventListener('click', getColor);
  }
}

colorPixel();

const buton = document.getElementById('clear-board');
function clearBoard() {
  const boardElements = document.querySelectorAll('.pixel');
  for (let index = 0; index < boardElements.length; index += 1) {
    boardElements[index].style.backgroundColor = 'rgb(255, 255, 255)';
  }
}

buton.addEventListener('click', clearBoard);

// Colaboração: Miguel Lima - Turma 19 - Tribo B
