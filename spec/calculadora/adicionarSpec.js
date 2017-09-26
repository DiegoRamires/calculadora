describe("Suite de testes de adição", function() {
  var Calculadora = require('../../src/js/calculadora.js');

  it('deve retornar 5 para soma de 2 e 3', function() {
    expect(Calculadora.adicionar(2,3)).toEqual(5);
  });

  it('deve retornar 6 para soma de 9 e -3 no formato texto', function() {
    expect(Calculadora.adicionar('9', '-3')).toEqual(6);
  });

  it('deve retornar 4.5 para soma entre 1.5 e 3', function() {
    expect(Calculadora.adicionar(1.5, 3)).toEqual(4.5);
  });

  it('deve retonar 0 quando valor 1 não for numérico', function() {
    expect(Calculadora.adicionar(undefined, 10)).toEqual(0);
  });

  it('deve retonar 0 quando valor 2 não for numérico', function() {
    expect(Calculadora.adicionar(10, undefined)).toEqual(0);
  })
});