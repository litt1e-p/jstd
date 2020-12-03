import { Types as T, TypesDesc as Ts } from '../enum/index'

/**
 * Determine the type of a value
 * @param v argv
 */
export const typeis = function (v: any): T[keyof T] {
  const s = Object.prototype.toString.call(v)
  let d: string = T.unknown
  if (Object.keys(Ts).includes(s)) {
    d = T[Ts[s as keyof typeof Ts]]
  }
  return d
}

/**
 * Regexp test function
 * @param regxp argv of regexp pattern
 * @param val argv to test
 */
export const re = function (regxp: RegExp, val: any): boolean {
  return regxp.test(val.toString())
}
