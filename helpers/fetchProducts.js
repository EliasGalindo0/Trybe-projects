const fetchProducts = () => {
  // seu código aqui 
  const mlApi = "https://api.mercadolibre.com/sites/MLB/search?q=$QUERY";
  
};

if (typeof module !== 'undefined') {
  module.exports = {
    fetchProducts,
  };
}
