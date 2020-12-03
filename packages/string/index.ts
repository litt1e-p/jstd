import { typeis } from '../common/index'
import { Types } from '../enum/index'

/**
 * To determine a var is string or not empty string
 * @param str var to determine
 * @param length length equals true ? not empty string : string, default is true
 */
export const stringable = function (str: any, length = true): boolean {
  return typeis(str) === Types.string && (length ? str.length > 0 : true)
}

/**
 * To count the number of characters in a string
 * @param str var string
 */
export const strLen = function (str: any): number {
  let c = 0
  if (!stringable(str)) {
    return c
  }
  for (let i = 0, len = str.length; i < len; i++) {
    c += str.charCodeAt(i) < 256 ? 1 : 3
  }
  return c
}
