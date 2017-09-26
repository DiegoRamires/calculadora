describe("Suite de testes de multiplicação", function() {
  var Calculadora = require('../../src/js/calculadora.js');

  it('deve retornar 10 para multiplicação entre 2 e 5', function() {
    expect(Calculadora.multiplicar(2, 5)).toEqual(10);
  });

  it('deve retornar 6 para multiplicação entre 3 e 2 em formato texto', function() {
    expect(Calculadora.multiplicar('3', '2')).toEqual(6);
    expect(Calculadora.multiplicar('3', 4)).toEqual(12);
  });

  it('deve retornar 4.5 para a multiplicação entre 3 e 1.5', function(){
    expect(Calculadora.multiplicar(3, 1.5)).toEqual(4.5)
  });

  it('deve retornar 0 para valor 1 inválido', function() {
    expect(Calculadora.multiplicar(undefined, 4)).toEqual(0)
  });

  it('deve retornar 0 para valor 2 inválido', function() {
    expect(Calculadora.multiplicar(4, undefined)).toEqual(0)
  })
})