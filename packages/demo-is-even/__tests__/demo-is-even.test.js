const {isEven} = require('../dist/demo-is-even.js');


test('is even', () => {
  expect(isEven(2)).toBe(true)
  expect(isEven(1)).toBe(false)
  expect(isEven(4)).toBe(true)
})
