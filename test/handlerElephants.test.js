const handlerElephants = require('../src/handlerElephants');

describe('Testes da função HandlerElephants', () => {
  it('retorna a quantidade de elefantes', () => {
    expect(handlerElephants('count')).toBe(4);
  });
  it('retorna um array com a relação dos nomes de todos os elefantes', () => {
    expect(handlerElephants('names')).toEqual(['Ilana', 'Orval', 'Bea', 'Jefferson']);
  });
  it('retorna a média de idade dos elefantes', () => {
    expect(handlerElephants('averageAge')).toBe(10.5);
  });
  it('Teste com parâmetro errado', () => {
    expect(handlerElephants('O fer é um Monstro, insubstituível eu diria, FERnomenal, FEROZ, UM MONSTRO')).toBe(null);
  });
  it('Teste com parâmetro errado', () => {
    expect(handlerElephants('location')).toEqual('NW');
  });
});
