import { typeis } from '../';
import { Types as T } from '../';

test('typeis - number', () => {
  expect(typeis(8)).toBe(T.number); 
});
test('typeis - string', () => { 
  expect(typeis('38')).toBe(T.string);
})
test('typeis - bool', () => {
  expect(typeis(true)).toBe(T.bool);
})
test('typeis - undefined', () => {
  expect(typeis(undefined)).toBe(T.undefined);
})
test('typeis - null', () => {
  expect(typeis(null)).toBe(T.null);
})
test('typeis - array', () => {
  expect(typeis([])).toBe(T.array);
})
test('typeis - object', () => {
  expect(typeis({})).toBe(T.object);
})
test('typeis - function', () => {
  expect(typeis(() => {})).toBe(T.function);
})
// test('typeis - bigInt', () => {
//   expect(typeis(120n)).toBe(T.bigInt);
// })
test('typeis - date', () => {
  expect(typeis(new Date())).toBe(T.date);
})
test('typeis - weakMap', () => {
  expect(typeis(new WeakMap())).toBe(T.weakMap);
})
test('typeis - map', () => {
  expect(typeis(new Map())).toBe(T.map);
})
test('typeis - weakSet', () => {
  expect(typeis(new WeakSet())).toBe(T.weakSet);
})
test('typeis - set', () => {
  expect(typeis(new Set())).toBe(T.set);
})
test('typeis - symbol', () => {
  expect(typeis(Symbol('s'))).toBe(T.symbol);
})
test('typeis - arrayBuffer', () => {
  expect(typeis(new ArrayBuffer(4))).toBe(T.arrayBuffer);
})

test('typeis - unknown', () => {
  class Unkonwn {
    name: string
    constructor (name?: string) {
      this.name = name ?? 'unknown class'
    }
  }
  expect(typeis(new Unkonwn())).toBe(T.unknown);
})
