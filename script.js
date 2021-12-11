// 5 - Adicione um botão com id="criar-tarefa" e, ao clicar nesse botão, um novo item deverá ser criado ao final da lista e o texto do input deve ser limpo

function createItem() {
  const inputText = document.getElementById('texto-tarefa');
  const taskList = document.getElementById('lista-tarefas');
  const liItem = document.createElement('li');
  liItem.innerText = inputText.value;
  taskList.appendChild(liItem);
  inputText.value = '';
}

const buton = document.querySelector('#criar-tarefa');
buton.addEventListener('click', createItem);
