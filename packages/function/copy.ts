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
import { objectable } from '../object/index'
import { arrayable } from '../array/index'
import { isNull } from '../regexp/index'

/**
 * type of builtIn Array
 */
type TypeArrayBuiltIn =
  | Float32Array
  | Float64Array
  | Int8Array
  | Int16Array
  | Int32Array
  | Uint8Array
  | Uint16Array
  | Uint32Array
  | Uint8ClampedArray
  | BigInt64Array
  | BigUint64Array

/**
 * type of `contrustor` builtIn Array
 */
type TypeArrayCtorBuiltIn =
  | Float32ArrayConstructor
  | Float64ArrayConstructor
  | Int8ArrayConstructor
  | Int16ArrayConstructor
  | Int32ArrayConstructor
  | Uint8ArrayConstructor
  | Uint16ArrayConstructor
  | Uint32ArrayConstructor
  | Uint8ClampedArrayConstructor
  | BigInt64ArrayConstructor
  | BigUint64ArrayConstructor

/**
 * map of some Array description
 */
const TypedArrayMap: Record<string, TypeArrayCtorBuiltIn> = {
  '[object Float32Array]': Float32Array,
  '[object Float64Array]': Float64Array,
  '[object Int8Array]': Int8Array,
  '[object Int16Array]': Int16Array,
  '[object Int32Array]': Int32Array,
  '[object Uint8Array]': Uint8Array,
  '[object Uint16Array]': Uint16Array,
  '[object Uint32Array]': Uint32Array,
  '[object Uint8ClampedArray]': Uint8ClampedArray
}

type CopyFn = (arg: any) => any

/**
 * copy function map
 */
//  const TypedCopyMap: Record<string, Function> = {
const TypedCopyMap: Record<string, CopyFn> = {
  [Types.date]: copyDate,
  [Types.arrayBuffer]: copyArrayBuffer,
  [Types.dataView]: copyDataView,
  [Types.float32Array]: copyTypedArray,
  [Types.float64Array]: copyTypedArray,
  [Types.int8Array]: copyTypedArray,
  [Types.int16Array]: copyTypedArray,
  [Types.int32Array]: copyTypedArray,
  [Types.uint8Array]: copyTypedArray,
  [Types.uint8ClampedArray]: copyTypedArray,
  [Types.uint16Array]: copyTypedArray,
  [Types.uint32Array]: copyTypedArray,
  [Types.bigInt64Array]: copyTypedArray,
  [Types.bigUint64Array]: copyTypedArray,
  [Types.regExp]: copyRegExp
}

/**
 * Creates a copy of a variable deeply or not
 * @param obj param to copy or deep copy
 * @param deep deep or not, default value is true
 * @returns a copied or deep copied variable
 */
export const copy = function (obj: any, deep = true): any {
  const target = obj
  if (isNull(target)) {
    return target
  }
  if (TypedCopyMap[typeis(target) as string]) {
    return TypedCopyMap[typeis(target) as string](obj)
  }
  if (arrayable(obj, false)) {
    const cy: Array<any> = Array.prototype.constructor()
    obj.map((i: any) => cy.push(i))
    return deep ? cy.map((i: any) => copy(i)) : cy
  }
  if (objectable(obj, false)) {
    const cy = { ...(obj as { [key: string]: any }) } as {
      [key: string]: any
    }
    if (!deep) {
      return cy
    }
    Object.keys(cy).map(i => (cy[i] = copy(cy[i])))
    return cy
  }
  return obj
}

/**
 * Creates a copy of `arrayBuffer`.
 *
 * @param {ArrayBuffer} arrayBuffer The array buffer to copy.
 * @returns {ArrayBuffer} Returns the copied array buffer.
 */
export function copyArrayBuffer(arrayBuffer: ArrayBuffer): ArrayBuffer {
  const result = new ArrayBuffer(arrayBuffer.byteLength)
  new Uint8Array(result).set(new Uint8Array(arrayBuffer))
  return result
}

/**
 * Creates a copy of `dataView`.
 *
 * @param {Object} dataView The data view to copy.
 * @returns {Object} Returns the copied data view.
 */
export function copyDataView(dataView: DataView): DataView {
  const buffer = copyArrayBuffer(dataView.buffer)
  return new DataView(buffer, dataView.byteOffset, dataView.byteLength)
}

/**
 * Creates a copy of `date`.
 *
 * @param {Date} typedDate The date to copy.
 * @returns {Object} Returns the copied date.
 */
export function copyDate(targetDate: Date): Date {
  return new Date(targetDate.getTime())
}

/**
 * Creates a copy of `regexp`.
 *
 * @param {Object} targetRegexp The regexp to copy.
 * @returns {Object} Returns the copied regexp.
 */
export function copyRegExp(targetRegexp: RegExp): RegExp {
  const result = new RegExp(targetRegexp.source, targetRegexp.flags)
  result.lastIndex = targetRegexp.lastIndex
  return result
}

/**
 * Creates a copy of `typedArray`.
 *
 * @param {Object} typedArray The typed array to copy.
 * @returns {Object} Returns the copied typed array.
 */
export function copyTypedArray(typedArray: TypeArrayBuiltIn): TypeArrayBuiltIn {
  try {
    TypedArrayMap['[object BigInt64Array]'] = BigInt64Array
    TypedArrayMap['[object BigUint64Array]'] = BigUint64Array
  } catch (e) {}
  const buffer = copyArrayBuffer(typedArray.buffer)
  return new TypedArrayMap[Object.prototype.toString.call(typedArray)](buffer, typedArray.byteOffset, typedArray.length)
}
