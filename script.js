const colorSelected = document.querySelector('#color-palette');
const buton = document.getElementById('clear-board');
const inputButton = document.getElementById('generate-board');
const inputBoardValue = document.querySelector('#board-size');
const valorStorage = localStorage.getItem('inputValue');
const boardPixel = document.getElementById('pixel-board');

function getValueInput() {
  let aux = 0;
  if (valorStorage === null) {
    aux = 5;
  } else {
    inputBoardValue.value = valorStorage;
    aux = valorStorage;
  }
  return aux;
}

function generateBoardPixel() {
  const pixels = getValueInput();
  for (let i = 0; i < pixels; i += 1) {
    const line = document.createElement('div');
    line.style.height = `${40}px`;
    for (let j = 0; j < pixels; j += 1) {
      const square = document.createElement('div');
      square.className = 'pixel';
      line.appendChild(square);
    }
    boardPixel.appendChild(line);
  }
  return null;
}
window.onload = generateBoardPixel();

function captureColor(e) {
  const classSelected = document.querySelector('.selected');
  classSelected.classList.remove('selected');
  e.target.classList.add('selected');
}

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

function clearBoard() {
  const boardElements = document.querySelectorAll('.pixel');
  for (let index = 0; index < boardElements.length; index += 1) {
    boardElements[index].style.backgroundColor = 'rgb(255, 255, 255)';
  }
}

function boardSize() {
  if (inputBoardValue.value === '') {
    window.alert('Board inválido!');
  } else if (inputBoardValue.value >= 0 && inputBoardValue.value < 5) {
    localStorage.setItem('inputValue', 5);
  } else if (inputBoardValue.value > 50) {
    localStorage.setItem('inputValue', 50);
  } else {
    localStorage.setItem('inputValue', inputBoardValue.value);
  }
  window.location.reload();
}

inputButton.addEventListener('click', boardSize);
buton.addEventListener('click', clearBoard);
colorSelected.addEventListener('click', captureColor);

// Colaboração: Miguel Lima - Turma 19 - Tribo B
