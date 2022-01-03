const textInput = document.getElementById('text-input');
const textOut = document.getElementById('meme-text');
const image = document.getElementById('meme-image');
const imageInput = document.querySelector('#meme-insert');

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

textInput.addEventListener('input', showText);
imageInput.addEventListener('change', imageDisplay);
