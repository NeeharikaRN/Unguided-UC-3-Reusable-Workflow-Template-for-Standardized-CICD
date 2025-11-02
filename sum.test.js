import { sum } from './sum.js';

test('adds two numbers correctly', () => {
  expect(sum(3, 4)).toBe(7);
});

test('throws error if inputs are not numbers', () => {
  expect(() => sum('a', 5)).toThrow('Inputs must be numbers');
});
