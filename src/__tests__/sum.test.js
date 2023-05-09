const sum = require("../components/teste.jsx/sum");

test('Soma de 1 + 2 é igual 3', () => {
  expect(sum(1, 2)).toBe(3);
});