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
import { isNumberic } from '../regexp/index'
import Decimal from './decimal'

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
 * @param places rounding places limitation which default is 2
 * @returns number | undefined
 */
export const numberic = function (val?: any, places = 2): number | undefined {
  if (!isNumberic(val, void 0, false)) {
    return
  }
  const t = +val
  const sign = Math.sign(t)
  places = (isNumberic(places, true) ? places : 2) as number
  // const pad = isNumberic(digits, true) ? +(1 + Array(digits).fill(0).join('')) : 100
  // const pr = Math.round((t + Number.EPSILON) * pad) / pad
  // return places > 0 ? +(sign * pr).toFixed(places) : pr * sign
  return new Decimal().round(Math.abs(t), places) * sign
}

/**
 * Generate a guid string randomly
 * @param length length of guid, default: 8
 * @param salt salt of guid, default: 'abcdefghijklmnopqrstuvwxyz0123456789'
 * @returns random string with length and salt limitation
 */
export const guid = function (length = 8, salt = 'abcdefghijklmnopqrstuvwxyz0123456789'): string {
  let salts = salt.split('')
  if (!salts.length) {
    salts = 'abcdefghijklmnopqrstuvwxyz0123456789'.split('')
  }
  return [...Array(length)].map(_ => salts[(Math.random() * salts.length) | 0]).join('')
}

/**
 * Generate a hash string randomly
 * @returns random hash string
 */
export const hash = function (): string {
  return ((Math.random() * 0xffffff) << 7).toString(16)
}

/**
 * Formatting or rounding a value with digits limitation and rounding places limitation
 * @param val argv
 * @param digits digits limitation which default is 2
 * @param places rounding places limitation which default is equal to digits
 * @returns string | undefined
 */
export const numberFormat = function (val?: any, digits = 2, places?: number): string | undefined {
  const v = numberic(val, digits)
  if (void 0 === v) return void 0
  places = (isNumberic(places, true) ? places : digits) as number
  return places > 0 ? v.toFixed(places) : val
}

/**
 * Formatting a numberic like value into a string such as '1,000,000'
 * @param val argv
 * @param digits digits limitation which default is 2
 * @param places rounding places limitation which default is equal to digits
 * @param defaultVal string which default is ''
 * @returns string
 */
export const moneyFormat = function (val?: any, digits = 2, places?: number, defaultVal = ''): string {
  if (isNumberic(val)) {
    places = (isNumberic(places, true) ? places : digits) as number
    return numberic(val, digits)?.toLocaleString(undefined, { minimumFractionDigits: places, maximumFractionDigits: places }) ?? defaultVal
  } else {
    return defaultVal
  }
}

/**
 * Formatting with a positive/negative sign for a numberic value to a string such as '+1' or '-1', '0'
 * @param val argv
 * @param defaultVal string which default is ''
 * @returns string
 */
export const signFormat = function (val?: any, defaultVal = ''): string {
  if (isNumberic(val)) {
    return `${val > 0 ? '+' : val < 0 ? '-' : ''}${Math.abs(val)}`
  } else {
    return defaultVal
  }
}
