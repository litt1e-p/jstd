/*
 * Created on 2020-11-2 14:59:05
 * Created by litt1e-p
 *
 * The MIT License (MIT)
 * Copyright (c) 2020 litt1e-p
	Permission is hereby granted, free of charge, to any person obtaining a copy of this software
	and associated documentation files (the "Software"), to deal in the Software without restriction,
	including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense,
	and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so,
	subject to the following conditions:
	The above copyright notice and this permission notice shall be included in all copies or substantial
	portions of the Software.
	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED
	TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL
	THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
	TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */
import { Dict } from '../typing/index'
import { objectable } from '../object/index'
/**
 * enum of Types
 */
export enum Types {
  number = /*      */ 'number',
  string = /*      */ 'string',
  bool = /*        */ 'bool',
  undefined = /*   */ 'undefined',
  null = /*        */ 'null',
  array = /*       */ 'array',
  uint8Array = /*  */ 'uint8Array',
  object = /*      */ 'object',
  function = /*    */ 'function',
  bigInt = /*      */ 'bigInt',
  date = /*        */ 'date',
  weakMap = /*     */ 'weakMap',
  map = /*         */ 'map',
  weakSet = /*     */ 'weakSet',
  set = /*         */ 'set',
  symbol = /*      */ 'symbol',
  arrayBuffer = /* */ 'arrayBuffer',
  unknown = /*     */ ''
}

/**
 * enum of type's descriptions
 */
export enum TypesDesc {
  '[object Number]' = /*      */ 'number',
  '[object String]' = /*      */ 'string',
  '[object Boolean]' = /*     */ 'bool',
  '[object Undefined]' = /*   */ 'undefined',
  '[object Null]' = /*        */ 'null',
  '[object Array]' = /*       */ 'array',
  '[object Uint8Array]' = /*  */ 'uint8Array',
  '[object Object]' = /*      */ 'object',
  '[object Function]' = /*    */ 'function',
  '[object BigInt]' = /*      */ 'bigInt',
  '[object Date]' = /*        */ 'date',
  '[object WeakMap]' = /*     */ 'weakMap',
  '[object Map]' = /*         */ 'map',
  '[object WeakSet]' = /*     */ 'weakSet',
  '[object ArrayBuffer]' = /* */ 'arrayBuffer',
  '[object Set]' = /*         */ 'set',
  '[object Symbol]' = /*      */ 'symbol'
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
