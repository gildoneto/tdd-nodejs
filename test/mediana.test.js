const mediana = require('../src/mediana');

test('o array [9,2,1,4,6] deve retornar 4', () => {
  expect(mediana([9,2,1,4,6])).toBe(4);
});