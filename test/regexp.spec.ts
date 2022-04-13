import { isNumberic, isNull, isUndefined, isNil } from '../'

// test('regexp - isNumberic', () => {
  // expect(isNumberic(void 0)).toBe(false)
  // expect(isNumberic(undefined)).toBe(false)
  // expect(isNumberic(null)).toBe(false)
  // expect(isNumberic('')).toBe(false)
  // expect(isNumberic('01')).toBe(false)
  // expect(isNumberic('01.')).toBe(false)
  // expect(isNumberic('1.')).toBe(false)
  // expect(isNumberic('.5f')).toBe(false)
  // expect(isNumberic('abc')).toBe(false)
  // expect(isNumberic('0')).toBe(true)
  // expect(isNumberic('.5')).toBe(false)
  // expect(isNumberic('0.5')).toBe(true)
  // expect(isNumberic(0.00)).toBe(true)
  // expect(isNumberic(0.1)).toEqual(true)
  // expect(isNumberic(0)).toBe(true)
  // expect(isNumberic(10)).toBe(true)
  // expect(isNumberic(-10, true)).toBeFalsy()
  // expect(isNumberic(-10, false)).toBeTruthy()
  // expect(isNumberic(Number.MAX_VALUE, false, false)).toBe(true)
  // expect(isNumberic(Number.EPSILON, false, false)).toBe(true)
  // expect(isNumberic(Math.PI, false, false)).toBe(true)
// });

describe('regex testing - isNumberic', () => {
  test('regexp - isNumberic - undefined', () => {
    expect(isNumberic(undefined)).toBe(false)
  });

  test('regexp - isNumberic - null', () => {
    expect(isNumberic(null)).toBe(false)
  });

  test('regexp - isNumberic - empty string', () => {
    expect(isNumberic('')).toBe(false)
  });

  test('regexp - isNumberic - 01', () => {
    expect(isNumberic('01')).toBe(false)
  });

  test('regexp - isNumberic - 01.', () => {
    expect(isNumberic('01.')).toBe(false)
  });

  test('regexp - isNumberic - 1.', () => {
    expect(isNumberic('1.')).toBe(false)
  });

  test('regexp - isNumberic - .5f', () => {
    expect(isNumberic('.5f')).toBe(false)
  });

  test('regexp - isNumberic - abc', () => {
    expect(isNumberic('abc')).toBe(false)
  });

  test('regexp - isNumberic1 - "0"', () => {
    expect(isNumberic('0')).toBe(true)
  });

  test('regexp - isNumberic - .5', () => {
    expect(isNumberic('.5')).toBe(false)
  });

  test('regexp - isNumberic - 0.', () => {
    expect(isNumberic('0.')).toBe(false)
  });

  test('regexp - isNumberic - 0.5', () => {
    expect(isNumberic('0.5')).toBe(true)
  });

  test('regexp - isNumberic - 10.5', () => {
    expect(isNumberic('10.5')).toBe(true)
  });
  
  test('regexp - isNumberic - -0.57', () => {
    expect(isNumberic('-0.57')).toBe(true)
  });

  test('regexp - isNumberic - -0.57', () => {
    expect(isNumberic(-0.57)).toBe(true)
  });

  test('regexp - isNumberic - -0.15', () => {
    expect(isNumberic('-0.15')).toBe(true)
  });

  test('regexp - isNumberic - -10.5', () => {
    expect(isNumberic('-10.5')).toBe(true)
  });

  test('regexp - isNumberic - 10.512345', () => {
    expect(isNumberic('10.512345')).toBe(true)
  });

  test('regexp - isNumberic - 0.1041', () => {
    expect(isNumberic('0.1041')).toBe(true)
  });

  test('regexp - isNumberic - -010.5', () => {
    expect(isNumberic('-010.5')).toBe(false)
  });

  test('regexp - isNumberic - 0', () => {
    expect(isNumberic(0)).toBe(true)
  });

  test('regexp - isNumberic - 10', () => {
    expect(isNumberic(10)).toBe(true)
  });

  test('regexp - isNumberic - signed -10', () => {
    expect(isNumberic(-10, true)).toBeFalsy()
  })
  
  test('regexp - isNumberic - signed -11', () => {
    expect(isNumberic(-11, false)).toBeTruthy()
  })

  test('regexp - isNumberic - signed MAX_VALUE', () => {
    expect(isNumberic(Number.MAX_VALUE, false, false)).toBe(true)
  })
  
  test('regexp - isNumberic - signed EPSILON', () => {
    expect(isNumberic(Number.EPSILON, false, false)).toBe(true)
  })

  test('regexp - isNumberic - signed PI', () => {
    expect(isNumberic(Math.PI, false, false)).toBe(true)
  })
})

describe('regex testing - isNull', () => {

  test('regexp - isNull - empty', () => {
    expect(isNull()).toBe(false)
  });

  test('regexp - isNull - undefined', () => {
    expect(isNull(undefined)).toBe(false)
  });

  test('regexp - isNull - undefined', () => {
    expect(isNull(void 0)).toBe(false)
  });

  test('regexp - isNull - null', () => {
    expect(isNull(null)).toBe(true)
  });

})

describe('regex testing - isUndefined', () => {

  test('regexp - isUndefined - empty', () => {
    expect(isUndefined()).toBe(true)
  });

  test('regexp - isUndefined - null', () => {
    expect(isUndefined(null)).toBe(false)
  });

  test('regexp - isUndefined - void 0', () => {
    expect(isUndefined(void 0)).toBe(true)
  });

  test('regexp - isUndefined - null', () => {
    expect(isUndefined(undefined)).toBe(true)
  });

})

describe('regex testing - isNil', () => {

  test('regexp - isNil - empty', () => {
    expect(isNil()).toBe(true)
  });

  test('regexp - isNil - null', () => {
    expect(isNil(null)).toBe(true)
  });

  test('regexp - isNil - void 0', () => {
    expect(isNil(void 0)).toBe(true)
  });

  test('regexp - isNil - null', () => {
    expect(isNil(undefined)).toBe(true)
  });

  test('regexp - isNil - text', () => {
    expect(isNil('text')).toBe(false)
  });

  test('regexp - isNil - number', () => {
    expect(isNil(123)).toBe(false)
  });

  test('regexp - isNil - boolean', () => {
    expect(isNil(false)).toBe(false)
  });

  test('regexp - isNil - object', () => {
    expect(isNil({})).toBe(false)
  });

  test('regexp - isNil - array', () => {
    expect(isNil([])).toBe(false)
  });

  test('regexp - isNil - map', () => {
    expect(isNil(new Map())).toBe(false)
  });

  test('regexp - isNil - set', () => {
    expect(isNil(new Set())).toBe(false)
  });

})
