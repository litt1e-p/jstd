/*
 * Created on 2020-11-2 14:59:05
 * Created by litt1e-p
 *
 * The MIT License (MIT)
 * Copyright (c) 2022 litt1e-p
 * Permission is hereby granted, free of charge, to any person obtaining a copy of this software
 * and associated documentation files (the "Software"), to deal in the Software without restriction,
 * including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense,
 * and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so,
 * subject to the following conditions:
 * The above copyright notice and this permission notice shall be included in all copies or substantial
 * portions of the Software.
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED
 * TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL
 * THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
 * TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */
import { typeis } from '../common/index'
import { Types } from '../enum/index'
import { isNumberic } from '../regexp/index'
import { Func, FrequencyFn } from './interface'

/**
 * debounce frequency for function execution
 * @param fn argv for debounce target function
 * @param time argv for debounce time(millisecond)
 */
export const debounce = function <F extends Func>(fn: F, time: number | string, immediate = false): Func | never {
  if (typeis(fn) !== Types.function && typeis(fn) !== Types.asyncFunction) {
    throw new TypeError('Expected a function')
  }
  if (!isNumberic(time, true)) {
    throw new TypeError('Expected a numberic time')
  }
  let timer: null | ReturnType<typeof setTimeout>
  let result: any
  const invokeFn: FrequencyFn<F> = function (this: ThisParameterType<F>, ...args: Parameters<F>) {
    const ctx = this
    // const args: IArguments = arguments
    timer && clearTimeout(timer)
    if (immediate) {
      const callNow = !timer
      timer = setTimeout(() => {
        timer = null
      }, +time)
      if (callNow) result = fn.apply(ctx, args)
    }
    timer = setTimeout(function () {
      fn.apply(ctx, args)
    }, +time)
    return result
  }
  invokeFn.cancel = function () {
    timer && clearTimeout(timer)
    timer = null
  }
  return invokeFn
}
