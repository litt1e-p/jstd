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
import { Dict } from '../typing/index'
import { stringable } from '../string/index'
import { typeis } from '../common/index'
import { Types } from '../enum/index'

const formatNumber = (n: any) => {
  n = n.toString()
  return n[1] ? n : '0' + n
}

/**
 * Date format
 * @param date argv of type Date/String
 * @param format [Y, yyyy, M, MM, d, dd, h, hh, m, mm, s, ss] and [-/\s] separator supports, default is 'yyyy-MM-dd hh:mm:ss'
 */
export const formatDate = function (date?: Date | string, format = 'yyyy-MM-dd hh:mm:ss'): string {
  let rs = String.prototype.constructor()
  if (typeis(date) !== Types.date && !stringable(date)) return rs
  if (typeis(date) === Types.string) {
    date = new Date(date as string)
  }
  if (date!.toString() === 'Invalid Date') {
    return rs
  }
  const dt = date as Date
  const pg: Dict<number> = {
    Y: dt.getFullYear(),
    M: dt.getMonth() + 1,
    D: dt.getDate(),
    h: dt.getHours(),
    m: dt.getMinutes(),
    s: dt.getSeconds()
  }
  for (let i = 0, l = Object.keys(pg).length >>> 0; i < l; i++) {
    if (pg.hasOwnProperty(pg[i]) && isNaN(pg[pg[i]])) {
      return rs
    }
  }
  const rules: Dict<string> = {
    Y: pg.Y.toString(),
    yyyy: pg.Y.toString(),
    M: pg.M.toString(),
    MM: formatNumber(pg.M),
    d: pg.D.toString(),
    dd: formatNumber(pg.D),
    h: pg.h.toString(),
    hh: formatNumber(pg.h),
    m: pg.m.toString(),
    mm: formatNumber(pg.m),
    s: pg.s.toString(),
    ss: formatNumber(pg.s)
  }
  const arr = format.split(/-| |:|\//)
  rs = format
  for (let i = 0; i < arr.length; i++) {
    const el = arr[i]
    rs = rs.replace(el, rules[el])
  }
  return rs
}

/**
 * Retrieve a date with specify timezone
 * @param year argv year, default is 0
 * @param month argv month, default is 0
 * @param day argv day, default is 0
 * @param hour argv hour, default is 0
 * @param minute argv minute, default is 0
 * @param second argv second, default is 0
 * @param timezone argv timezone like 'America/New_York'
 */
export const timezoneDate = function (year = 0, month = 0, day = 0, hour = 0, minute = 0, second = 0, timezone?: string): Date | undefined {
  if (![year, month, day, hour, minute, second].every(i => typeis(i) === Types.number && i >= 0)) {
    return undefined
  }
  const date = new Date(Date.UTC(year, month - 1, day, hour, minute, second))
  const utcDate = new Date(date.toLocaleString('en-US', { timeZone: 'UTC' }))
  let tzDate: Date = date
  if (stringable(timezone)) {
    tzDate = new Date(date.toLocaleString('en-US', { timeZone: timezone }))
  } else {
    tzDate = new Date(`${month}/${day}/${year} ${hour}:${minute}:${second}`)
    if (tzDate.toString() === 'Invalid Date') {
      return undefined
    }
  }
  const offset = utcDate.getTime() - tzDate.getTime()
  date.setTime(date.getTime() + offset)
  return date
}
