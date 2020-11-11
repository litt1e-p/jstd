import { inEnum, Types, typeis } from '../'

test('enum - inEnum', () => {
  expect(inEnum()).toBeFalsy();
});

test('enum - inEnum', () => {
  expect(inEnum(void 0)).toBeFalsy();
});

test('enum - inEnum', () => {
  const enums = Object.freeze({
    a: 1,
    b: 2
  })
  expect(inEnum(enums, void 0)).toEqual(false);
});

test('enum - inEnum', () => {
  const enums = Object.freeze({
    a: 1,
    b: 2
  })
  expect(inEnum(enums, enums.a)).toEqual(true);
});

test('enum - inEnum', () => {
  const enums = Object.freeze({
    a: 1,
    b: 2
  })
  expect(inEnum(enums, 'a')).toEqual(true);
});

test('enum - inEnum', () => {
  const enums = Object.freeze({
    a: 1,
    b: 2
  })
  expect(inEnum(enums, 1)).toEqual(true);
});

test('enum - inEnum', () => {
  enum enums {
    a = 1,
    b = 2
  }
  expect(inEnum(enums, enums.b)).toEqual(true);
});

test('enum - inEnum', () => {
  enum enums {
    a = 1,
    b = 2
  }
  expect(inEnum(enums, 1)).toEqual(true);
});

test('enum - inEnum', () => {
  enum enums {
    a = 1,
    b = 2
  }
  expect(inEnum(enums, 3)).toEqual(false);
});

test('enum - Types', () => {
  expect(typeis(1)).toEqual(Types.number)
  expect(typeis('1')).toEqual(Types.string)
  expect(typeis(true)).toEqual(Types.bool)
  expect(typeis({})).toEqual(Types.object)
  expect(typeis([])).toEqual(Types.array)
  expect(typeis(void 0)).toEqual(Types.undefined)
})