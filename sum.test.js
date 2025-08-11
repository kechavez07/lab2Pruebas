// 1. Importar la función sumar
const sumar = require('./sum');

// 2. Crear una prueba
test('Suma de 2 + 3 debe ser 5', () => {
  expect(sumar(2, 3)).toBe(5);
});

test('Suma de números negativos', () => {
  expect(sumar(-1, -4)).toBe(-5);
});

test('Suma con cero', () => {
  expect(sumar(0, 7)).toBe(7);
});
