import { typeis } from '../common/index'
import { Types } from '../enum/index'

/**
 * To determine a var is an set or not empty set
 * @param set var to determine
 * @param length length equals true ? not empty set : set, default is true
 */
export const settable = function (set?: any, length = true): boolean {
  return typeis(set) === Types.set && (length ? set.size > 0 : true)
}
