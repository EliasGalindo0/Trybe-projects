/*
  A função average recebe um array (tamanho variável) e retorna a média dos valores recebidos.
  Caso a função receba algum valor não númerico ou um array vazio,
  o valor undefined deve ser retornado.
  Todos os resultados devem ser arredondados para valores inteiros. Ex: 4,6 vira 5; 1,3 vira 1.

  Parâmetros:
    - Um array. Exemplos: [1, 2]; [1, 2, 3, 4, 5]; [1, 2, '3']; [];
  Comportamento:
    - average([2, 2]) // Retorno: 2;
    - average([1, 1]) // Retorno: 1;
    - average([1, '2']) // Retorno: undefined;
*/
// consultado o site: https://stackoverflow.com/questions/10359907/how-to-compute-the-sum-and-average-of-elements-in-an-array
const average = (array) => {
  if (array.length === 0) {
    return undefined;
  }
  for (let index = 0; index < array.length; index += 1) {
    if (typeof array[index] !== 'number') {
      return undefined;
    } 
  }
  // const isNumber = array.map(Number);
  const sum = array.reduce((a, b) => a + b, 0);
  const result = (sum / array.length);
  return Math.round(result);
};

module.exports = average;
