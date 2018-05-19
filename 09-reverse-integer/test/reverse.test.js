'use strict';

const reverseInt = require('../reverse.js');

describe('reverse()', () => {
  it('Should return 954 when 459 is passed as a parameter', () => {
    expect(reverseInt(459)).toBe(954);
  });

  it('Should return 0 when 0 is passed as a parameter', () => {
    expect(reverseInt(0)).toBe(0);
  });

  it('Should return an error message if a negative number is passed as a parameter', () => {
    expect(reverseInt(-123)).toBe(undefined);
  })
});
