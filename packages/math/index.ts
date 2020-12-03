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
import { isNumberic } from '../regexp/index'

/**
 * Retrieve a random number with range limit, default is Math.random()
 * @param min argv for minimum of range
 * @param max argv for maximum of range
 */
export const rangeRandom = function (min?: any, max?: any): number {
  if (!isNumberic(min) || !isNumberic(max) || min > max) {
    return Math.random()
  }
  return Math.random() * (max - min) + min
}

/**
 * Formatting or rounding a value with digits limitation and rounding places limitation
 * @param val argv
 * @param digits digits limitation which default is 2
 * @param places rounding places limitation which default is equal to digits
 */
export const numberic = function (val?: any, digits = 2, places?: number): number | undefined {
  if (!isNumberic(val, void 0, false)) {
    return
  }
  let t = +val
  const sign = Math.sign(t)
  t = Math.abs(t)
  const pad = isNumberic(digits, true) ? +(1 + Array(digits).fill(0).join('')) : 100
  const pr = Math.round((t + Number.EPSILON) * pad) / pad
  places = (isNumberic(places, true) ? places : digits) as number
  return sign * (places > 0 ? +pr.toFixed(places) : pr)
}
