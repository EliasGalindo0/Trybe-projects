const randomColors = document.querySelectorAll('.random');

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
  return randomColors;
}

window.onload = setColors();
