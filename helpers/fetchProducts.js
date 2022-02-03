// código feito com o auxílio do aluno Miguel Lima Tribo-B
const fetchProducts = async (query) => {
  if (!query) {
    return new Error('You must provide an url');
  }
  const url = `https://api.mercadolibre.com/sites/MLB/search?q=${query}`;
  const result = await fetch(url);
  const data = await result.json();
  return data;
};

if (typeof module !== 'undefined') {
  module.exports = {
    fetchProducts,
  };
}
