describe('Suíte de testes de divisão', function(){
  var Calculadora = require('../../src/js/calculadora.js');

  it('deve retornar 2 dividindo 10 por 5', function() {
    expect(Calculadora.dividir(10,5)).toEqual(2);
  });

  it('deve retonar 3 dividindo 6 por 2 no formato texto', function() {
    expect(Calculadora.dividir('6', '2')).toEqual(3);
  });

  it('deve retornar 2.5 dividindo 5 por 2', function(){
    expect(Calculadora.dividir(5,2)).toEqual(2.5)
  });

  it('deve retornar "Erro" para divisão por 0', function() {
    expect(Calculadora.dividir(5,0)).toEqual("Erro")
  });

  it('deve retornar 0 para valor 1 inválido', function() {
    expect(Calculadora.dividir(undefined, 5)).toEqual(0);
  });

  it('deve retornar 0 para valor 2 inválido', function() {
    expect(Calculadora.dividir(5, undefined)).toEqual(0);
  })
});