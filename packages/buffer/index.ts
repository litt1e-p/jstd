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
import { _atob as atob, _btoa as btoa } from './base64'
import { stringable } from '../string/index'
import { arrayable } from '../array/index'
import { Dict } from '../typing/index'
import { objectable } from '../object/index'
import { typeis } from '../common/index'
import { Types } from '../enum/index'

/**
 * Convert a string url to blob
 * @param url
 */
// eslint-disable-next-line no-undef
export const url2Blob = function (url: string): Blob | never {
  if (typeof window === 'undefined') {
    throw new Error('url2Blob only works in browser environment')
  }
  if (!stringable(url)) {
    throw new TypeError(url + ' can not be null')
  }
  const arr = url.split(',')
  if (!arrayable(arr)) {
    throw new ReferenceError('invalid data url')
  }
  const ma = arr[0].match(/:(.*?);/)
  if (!arrayable(ma) || ma!.length < 2) {
    throw new ReferenceError('invalid data format')
  }
  const my = ma as Array<string>
  const bStr = atob(arr[1])
  let n = bStr.length
  const unit8Array = new Uint8Array(n)
  while (n--) {
    unit8Array[n] = bStr.charCodeAt(n)
  }
  // eslint-disable-next-line no-undef
  return new Blob([unit8Array], { type: my[1] })
}

/**
 * convert a string to buffer<Uint8Array>
 * @param str argv string
 */
export const str2Buffer = function (str: string): Uint8Array | undefined {
  if (!stringable(str)) {
    return void 0
  }
  str = btoa(unescape(encodeURIComponent(str)))
  return new Uint8Array(Array.prototype.map.call(str, x => x.charCodeAt(0)) as Array<number>)
}

/**
 * convert a buffer<Uint8Array> to a string
 * @param buff argv buffer<Uint8Array>
 */
export const buffer2Str = function (buff: Uint8Array | Dict<number> | string): string | undefined {
  if (!arrayable(buff) && !objectable(buff) && !stringable(buff)) {
    return void 0
  }
  if (typeis(buff) === Types.string) {
    buff = JSON.parse.call(null, buff as string)
  }
  const bv = Object.values(buff)
  if (!arrayable(bv)) {
    return void 0
  }
  return decodeURIComponent(escape(atob(String.fromCharCode.apply(null, Array.prototype.map.call(new Uint8Array(bv), i => i) as Array<number>))))
}
