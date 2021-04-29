import { EmptyFunc } from '../typing/index'

interface ResolveFn extends EmptyFunc {
  (value: any): any
}

interface RejectFn extends EmptyFunc {
  (reason: any): any
}

type ExecutorArgs = ResolveFn | RejectFn
type RejectReason = Error | undefined

enum PromiseStatus {
  pending = 'pending',
  fulfilled = 'fulfilled',
  rejected = 'rejected'
}

interface Executor {
  (resolve: ExecutorArgs, reject: ExecutorArgs): any
}
/**
 * polyfill for Promise
 */
export class PromisePolyfill {
  status: PromiseStatus
  value: any
  reason: RejectReason
  onResolvedClosures: Array<ResolveFn>
  onRejectedClosures: Array<RejectFn>
  static resolve: (val: any) => PromisePolyfill
  static reject: (err: RejectReason) => PromisePolyfill
  static race: (promises: Array<PromisePolyfill>) => PromisePolyfill
  static all: (promises: Array<PromisePolyfill>) => PromisePolyfill
  static deferred: () => Deferred

  constructor(executor: Executor) {
    this.status = PromiseStatus.pending
    this.value = void 0
    this.reason = void 0
    this.onResolvedClosures = []
    this.onRejectedClosures = []
    const resolve = (value: any) => {
      if (this.status === PromiseStatus.pending) {
        this.status = PromiseStatus.fulfilled
        this.value = value
        this.onResolvedClosures.forEach(fn => fn())
      }
    }
    const reject = (reason: RejectReason) => {
      if (this.status === PromiseStatus.pending) {
        this.status = PromiseStatus.rejected
        this.reason = reason
        this.onRejectedClosures.forEach(fn => fn())
      }
    }
    // 如果executor执行报错，直接执行reject
    try {
      executor(resolve as ResolveFn, reject as RejectFn)
    } catch (e) {
      reject(e)
    }
  }

  then(onFulfilled?: ResolveFn, onRejected?: RejectFn): PromisePolyfill {
    // onFulfilled如果不是函数，就忽略onFulfilled，直接返回value
    onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : (((value: any) => value) as ResolveFn)
    // onRejected如果不是函数，就忽略onRejected，直接扔出错误
    onRejected =
      typeof onRejected === 'function'
        ? onRejected
        : (((err: RejectReason) => {
            throw err
          }) as any)
    // Promise狀態不可以再次改變，所以不能return原本的Promise
    const promise2 = new PromisePolyfill((resolve, reject) => {
      if (this.status === PromiseStatus.fulfilled) {
        // 异步
        micro(() => {
          try {
            const x = onFulfilled?.(this.value)
            resolvePromise(promise2, x, resolve, reject)
          } catch (e) {
            reject(e)
          }
        })
      }
      if (this.status === PromiseStatus.rejected) {
        // 异步
        micro(() => {
          try {
            const x = onRejected?.(this.reason)
            resolvePromise(promise2, x, resolve, reject)
          } catch (e) {
            reject(e)
          }
        })
      }
      if (this.status === PromiseStatus.pending) {
        this.onResolvedClosures.push(() => {
          // 异步
          micro(() => {
            try {
              const x = onFulfilled?.(this.value)
              resolvePromise(promise2, x, resolve, reject)
            } catch (e) {
              reject(e)
            }
          })
        })
        this.onRejectedClosures.push(() => {
          // 异步
          micro(() => {
            try {
              const x = onRejected?.(this.reason)
              resolvePromise(promise2, x, resolve, reject)
            } catch (e) {
              reject(e)
            }
          })
        })
      }
    })
    return promise2
  }
  catch(fn: RejectFn): PromisePolyfill {
    return this.then(void 0, fn)
  }
}

function micro(fn: ExecutorArgs) {
  if (typeof window !== 'undefined') {
    // eslint-disable-next-line no-undef
    return window.queueMicrotask(fn)
  } else {
    return process.nextTick(fn)
  }
}

function resolvePromise(promise2: PromisePolyfill, x: any, resolve: ResolveFn, reject: RejectFn): ExecutorArgs | undefined {
  // 循环引用报错
  if (x === promise2) {
    return reject(new TypeError('Chaining cycle detected for promise'))
  }
  // 防止多次调用
  let called = false
  if (x !== null && (typeof x === 'object' || typeof x === 'function')) {
    try {
      const then = x.then
      if (typeof then === 'function') {
        then.call(
          x,
          (y: any) => {
            if (called) {
              return
            }
            called = true
            resolvePromise(promise2, y, resolve, reject)
          },
          (err: RejectReason) => {
            if (called) {
              return
            }
            called = true
            reject(err)
          }
        )
      } else {
        resolve(x)
      }
    } catch (e) {
      if (called) {
        return
      }
      called = true
      reject(e)
    }
  } else {
    resolve(x)
  }
}

PromisePolyfill.resolve = function (val) {
  return new PromisePolyfill((resolve, reject) => resolve(val))
}

PromisePolyfill.reject = function (err: RejectReason) {
  return new PromisePolyfill((resolve, reject) => reject(err))
}

PromisePolyfill.race = function (promises: Array<PromisePolyfill>) {
  return new PromisePolyfill((resolve, reject) => {
    for (let i = 0; i < promises.length; i++) {
      promises[i].then(resolve, reject) // 谁先执行完就返回谁
    }
  })
}

PromisePolyfill.all = function (promises: Array<PromisePolyfill>): PromisePolyfill {
  const arr = Array<any>()
  let i = 0
  function processData(index: number, data: any, resolve: ResolveFn) {
    arr[index] = data
    i++
    if (i === promises.length) {
      resolve(arr)
    }
  }
  return new PromisePolyfill((resolve, reject) => {
    for (let i = 0; i < promises.length; i++) {
      promises[i].then(
        ((value: any) => {
          processData(i, value, resolve)
        }) as ResolveFn,
        reject
      )
    }
  })
}

/**
 * promises-aplus-tests adapter
 */
interface Deferred {
  promise?: PromisePolyfill
  resolve?: ResolveFn
  reject?: RejectFn
}

PromisePolyfill.deferred = function (): Deferred {
  const defer: Deferred = {}
  defer.promise = new PromisePolyfill((resolve, reject) => {
    defer.resolve = resolve
    defer.reject = reject
  })
  return defer
}
