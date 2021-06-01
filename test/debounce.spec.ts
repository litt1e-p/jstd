import { debounce } from '../'

jest.useFakeTimers()
describe('function - debounce cases', () => {
  test('function - debounce - base cases', () => {
    // @ts-ignore
    expect(() => debounce(1, 2)).toThrow('Expected a function')
    expect(() => debounce(() => void 0, -2)).toThrow('Expected a numberic time')
    expect(() => debounce(() => void 0, '-2')).toThrow('Expected a numberic time')
  })

  let func: jest.Mock
  let debouncedOnceFunc: Function
  let debouncedTwiceFunc: Function

  beforeEach(() => {
      func = jest.fn()
      debouncedOnceFunc = debounce(func, 1000)
      debouncedTwiceFunc = debounce(func, 1000, true)
  });

  test('function - debounce - execute just once', () => {
      for (let i = 0; i < 100; i++) {
          debouncedOnceFunc()
      }
      // Fast-forward time
      jest.runAllTimers()
      expect(func).toBeCalledTimes(1)
  })

  test('function - debounce - execute twice', () => {
    for (let i = 0; i < 100; i++) {
      debouncedTwiceFunc()
    }
    // Fast-forward time
    jest.runAllTimers()
    expect(func).toBeCalledTimes(2)
  })

  test('function - debounce - arguments', () => {
    const fn = (a: number, b: number) => a + b
    const rs = fn(1, 2)
    const debounceFn = debounce(fn, 800, true)
    const debounceRs = debounceFn(1, 2)
    expect(rs).toEqual(debounceRs)
  })

})