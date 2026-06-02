// Prueba real

const suma = require('./suma');

test("La funcion debe de devover suma correcta", () => {
    expect(suma(1, 2)).toBe(3);
});
//EXPECT toma el valor - toBe verifica el valor esperado