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
const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/='
interface InvalidCharacterErrorInterface extends Error {
  name: string
  message: string
}
export class InvalidCharacterError implements InvalidCharacterErrorInterface {
  name: string
  message: string
  constructor(message: string) {
    this.message = message
    this.name = 'InvalidCharacterError'
  }
}

// function InvalidCharacterError(message: string) {
//   this.message = message
// }
// InvalidCharacterError.prototype = new Error()
// InvalidCharacterError.prototype.name = 'InvalidCharacterError'

// encoder
// [https://gist.github.com/999166] by [https://github.com/nignag]
let _btoa: (data: string) => string
// eslint-disable-next-line no-undef
if (typeof window !== 'undefined' && window.btoa) {
  // eslint-disable-next-line no-undef
  _btoa = window.btoa
} else {
  _btoa = function (input?: any): string | never {
    const str = String(input)
    let output = ''
    for (
      let block = 0, charCode = 0, idx = 0, map = chars;
      // initialize result and counter
      // if the next str index does not exist:
      //   change the mapping table to "="
      //   check if d has no fractional digits
      str.charAt(idx | 0) || ((map = '='), idx % 1);
      // "8 - idx % 1 * 8" generates the sequence 2, 4, 6, 8
      output += map.charAt(63 & (block >> (8 - (idx % 1) * 8)))
    ) {
      charCode = str.charCodeAt((idx += 3 / 4))
      if (charCode > 0xff) {
        throw new InvalidCharacterError("'btoa' failed: The string to be encoded contains characters outside of the Latin1 range.")
      }
      block = (block << 8) | charCode
    }
    return output
  }
}

// decoder
// [https://gist.github.com/1020396] by [https://github.com/atk]
let _atob: (data: string) => string
// eslint-disable-next-line no-undef
if (typeof window !== 'undefined' && window.atob) {
  // eslint-disable-next-line no-undef
  _atob = window.atob
} else {
  _atob = function (input?: any): string | never {
    const str = String(input).replace(/[=]+$/, '') // #31: ExtendScript bad parse of /=
    if (str.length % 4 === 1) {
      throw new InvalidCharacterError("'atob' failed: The string to be decoded is not correctly encoded.")
    }
    let output = ''
    for (
      // initialize result and counters
      let bc = 0, bs = 0, buffer, idx = 0;
      // get next character
      (buffer = str.charAt(idx++)); // eslint-disable-line no-cond-assign
      // character found in table? initialize bit storage and add its ascii value;
      ~buffer &&
      ((bs = bc % 4 ? bs * 64 + buffer : buffer),
      // and if not first of each 4 characters,
      // convert the first 8 bits to one ascii character
      bc++ % 4)
        ? (output += String.fromCharCode(255 & (bs >> ((-2 * bc) & 6))))
        : 0
    ) {
      // try to find character in table (0-63, not found => -1)
      buffer = chars.indexOf(buffer)
    }
    return output
  }
}

export { _btoa, _atob }
