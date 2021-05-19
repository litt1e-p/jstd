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
  let rs: OptionalPropertyObj<T> = void 0
  if (!stringable(path) || !stringable(separator)) {
    return rs as OptionalPropertyItem<T>
  }
  let properties: Array<string>
  const p = path as string
  if (p.indexOf(separator) === -1) {
    properties = Array.of(p)
  } else {
    properties = p.split(separator)
  }
  let o: OptionalPropertyObj<T>
  // if (typeis(obj) !== Types.object && typeis(obj) !== Types.array) {
  if (isNil(obj)) {
    try {
      // eslint-disable-next-line no-eval
      o = isNumberic(properties[0]) ? eval(`this[${properties[0]}]`) : eval('this.' + properties[0])
    } catch (e) {
      o = Object.prototype.constructor() as Dict<T>
    }
    properties.shift()
    if (typeis(o) === Types.object) {
      o = o as OptionalPropertyDict<T>
    } else if (typeis(o) === Types.array) {
      o = o as OptionalPropertyArray<T>
    } else {
      return rs as OptionalPropertyItem<T>
    }
  } else {
    o = obj
  }
  rs = properties.reduce<OptionalPropertyObj<T>>((prev, curr) => {
    if (objectable(prev)) {
      return (prev as Dict<T>)[curr] as OptionalPropertyObj<T>
    } else if (arrayable(prev)) {
      return isNumberic(curr) ? ((prev as Array<T>)[+curr] as OptionalPropertyObj<T>) : ((prev as Dict<T>)[curr] as OptionalPropertyObj<T>)
    } else {
      return prev ? ((prev as Dict<T>)[curr] as OptionalPropertyObj<T>) : undefined
    }
    // @TODO mappable settable support
  }, o)
  return rs as OptionalPropertyItem<T>
}

/**
 * Extract some key-values from an object with some properties or custom key-value objects
 * @param args args of properties for extraction
 */
export const extractable = function (...args: Array<ExtractableArgs>): Dict<any> {
  let rs = Object.prototype.constructor()
  if (!arrayable(args) || args.length < 2) {
    return rs
  }
  let t = Array.prototype.slice.call(args, -1)[0]
  if (typeis(t) === Types.string) {
    try {
      // eslint-disable-next-line no-eval
      t = eval('this.' + t)
    } catch (e) {
      t = void 0
    }
  }
  if (!objectable(t)) {
    return rs
  }
  const o = Array.prototype.slice.apply(args, [0, -1])
  for (const i of o) {
    if (typeis(i) === Types.string) {
      rs[i] = optional(i, t) || String.prototype.constructor()
    } else if (typeis(i) === Types.array) {
      if (i.length === 2) {
        rs[i[0]] = (typeis(i[1]) === Types.string ? optional(i[1], t) : i[1]) || String.prototype.constructor()
      } else if (i.length === 3) {
        rs[i[0]] = !objectable(i[2]) && !arrayable(i[2]) ? String.prototype.constructor() : optional(i[1], i[2])
      }
    } else if (typeis(i) === Types.object) {
      rs = Object.assign(rs, i)
    }
  }
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
