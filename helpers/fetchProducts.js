// código feito com o auxílio do aluno Miguel Lima Tribo-B
const fetchProducts = async (query) => {
  if (!query) {
    return new Error('You must provide an url');
  }
  const endpoint = `https://api.mercadolibre.com/sites/MLB/search?q=${query}`;
  const response = await fetch(endpoint);
  const data = await response.json();
  return data;
};

if (typeof module !== 'undefined') {
  module.exports = {
    fetchProducts,
  };
}
