const reverseString = require('../functions/reverseStr');

  test('testing reverseStr function', () => {
      expect(reverseString('hello world')).toBe('dlrow olleh');
      expect(reverseString('hello Atif')).toBe('fitA olleh');
});

