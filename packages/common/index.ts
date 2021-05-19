/*
 * Created on 2020-11-2 14:59:05
 * Created by litt1e-p
 *
 * The MIT License (MIT)
 * Copyright (c) 2020 litt1e-p
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
import { Types as T, TypesDesc as Ts } from '../enum/index'

/**
 * Determine the type of a value
 * @param v argv
 */
export const typeis = function (v: any): T[keyof T] {
  const s = Object.prototype.toString.call(v)
  if ('[object Object]' === s) {
    const proto = Object.getPrototypeOf(v)
    if (proto && proto.constructor !== Object) {
      return T.unknown
    }
  }
  let d: string = T.unknown
  if (Object.keys(Ts).includes(s)) {
    d = T[Ts[s as keyof typeof Ts]]
  }
  return d
}

/**
 * Regexp test function
 * @param regxp argv of regexp pattern
 * @param val argv to test
 */
export const re = function (regxp: RegExp, val: any): boolean {
  return regxp.test(val.toString())
}
