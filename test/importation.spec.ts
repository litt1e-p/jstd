import { arrayable } from '../';
import Jstd from '../'
import Lib from '../'
const jstd = require('../')

describe('importation', () => {
  test('importation case', () => {
    expect(Jstd.arrayable('')).toEqual(arrayable(''))
    expect(Lib.arrayable([1])).toEqual(arrayable([1]))
    expect(Jstd.arrayable([1])).toEqual(Lib.arrayable([1]))
    expect(jstd.arrayable([1])).toEqual(Jstd.arrayable([1]))
  });
})
