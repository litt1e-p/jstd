import { objectable, optional, extractable, assign, objReverse } from '../'

// objectable
describe('object - objectable cases', () => {
  test('object - objectable', () => {
    expect(objectable(void 0)).toBe(false);
  });
  
  test('object - objectable', () => {
    expect(objectable({})).toBe(false);
  });
  
  test('object - objectable', () => {
    expect(objectable({}, false)).toBe(true);
  });
  
  test('object - objectable', () => {
    expect(objectable({a: 1})).toBe(true);
  });
})


// optional
describe('object - optional cases', () => {
  test('object - optional', () => {
    expect(optional(void 0)).toEqual(void 0);
  });
  
  test('object - optional', () => {
    expect(optional(void 0, void 0)).toEqual(void 0);
  });
  
  test('object - optional', () => {
    expect(optional('a', {a: {b: {c: 1}}})).toEqual({b: {c: 1}});
  });
  
  test('object - optional', () => {
    expect(optional('a.b', {a: {b: {c: 1}}})).toEqual({c: 1});
  });
  
  test('object - optional', () => {
    expect(optional('a.b.c', {a: {b: {c: 1}}})).toEqual(1);
  });
  
  test('object - optional', () => {
    expect(optional('a.b.c.d', {a: {b: {c: 1}}})).toEqual(void 0);
  });
  
  test('object - optional', () => {
    expect(optional('a.b.1', {a: {b: [{b1: 1}, {b2: 2}]}})).toEqual({b2: 2});
  });

  test('object - optional', () => {
    expect(optional('a.b.1.b2', {a: {b: [{b1: 1}, {b2: 2}]}})).toEqual(2);
  });

  test('object - optional', () => {
    expect(optional('0.a.b.1.b2', [{a: {b: [{b1: 1}, {b2: 2}]}}])).toEqual(2);
  });
  
  test('object - optional', () => {
    expect(optional('a-b-c', {a: {b: {c: 1}}}, '-')).toEqual(1);
  });
  
  test('object - optional', () => {
    expect(optional('a.b.c.d')).toEqual(void 0);
  });
  
  test('object - optional', () => {
    const binding = optional.bind({a: {b: {c: 1}}})
    expect(binding(void 0)).toEqual(void 0);
  });
  
  test('object - optional', () => {
    const binding = optional.bind({a: {b: {c: 1}}})
    expect(binding('a')).toEqual({b: {c: 1}});
  });
  
  test('object - optional', () => {
    const binding = optional.bind({a: {b: {c: 1}}})
    expect(binding('a.b')).toEqual({c: 1});
  });
  
  test('object - optional', () => {
    const binding = optional.bind({a: {b: {c: 1}}})
    expect(binding('a.b.c')).toEqual(1);
  });
  
  test('object - optional', () => {
    const binding = optional.bind([{a: {b: {c: 1}}}])
    expect(binding('0.a.b.c')).toEqual(1);
  });

  test('object - optional', () => {
    const binding = optional.bind([{}, [{a: {b: {c: 1}}}]])
    expect(binding('1.0.a.b.c')).toEqual(1);
  });
})


// extractable
describe('object - extractable cases', () => {
  test('object - extractable', () => {
    expect(extractable()).toEqual({})
  });
  
  test('object - extractable', () => {
    expect(extractable('c', 'd', 'a')).toEqual({})
  });
  
  test('object - extractable', () => {
    expect(extractable('c', 'd', void 0)).toEqual({})
  });
  
  test('object - extractable', () => {
    const o = {a: {b: 1, c: 2, d: 3}, e: 1}
    const binding = extractable.bind(o)
    expect(binding('c', 'd', 'a')).toEqual({c: 2, d: 3})
  });
  
  test('object - extractable', () => {
    const o = {a: {b: 1, c: 2, d: 3}, e: 1}
    const binding = extractable.bind(o)
    expect(binding('c', ['f', 'd'], 'a')).toEqual({c: 2, f: 3})
  });
  
  test('object - extractable', () => {
    const o = {a: {b: 1, c: 2, d: 3, e: 4}, f: 5}
    const binding = extractable.bind(o)
    expect(binding('c', ['f', 'd'], {'g': 2}, 'a')).toEqual({c: 2, f: 3, g: 2})
  });
  
  test('object - extractable', () => {
    const o = {a: {b: 1, c: 2, d: 3, e: 4}, f: 5}
    const binding = extractable.bind(o)
    expect(binding('c', ['f', 'd'], {'g': 2}, ['e', 999], 'a')).toEqual({c: 2, f: 3, e: 999, g: 2})
  });
  
  test('object - extractable', () => {
    const o = {a: {b: 1, c: 2, d: 3, e: 4, f: 5}, g: {h: 6, i: 7}}
    const binding = extractable.bind(o)
    expect(binding('c', ['f1', 'd'], {'g1': 2}, ['e', 999], ['f', 'i', o.g], 'a')).toEqual({c: 2, f1: 3, g1: 2, e: 999, f: 7})
  });
  
  test('object - extractable', () => {
    const o = {a: {b: 1, c: 2, d: 3, e: 4, f: 5}, g: {h: 6, i: 7}}
    const binding = extractable.bind(o)
    expect(binding('c', ['f1', 'd'], {'g1': 2}, ['e', 999], ['f', 'i', {i: 0}], 'a')).toEqual({c: 2, f1: 3, g1: 2, e: 999, f: 0})
  });

  test('object - extractable', () => {
    const o = {a: {b: 1, c: 2, d: 3, e: 4, f: 5}, g: {h: 6, i: 7}}
    const binding = extractable.bind(o)
    expect(binding('c', ['f1', 'd'], {'g1': 2}, ['e', 999], ['f', 'i', void 0], 'a')).toEqual({c: 2, f1: 3, g1: 2, e: 999, f: ''})
  });
})


// assign
describe('object - assign cases', () => {
  test('object - assign', () => {
    expect(assign(void 0, void 0, void 0)).toEqual(undefined);
  });
  
  test('object - assign', () => {
    const obj = {a: {b: {c: 1}, d: 2}, e: 3}
    expect(assign(void 0, obj, void 0)).toEqual(obj);
  });
  
  test('object - assign', () => {
    const obj = {a: {b: {c: 1}, d: 2}, e: 3}
    assign('e', obj, void 0)
    expect(obj).toEqual({a: {b: {c: 1}, d: 2}, e: void 0});
  });
  
  test('object - assign', () => {
    const obj = {a: {b: {c: 1}, d: 2}, e: 3}
    assign('a.d', obj, 4)
    expect(obj).toEqual({a: {b: {c: 1}, d: 4}, e: 3});
  });
  
  test('object - assign', () => {
    const obj = {a: {b: {c: 1}, d: 2}, e: 3}
    assign('a.b.c', obj, 4)
    expect(obj).toEqual({a: {b: {c: 4}, d: 2}, e: 3});
  });
})


// objReverse
describe('object - objReverse cases', () => {
  test('object - objReverse', () => {
    expect(objReverse()).toEqual(undefined);
  });
  
  test('object - objReverse', () => {
    expect(objReverse(void 0)).toEqual(void 0);
  });
  
  test('object - objReverse', () => {
    expect(objReverse(null)).toEqual(null);
  });
  
  test('object - objReverse', () => {
    expect(objReverse({})).toEqual({});
  });
  
  test('object - objReverse', () => {
    expect(objReverse({a: 'sa', b: 'sb'})).toEqual({sa: 'a', sb: 'b'});
  });
  
  test('object - objReverse', () => {
    expect(objReverse({a: 1, b: 2})).toEqual({'1': 'a', '2': 'b'});
  });
  
})
