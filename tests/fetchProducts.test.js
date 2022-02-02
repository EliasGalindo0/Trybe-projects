require('../mocks/fetchSimulator');
const { fetchProducts } = require('../helpers/fetchProducts');
const computadorSearch = require('../mocks/search');

describe('1 - Teste a função fecthProducts', () => {
  it("1. Teste se `fetchProducts` é uma função;", () => {
    expect(typeof fetchProducts).toBe("function");
    it('2. Execute a função `fetchProducts` com o argumento "computador" e teste se `fetch` foi chamada;', () => {
      expect(fetchProducts).toHaveBeCalledWith('computador');
    });
  });
});
