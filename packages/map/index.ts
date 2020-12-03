import { typeis } from '../common/index'
import { Types } from '../enum/index'

/**
 * To determine a var is an map or not empty map
 * @param map var to determine
 * @param length length equals true ? not empty map : map, default is true
 */
export const mappable = function (map?: any, length = true): boolean {
  return typeis(map) === Types.map && (length ? map.size > 0 : true)
}
