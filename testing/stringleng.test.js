const stringLength = require('../functions/stringleng.js');


  test('checking for invalid characters', () => {
    expect(stringLength('')).toBe('invalid string');
    expect(stringLength('abcdefghijk')).toBe('invalid string');
    expect(stringLength('a')).toBe(1);
    expect(stringLength('0123456789')).toBe(10);
  });
