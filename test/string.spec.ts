import { stringable, strLen } from '../'

test('string - stringable', () => {
  expect(stringable(void 0)).toBe(false);
});

test('string - stringable', () => {
  expect(stringable('')).toBe(false);
});

test('string - stringable', () => {
  expect(stringable('', false)).toBe(true);
});

test('string - stringable', () => {
  expect(stringable('123')).toBe(true);
});

test('string - strLen', () => {
  expect(strLen(void 0)).toEqual(0);
});

test('string - strLen', () => {
  expect(strLen('')).toEqual(0);
});

test('string - strLen', () => {
  expect(strLen('123abc')).toEqual(6);
});

test('string - strLen', () => {
  expect(strLen('你好阿')).toEqual(9);
});
