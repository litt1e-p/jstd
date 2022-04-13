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
import { kRegSignNumberic, kRegUnSignNumberic, kRegNumberic, kRegStartStrictNumberic, kRegEndStrictNumberic, kEmptySpacer } from '../macro/index'
import { typeis, re } from '../common/index'
import { Types } from '../enum/index'

/**
 * Determine whether a value is null/undefined/empty string
 * @param val argv
 */
export const isNil = function (val?: any): boolean {
  return isNull(val) || isUndefined(val) || (typeis(val) === Types.string && re(kEmptySpacer, val))
}

/**
 * Determine whether a value is equal to null
 * @param val argv
 */
export const isNull = function (val?: any): boolean {
  return typeis(val) === Types.null
}

/**
 * Determine whether a value is equal to undefined
 * @param val argv
 */
export const isUndefined = function (val?: any): boolean {
  return typeis(val) === Types.undefined
}

/**
 * Determine whether a value is numberic which support pure number-like and pure instance of Number
 * @param val argv to determine
 * @param signed symbol mark for positive/negative
 * @param arabic if arabic number limitation, default is true
 */
export const isNumberic = function (val: any, signed?: boolean, arabic = true): boolean | number {
  if (isNil(val)) {
    return false
  }
  if (!re(kRegStartStrictNumberic, val) || re(kRegEndStrictNumberic, val)) {
    return false
  }
  const t = +val
  if (isNaN(t)) {
    return false
  }
  if (!arabic) {
    return typeis(t) === Types.number
  }
  if (typeis(signed) === Types.bool) {
    return signed ? re(kRegSignNumberic, t) : re(kRegUnSignNumberic, t)
  }
  return re(kRegNumberic, t)
}
