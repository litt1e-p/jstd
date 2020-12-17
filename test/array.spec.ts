import { arrayable, arrayUnique, arrValsCount, arrValCount, flat } from '../';

describe('Array', () => {
  test('array - arrayable', () => {
    expect(arrayable(void 0)).toBe(false);
  });

  test('array - arrayable', () => {
    expect(arrayable([])).toBe(false);
  });

  test('array - arrayable', () => {
    expect(arrayable([], false)).toBe(true);
  });

  test('array - arrayUnique', () => {
    expect(arrayUnique(void 0)).toEqual(void 0);
  });

  test('array - arrayUnique', () => {
    expect(arrayUnique([])).toEqual([]);
  });

  test('array - arrayUnique', () => {
    expect(arrayUnique([1, 2, 2, 1, 3, 5, 3])).toEqual([1, 2, 3, 5]);
  });

  test('array - arrayUnique nested', () => {
    expect(arrayUnique([{a: 1}, {b: 1}, {b: 1}, {b: 2}, {c: 1}], true)).toEqual([{a: 1}, {b: 1}, {b: 2}, {c: 1}]);
  });

  test('array - arrValsCount', () => {
    expect(arrValsCount(void 0)).toEqual({})
  })

  test('array - arrValsCount', () => {
    expect(arrValsCount([])).toEqual({})
  })

  test('array - arrValsCount', () => {
    expect(arrValsCount([1, 2, 3, 2, 1, 2])).toEqual({'1': 2, '2': 3, '3': 1})
  })

  test('array - arrValCount', () => {
    expect(arrValCount(void 0, void 0)).toBe(0)
  })


  test('array - arrValCount', () => {
    expect(arrValCount([1, 2, 3, 2, 1, 2], 1)).toBe(2)
    expect(arrValCount([1, 2, 3, 2, 1, 2], 2)).toBe(3)
    expect(arrValCount([1, 2, 3, 2, 1, 2], 3)).toBe(1)
  })

  test('array - arrValCount', () => {
    expect(arrValCount([1, 2, 3, 2, 1, 2], 4)).toBe(0)
  })

  test('array - arrValCount', () => {
    expect(arrValCount([], 4)).toBe(0)
  })

  test('array - arrValCount', () => {
    expect(arrValCount([], void 0)).toBe(0)
  })

  test('array - flat', () => {
    expect(flat([])).toEqual([])
  })

  test('array - flat - 1', () => {
    expect(flat([1])).toEqual([1])
  })

  test('array - flat - undefined', () => {
    expect(flat([undefined, 1])).toEqual([undefined, 1])
  })

  test('array - flat - 2 - 0', () => {
    expect(flat([1, [2]], 0)).toEqual([1, [2]])
  })
  
  test('array - flat - 2 - 1', () => {
    expect(flat([1, [2]], 1)).toEqual([1, 2])
  })
  test('array - flat - 3 - 1', () => {
    expect(flat([1, [2, [3]]], 1)).toEqual([1, 2, [3]])
  })

  test('array - flat - 4 - 1', () => {
    expect(flat([1, [2, [3, [{i: 4}]]]], 1)).toEqual([1, 2, [3, [{i: 4}]]])
  })

  test('array - flat - 3 - infinity', () => {
    expect(flat([1, [2, [3]]])).toEqual([1, 2, 3])
  })

  test('array - flat - 4 - infinity', () => {
    expect(flat([1, [2, [3, [{i: 4}]]]], Infinity)).toEqual([1, 2, 3, {i: 4}])
  })

})