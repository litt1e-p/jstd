import { throttle } from '../'

jest.useFakeTimers()
describe('function - throttle cases', () => {
  test('function - throttle - base cases', () => {
    // @ts-ignore
    expect(() => throttle(1, 2)).toThrow('Expected a function')
    expect(() => throttle(() => void 0, -2)).toThrow('Expected a numberic time')
    expect(() => throttle(() => void 0, '-2')).toThrow('Expected a numberic time')
    expect(() => throttle(() => void 0, 0, { leading: false, trailing: false })).toThrow('Expected one of leading and trailing to be assigned to false')
  })

  let func: jest.Mock
  let throttleLeadingTrailingFunc: Function
  let throttleLeadingFunc: Function
  let throttleTrailingFunc: Function

  beforeEach(() => {
      func = jest.fn()
      throttleLeadingTrailingFunc = throttle(func, 1000)
      throttleLeadingFunc = throttle(func, 1000, { leading: false })
      throttleTrailingFunc = throttle(func, 1000, { trailing: false })
  });

  test('function - throttle - execute just once', () => {
      for (let i = 0; i < 100; i++) {
          throttleLeadingTrailingFunc()
      }
      // Fast-forward time
      jest.runAllTimers()
      expect(func).toBeCalledTimes(2)
  })

  test('function - throttle - execute only trailing', () => {
    for (let i = 0; i < 100; i++) {
      throttleLeadingFunc()
    }
    // Fast-forward time
    jest.runAllTimers()
    expect(func).toBeCalledTimes(1)
  })

  test('function - throttle - execute only leading', () => {
    for (let i = 0; i < 100; i++) {
      throttleTrailingFunc()
    }
    // Fast-forward time
    jest.runAllTimers()
    expect(func).toBeCalledTimes(1)
  })
})