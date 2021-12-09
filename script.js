const colorSelected = document.querySelector('#color-palette');

function captureColor(event) {
  const classSelected = document.querySelector('.selected');
  classSelected.classList.remove('selected');
  event.target.classList.add('selected');
}

colorSelected.addEventListener('click', captureColor);
