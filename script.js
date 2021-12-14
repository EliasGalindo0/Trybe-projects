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
  const listBg = document.querySelector('.listBg');
  listBg.classList.remove('listBg');
  event.target.classList.add('listBg');
}
function taskDone(e) {
  if (e.target.classList.contains('completed')) {
    e.target.classList = 'item listBg';
  } else {
    e.target.classList.add('completed');
  }
}

const buton = document.querySelector('#criar-tarefa');

buton.addEventListener('click', createItem);
taskList.addEventListener('click', changeLiBgColor);
taskList.addEventListener('dblclick', taskDone);
