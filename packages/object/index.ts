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
import {
  Dict,
  OptionalDict,
  OptionalPropertyDict,
  OptionalPropertyArray,
  OptionalPropertyObj,
  OptionalPropertyItem,
  ExtractableArgs
} from '../typing/index'
import { stringable } from '../string/index'
import { arrayable } from '../array/index'
import { isNumberic, isNil } from '../regexp/index'

/**
 * To determine a var is an Object type which is type of `{}`
 * @param obj args var
 * @param length length equals true ? not empty Object : Object, default is true
 */
export const objectable = function (obj: any, length = true): boolean {
  if (typeis(obj) !== Types.object) {
    return false
  }
  const proto = Object.getPrototypeOf(obj)
  // Object.create(null)
  if (!proto) {
    return length ? Object.keys(obj).length > 0 : true
  }
  // Object.create({}) or Object.create({ a: 1 })
  if (proto.constructor === Object) {
    return length ? Object.keys(obj).length > 0 : true
  }
  // false or '[Function: SomeType]'
  const ctor = Object.prototype.hasOwnProperty.call(proto, 'constructor') && proto.constructor
  return (
    typeof ctor === 'function' &&
    Object.prototype.hasOwnProperty.toString.call(ctor) === Object.prototype.hasOwnProperty.toString.call(Object) &&
    (length ? Object.keys(obj).length > 0 : true)
  )
}

/**
 * Retrieve value from optional chain in an Object
 * @param path The path where the string concatenated by the separator is used to find the value
 * @param obj target object
 * @param separator separator of path string, default is '.'
 */
export const optional = function <T>(path: any, obj?: any, separator = '.'): OptionalPropertyItem<T> {
  console.warn('optional is deprecated!')
  return obj
}

/**
 * Extract some key-values from an object with some properties or custom key-value objects
 * @param args args of properties for extraction
 */
export const extractable = function (...args: Array<ExtractableArgs>): Dict<any> {
  console.warn('extractable is deprecated!')
  const rs = Object.prototype.constructor()
  return rs
}

/**
 * Assign a value to an object with key path
 * @param path key path, support string and Array<string>
 * @param obj target object
 * @param val value to assign
 * @param separator separator for key path, default is '.'
 */
export const assign = function <T>(path: any, obj: OptionalPropertyObj<T>, val?: any, separator = '.'): void {
  if (typeis(obj) !== Types.object && typeis(obj) !== Types.array) {
    return void 0
  }
  if (!stringable(path) && !arrayable(path)) {
    return void 0
  }
  if (stringable(path)) {
    path = path.split(separator)
  }
  if (path.length > 1) {
    assign(path, (obj as OptionalPropertyObj<any>)[path.shift()], val)
  } else {
    // eslint-disable-next-line prettier/prettier
    (obj as OptionalPropertyObj<any>)[path[0]] = val
  }
}

/**
 * Reverse an object's key and value
 * @param obj argv object
 */
export const objReverse = function (obj?: OptionalDict<any> | null): OptionalDict<any> | null {
  if (!objectable(obj)) {
    return obj
  }
  const t = obj as Dict<any>
  const s = Object.keys(t).reduce<Dict<any>>((r, k) => {
    const tk = String(t[k])
    let tv: Array<any> = []
    if (arrayable(r[tk], false)) {
      tv = r[tk] as unknown as Array<any>
    }
    return Object.assign(r, { [tk]: tv.concat(k) })
  }, {})
  for (const k in s) {
    if (s.hasOwnProperty(k)) {
      s[k] = Array.isArray(s[k]) && (s[k] as unknown as Array<any>).length === 1 ? s[k][0] : s[k]
    }
  }
  return s
}


/**
 * compare two objects is equal by string-like
 * @param obj1 target object1
 * @param obj2 target object2
 * @returns Boolean
 */
export const isEqualObj = function (obj1?: OptionalDict<any> | null, obj2?: OptionalDict<any> | null) {
  if (!obj1 || !obj2) return false
  let rs
  try {
    rs = JSON.stringify(obj1) === JSON.stringify(obj2)
  } catch (e) {
    rs = false
  }
  return rs
}
