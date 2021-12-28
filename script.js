const taskList = document.querySelector('#lista-tarefas');
const inputText = document.querySelector('#texto-tarefa');
const buton = document.querySelector('#criar-tarefa');
const buttonEraseAll = document.querySelector('#apaga-tudo');
const done = document.querySelector('#remover-finalizados');
const saveButton = document.querySelector('#salvar-tarefas');
const moveUpButton = document.querySelector('#mover-cima');
const moveDownButton = document.querySelector('#mover-baixo');
const removeSelectedButton = document.querySelector('#remover-selecionado');

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
function taskDoneMark(e) {
  if (e.target.classList.contains('completed')) {
    e.target.classList = 'item listBg';
  } else {
    e.target.classList.add('completed');
  }
}
function eraseAll() {
  taskList.innerHTML = '';
}
function tasksDoneRemove() {
  const doneTask = document.getElementsByClassName('completed');
  while (doneTask.length > 0) {
    doneTask[0].parentNode.removeChild(doneTask[0]);
  }
  document.querySelector('ol').classList.add('listBg');
}
function moveUp() {
  const li = document.querySelector('li.listBg');
  if (!li) { return alert('Por favor, selecione um item da lista!'); }
  const parent = li.parentElement;
  if (li === parent.firstElementChild) {
    return alert('Não há como mover o primeiro item da lista para cima!');
  }
  parent.insertBefore(li, li.previousElementSibling);
}
function moveDown() {
  const li = document.querySelector('li.listBg');
  if (!li) { return alert('Por favor, selecione um item da lista!'); }
  const parent = li.parentElement;
  if (li === parent.lastChild) {
    return alert('Não há como mover o último item da lista para baixo!');
  }
  parent.insertBefore(li, li.nextElementSibling.nextElementSibling);
}
function removeSelectedTask() {
  const selectedTask = document.querySelector('li.listBg');
  selectedTask.remove();
}
function saveContent() {
  const htmlContent = taskList.innerHTML;
  localStorage.setItem('conteudo', htmlContent);
}
const save = localStorage.getItem('conteudo');
if (save) {
  const htmlContent1 = taskList;
  htmlContent1.innerHTML = save;
}

buttonEraseAll.addEventListener('click', eraseAll);
buton.addEventListener('click', createItem);
taskList.addEventListener('click', changeLiBgColor);
taskList.addEventListener('dblclick', taskDoneMark);
done.addEventListener('click', tasksDoneRemove);
saveButton.addEventListener('click', saveContent);
moveUpButton.addEventListener('click', moveUp);
moveDownButton.addEventListener('click', moveDown);
removeSelectedButton.addEventListener('click', removeSelectedTask);
