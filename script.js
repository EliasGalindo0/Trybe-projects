const textInput = document.querySelector('#text-input');
const textOut = document.querySelector('#meme-text');
const image = document.querySelector('#meme-image');
const imageInput = document.querySelector('#meme-insert');
const buttonFire = document.querySelector('#fire');
const buttonWater = document.querySelector('#water');
const buttonEarth = document.querySelector('#earth');
const memeImage = document.querySelector('#meme-image-container');
const meme1 = document.querySelector('#meme-1');
const meme2 = document.querySelector('#meme-2');
const meme3 = document.querySelector('#meme-3');
const meme4 = document.querySelector('#meme-4');

function showText() {
  const text = textInput.value;
  textOut.innerHTML = text;
  return textOut;
}
function borderFire() {
  memeImage.style.border = ' ';
  memeImage.style.border = '3px dashed red';
}

function borderWater() {
  memeImage.style.border = ' ';
  memeImage.style.border = '5px double blue';
}

function borderEarth() {
  memeImage.style.border = ' ';
  memeImage.style.border = '6px groove green';
}

function getImageFooter(e) {
  image.src = e.target.src;
}

textInput.addEventListener('input', showText);
// imageInput.addEventListener('change', imageDisplay);
buttonFire.addEventListener('click', borderFire);
buttonWater.addEventListener('click', borderWater);
buttonEarth.addEventListener('click', borderEarth);
meme1.addEventListener('click', getImageFooter);
meme2.addEventListener('click', getImageFooter);
meme3.addEventListener('click', getImageFooter);
meme4.addEventListener('click', getImageFooter);
// Código pesquisado em vídeos no youtube
imageInput.addEventListener('change', (e) => {
  image.innerHTML = '';
  const uploadedImage = e.target.files[0];
  image.src = URL.createObjectURL(uploadedImage);
});
