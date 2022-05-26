const getOpeningHours = require('../src/getOpeningHours');

describe('Testes da função getOpeningHours', () => {
  it('Teste não passando argumentos. Deverá retornar o objeto:', () => {
    expect(getOpeningHours()).toEqual({
      Tuesday: { open: 8, close: 6 },
      Wednesday: { open: 8, close: 6 },
      Thursday: { open: 10, close: 8 },
      Friday: { open: 10, close: 8 },
      Saturday: { open: 8, close: 10 },
      Sunday: { open: 8, close: 8 },
      Monday: { open: 0, close: 0 },
    });
  });
  it('Para os argumentos Monday e 09:00-AM deve retornar a string "The zoo is closed" (Já que o Zoo está sempre fechado na segunda', () => {
    expect(getOpeningHours('Monday', '09:00-AM')).toEqual('The zoo is closed');
  });
  it('Para os argumentos Tuesday e 09:00-AM deve retornar a string "The zoo is open"', () => {
    expect(getOpeningHours('Tuesday', '09:00-AM')).toEqual('The zoo is open');
  });
  it('Para os argumentos Wednesday e 09:00-PM deve retornar a string "The zoo is closed"', () => {
    expect(getOpeningHours('Wednesday', '09:00-PM')).toEqual('The zoo is closed');
  });
  it('Para os argumentos Thu e 09:00-AM deve lançar uma exceção com a mensagem: "The day must be valid. Example: Monday"', () => {
    expect(() => getOpeningHours('Thu', '09:00-PM')).toThrowError(new Error('The day must be valid. Example: Monday'));
  });
  it('Para os argumentos Friday e 09:00-ZM deve lançar uma exceção com a mensagem: "The abbreviation must be \'AM\' or \'PM\'"', () => {
    expect(() => getOpeningHours('Friday', '09:00-ZM')).toThrowError(new Error('The abbreviation must be \'AM\' or \'PM\''));
  });
  it('Para os argumentos Saturday e C9:00-AM deve lançar uma exceção com a mensagem: "The hour should represent a number"', () => {
    expect(() => getOpeningHours('Saturday', 'C9:00-AM')).toThrowError(new Error('The hour should represent a number'));
  });
  it('Para os argumentos Sunday e 09:c0-AM deve lançar uma exceção com a mensagem: "The minutes should represent a number"', () => {
    expect(() => getOpeningHours('Sunday', '09:c0-AM')).toThrowError(new Error('The minutes should represent a number'));
  });
  it('Para os argumentos Tuesday e 13:00-AM deve lançar uma exceção com a mensagem: "The hour must be between 0 and 12"', () => {
    expect(() => getOpeningHours('Tuesday', '13:00-AM')).toThrowError(new Error('The hour must be between 0 and 12'));
  });
  it('Para os argumentos Tuesday e 13:74-AM deve lançar uma exceção com a mensagem: "The minutes must be between 0 and 59"', () => {
    expect(() => getOpeningHours('Tuesday', '10:74-AM')).toThrowError(new Error('The minutes must be between 0 and 59'));
  });
});
