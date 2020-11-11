import { settable } from '../'

describe('Set', () => {
  test('Set - settable', () => {
    expect(settable()).toBeFalsy()
    expect(settable(void 0)).toBeFalsy()
    expect(settable(null)).toBeFalsy()
    expect(settable(false)).toBeFalsy()
    expect(settable(1)).toBeFalsy()
    expect(settable('abc')).toBeFalsy()
    expect(settable(new Set())).toBeFalsy()
    expect(settable(new Set(), false)).toBeTruthy()
    const m = new Set()
    m.add('a')
    expect(settable(m, false)).toBeTruthy()
    expect(settable(m)).toBeTruthy()
  })
})
