function createProductImageElement(imageSource) {
  const img = document.createElement('img');
  img.className = 'item__image';
  img.src = imageSource;
  return img;
}

function createCustomElement(element, className, innerText) {
  const e = document.createElement(element);
  e.className = className;
  e.innerText = innerText;
  return e;
}

function createProductItemElement({ sku, name, image }) {
  const section = document.createElement('section');
  section.className = 'item';

  section.appendChild(createCustomElement('span', 'item__sku', sku));
  section.appendChild(createCustomElement('span', 'item__title', name));
  section.appendChild(createProductImageElement(image));
  section.appendChild(createCustomElement('button', 'item__add', 'Adicionar ao carrinho!'));

  return section;
}

const items = async () => {
  const data = await fetchProducts('computador');
  const products = data.results;

  products.forEach((product) => {
    const { id, title, thumbnail } = product;
    const itemMarket = (createProductItemElement({ sku: id, name: title, image: thumbnail }));
    document.querySelector('.items').appendChild(itemMarket);
  });
};

function getSkuFromProductItem(item) {
  return item.querySelector('span.item__sku').innerText;
}

function cartItemClickListener(event) {
  // 
  
}

function createCartItemElement({ sku, name, salePrice }) {
  const li = document.createElement('li');
  li.className = 'cart__item';
  li.innerText = `SKU: ${sku} | NAME: ${name} | PRICE: $${salePrice}`;
  li.addEventListener('click', cartItemClickListener);
  return li;
}

const getItemCart = async () => {
  const data = await fetchItem('MLB1341706310');
  const itemCart = { 
    sku: data.id, 
    name: data.title, 
    salePrice: data.price };
  document.querySelector('.cart__items').appendChild(createCartItemElement(itemCart));
};
getItemCart();
// document.querySelector('.item__add').addEventListener('click', getItemCart());

  window.onload = () => { 
  items();
};
