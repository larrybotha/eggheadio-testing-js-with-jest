const sum = require('./sum');

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});

// Jest simulates a browser environment, and by default makes `window` available
// globally
// console.log(window);
// This can be disabled by adding testEnvironment: 'node' to package.json under
// a "jest" field
