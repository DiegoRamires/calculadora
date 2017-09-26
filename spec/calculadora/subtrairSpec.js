describe('Suítes de teste de subtração', function(){
  var Calculadora = require('../../src/js/calculadora.js');

  it('deve retornar 5 para 8 e 3', function() {
    expect(Calculadora.subtrair(8, 3)).toEqual(5);
  });

  it('deve retornar 5 para 8 e 3 no formato texto', function(){
    expect(Calculadora.subtrair(8, '3')).toEqual(5)
  });

  it('deve retornar 3 para 5 e 2.5', function() {
    expect(Calculadora.subtrair(5.5, 2.5)).toEqual(3);
    expect(Calculadora.subtrair('5.5', '2.5')).toEqual(3);
    expect(Calculadora.subtrair('5.5', 2.5)).toEqual(3);
  });

  it('deve retornar 0 para valor 1 invalido', function(){
    expect(Calculadora.subtrair(undefined, 5)).toEqual(0);
  });

  it('deve retornar 0 para valor 2 invalido', function(){
    expect(Calculadora.subtrair(4, undefined)).toEqual(0);
  })
})