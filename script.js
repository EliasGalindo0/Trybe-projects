const textInput = document.querySelector('#text-input');
const textOut = document.querySelector('#meme-text');
const image = document.querySelector('#meme-image');
const imageInput = document.querySelector('#meme-insert');
const buttonFire = document.querySelector('#fire');
const buttonWater = document.querySelector('#water');
const buttonEarth = document.querySelector('#earth');
const memeImage = document.querySelector('#meme-image-container');

function showText() {
  const text = textInput.value;
  textOut.innerHTML = text;
  return textOut;
}
// Código consultado no site https://medium.com/@iamcodefoxx/how-to-upload-and-preview-an-image-with-javascript-749b92711b91
function imageDisplay() {
  const reader = new FileReader();
  reader.addEventListener('load', () => {
    const uploadedImage = reader.result;
    image.style.backgroundImage = `url(${uploadedImage})`;
  });
  reader.readAsDataURL(this.files[0]);
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

textInput.addEventListener('input', showText);
imageInput.addEventListener('change', imageDisplay);
buttonFire.addEventListener('click', borderFire);
buttonWater.addEventListener('click', borderWater);
buttonEarth.addEventListener('click', borderEarth);
