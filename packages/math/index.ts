import { isNumberic } from '../regexp/index'

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
 * @param digits digits limitation which default is 2
 * @param places rounding places limitation which default is equal to digits
 */
export const numberic = function (val?: any, digits = 2, places?: number): number | undefined {
  if (!isNumberic(val, void 0, false)) {
    return
  }
  let t = +val
  const sign = Math.sign(t)
  t = Math.abs(t)
  const pad = isNumberic(digits, true) ? +(1 + Array(digits).fill(0).join('')) : 100
  const pr = Math.round((t + Number.EPSILON) * pad) / pad
  places = (isNumberic(places, true) ? places : digits) as number
  return sign * (places > 0 ? +pr.toFixed(places) : pr)
}
