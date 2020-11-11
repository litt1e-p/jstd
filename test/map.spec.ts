import { mappable } from '../'

describe('Map', () => {
  test('Map - mappable', () => {
    expect(mappable()).toBeFalsy()
    expect(mappable(void 0)).toBeFalsy()
    expect(mappable(null)).toBeFalsy()
    expect(mappable(false)).toBeFalsy()
    expect(mappable(1)).toBeFalsy()
    expect(mappable('abc')).toBeFalsy()
    expect(mappable(new Map())).toBeFalsy()
    expect(mappable(new Map(), false)).toBeTruthy()
    const m = new Map()
    m.set('a', 1)
    expect(mappable(m, false)).toBeTruthy()
    expect(mappable(m)).toBeTruthy()
  })
})
