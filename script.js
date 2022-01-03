const textInput = document.getElementById('text-input');
const textOut = document.getElementById('meme-text');

function showText() {
  const text = textInput.value;
  textOut.innerHTML = text;
  return textOut;
}

textInput.addEventListener('input', showText);
