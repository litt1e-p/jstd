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
import { typeis } from '../common/index'
import { Types } from '../enum/index'

/**
 * To determine a var is string or not empty string
 * @param str var to determine
 * @param length length equals true ? not empty string : string, default is true
 */
export const stringable = function (str: any, length = true): boolean {
  return typeis(str) === Types.string && (length ? str.length > 0 : true)
}

/**
 * To count the number of characters in a string
 * @param str var string
 */
export const strLen = function (str: any): number {
  let c = 0
  if (!stringable(str)) {
    return c
  }
  for (let i = 0, len = str.length; i < len; i++) {
    c += str.charCodeAt(i) < 256 ? 1 : 3
  }
  return c
}
