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
import { NumberDict, OptionalPropertyArray } from '../typing/index'

/**
 * To determine a var is an array or not empty array
 * @param array - var to determine
 * @param length - length equals true ? not empty array : array, default is true
 */
export const arrayable = function (array: any, length = true): boolean {
  return (typeis(array) === Types.array || typeis(array) === Types.uint8Array) && (length ? array.length > 0 : true)
}

/**
 * Retrieve unique elemens from an array
 * @param array var to determine
 * @param nested whether element in array is a nested object, default is false
 */
export const arrayUnique = function <T>(array: any, nested = false): Array<T> {
  if (!arrayable(array)) {
    return array
  }
  if (nested) {
    const jsr = (array as Array<T>).map(i => JSON.stringify(i))
    return Array.from(new Set(jsr)).map(i => JSON.parse(i) as T)
  }
  return Array.from(new Set(array))
}

/**
 * Retrieve elements exists count from an array
 * @param array var to determine
 */
export const arrValsCount = function <T>(array: any): NumberDict {
  const rs: NumberDict = {}
  if (!arrayable(array)) {
    return rs
  }
  return (array as Array<T>).reduce((r, i) => {
    const stri = i + ''
    r[stri] ? r[stri]++ : (r[stri] = 1)
    return r
  }, rs)
}

/**
 * Count the number of occurrences of an element in the array
 * @param array var to determine
 * @param key clue for the count of var
 */
export const arrValCount = function <T>(array: any, key: T): number {
  const c = 0
  if (!arrayable(array) || !array.includes(key)) {
    return c
  }
  const n = arrValsCount(array)
  const strKey = key + ''
  return n.hasOwnProperty(strKey) ? n[strKey] : c
}

/**
 * flatten an array recursively up to the specified depth.
 * @param array
 * @param depth depth of recurrence default is Infinity
 */
export const flat = function <T>(array: any, depth = Infinity): OptionalPropertyArray<T> {
  let rs = Array.prototype.constructor()
  if (!arrayable(array, false)) {
    return array
  }
  const dp = isNaN(depth) ? 1 : Number(depth)
  if (!dp) {
    return Array.prototype.slice.call(array)
  }
  for (let i = 0, l = array.length >>> 0; i < l; i++) {
    rs = rs.concat(flat(array[i], dp - 1))
  }
  return rs
}
