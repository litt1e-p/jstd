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
import { Dict } from '../typing/index'
import { objectable } from '../object/index'

/**
 * enum of type's descriptions
 */
export enum TypesDesc {
  '[object Number]' = /*           */ 'number',
  '[object String]' = /*           */ 'string',
  '[object Boolean]' = /*          */ 'bool',
  '[object Undefined]' = /*        */ 'undefined',
  '[object Null]' = /*             */ 'null',
  '[object Array]' = /*            */ 'array',
  '[object Uint8Array]' = /*       */ 'uint8Array',
  '[object Object]' = /*           */ 'object',
  '[object Function]' = /*         */ 'function',
  '[object AsyncFunction]' = /*    */ 'asyncFunction',
  '[object BigInt]' = /*           */ 'bigInt',
  '[object Date]' = /*             */ 'date',
  '[object WeakMap]' = /*          */ 'weakMap',
  '[object Map]' = /*              */ 'map',
  '[object WeakSet]' = /*          */ 'weakSet',
  '[object ArrayBuffer]' = /*      */ 'arrayBuffer',
  '[object Set]' = /*              */ 'set',
  '[object Symbol]' = /*           */ 'symbol',
  '[object DataView]' = /*         */ 'dataView',
  '[object Float32Array]' = /*     */ 'float32Array',
  '[object Float64Array]' = /*     */ 'float64Array',
  '[object Int8Array]' = /*        */ 'int8Array',
  '[object Int16Array]' = /*       */ 'int16Array',
  '[object Int32Array]' = /*       */ 'int32Array',
  '[object Uint8ClampedArray]' = /**/ 'uint8ClampedArray',
  '[object Uint16Array]' = /*      */ 'uint16Array',
  '[object Uint32Array]' = /*      */ 'uint32Array',
  '[object BigInt64Array]' = /*    */ 'bigInt64Array',
  '[object BigUint64Array]' = /*   */ 'bigUint64Array',
  '[object RegExp]' = /*           */ 'regExp'
}

/**
 * enum of Types
 */
export enum Types {
  /** basic */
  number = /*           */ 'number',
  string = /*           */ 'string',
  bool = /*             */ 'bool',
  undefined = /*        */ 'undefined',
  null = /*             */ 'null',
  bigInt = /*           */ 'bigInt',
  /** complex  */
  object = /*           */ 'object',
  function = /*         */ 'function',
  asyncFunction = /*    */ 'asyncFunction',
  symbol = /*           */ 'symbol',
  arrayBuffer = /*      */ 'arrayBuffer',
  /** functional */
  regExp = /*           */ 'regExp',
  date = /*             */ 'date',
  dataView = /*         */ 'dataView',
  /** map */
  weakMap = /*          */ 'weakMap',
  map = /*              */ 'map',
  /** set */
  weakSet = /*          */ 'weakSet',
  set = /*              */ 'set',
  /** array */
  array = /*            */ 'array',
  uint8Array = /*       */ 'uint8Array',
  float32Array = /*     */ 'float32Array',
  float64Array = /*     */ 'float64Array',
  int8Array = /*        */ 'int8Array',
  int16Array = /*       */ 'int16Array',
  int32Array = /*       */ 'int32Array',
  uint8ClampedArray = /**/ 'uint8ClampedArray',
  uint16Array = /*      */ 'uint16Array',
  uint32Array = /*      */ 'uint32Array',
  bigInt64Array = /*    */ 'bigInt64Array',
  bigUint64Array = /*   */ 'bigUint64Array',
  /** unknown */
  unknown = /*          */ ''
}
/**
 * To determine whether a key in an Enum
 * @param enums argv Enum
 * @param i argv key
 */
export const inEnum = function <T>(enums?: Dict<T>, i?: string | T): boolean {
  if (objectable(enums) && enums === Object(enums)) {
    return Object.prototype.hasOwnProperty.call(enums, i as string) || Object.values(enums as Dict<T>).indexOf(i as T) > -1
  }
  return false
}
