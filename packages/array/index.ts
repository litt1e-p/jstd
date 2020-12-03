import { typeis } from '../common/index'
import { Types } from '../enum/index'
import { NumberDict } from '../typing/index'

/**
 * To determine a var is an array or not empty array
 * @param array - var to determine
 * @param length - length equals true ? not empty array : array, default is true
 */
export const arrayable = function (array: any, length = true): boolean {
  return (typeis(array) === Types.array || typeis(array) === Types.uint8Array) && (length ? array.length > 0 : true)
}

/**
 * Retrieve unique elemens from an array
 * @param array var to determine
 * @param nested whether element in array is a nested object, default is false
 */
export const arrayUnique = function <T>(array: any, nested = false): Array<T> {
  if (!arrayable(array)) {
    return array
  }
  if (nested) {
    const jsr = (array as Array<T>).map(i => JSON.stringify(i))
    return Array.from(new Set(jsr)).map(i => JSON.parse(i) as T)
  }
  return Array.from(new Set(array))
}

/**
 * Retrieve elements exists count from an array
 * @param array var to determine
 */
export const arrValsCount = function <T>(array: any): NumberDict {
  const rs: NumberDict = {}
  if (!arrayable(array)) {
    return rs
  }
  return (array as Array<T>).reduce((r, i) => {
    const stri = i + ''
    r[stri] ? r[stri]++ : (r[stri] = 1)
    return r
  }, rs)
}

/**
 * Count the number of occurrences of an element in the array
 * @param array var to determine
 * @param key clue for the count of var
 */
export const arrValCount = function <T>(array: any, key: T): number {
  const c = 0
  if (!arrayable(array) || !array.includes(key)) {
    return c
  }
  const n = arrValsCount(array)
  const strKey = key + ''
  return n.hasOwnProperty(strKey) ? n[strKey] : c
}
