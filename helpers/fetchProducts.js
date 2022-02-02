const fetchProducts = async (query) => {
  if (!query) {
    return new Error('You must provide an url');
  }
  const url = `https://api.mercadolibre.com/sites/MLB/search?q=${query}`;
  const xablau = await fetch(url);
  const xabalu = await xablau.json();
  return xabalu;
};

if (typeof module !== 'undefined') {
  module.exports = {
    fetchProducts,
  };
}
