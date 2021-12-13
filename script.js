// ### 7 - Clicar em um item da lista deve alterar a cor de fundo do item para cinza rgb(128,128,128)
const taskList = document.querySelector('#lista-tarefas');
const inputText = document.getElementById('texto-tarefa');

function createItem() {
  const liItem = document.createElement('li');
  liItem.innerText = inputText.value;
  liItem.classList.add('item');
  taskList.appendChild(liItem);
  inputText.value = '';
}
function changeLiBgColor(event) {
  const listItem = document.querySelector('.item');
  listItem.classList.remove('item');
  event.target.classList.add('listItem');
}

const buton = document.querySelector('#criar-tarefa');

buton.addEventListener('click', createItem);

taskList.addEventListener('click', changeLiBgColor);
