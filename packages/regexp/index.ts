import { kRegSignNumberic, kRegUnSignNumberic, kRegNumberic, kRegStartStrictNumberic, kRegEndStrictNumberic, kEmptySpacer } from '../macro/index'
import { typeis, re } from '../common/index'
import { Types } from '../enum/index'

/**
 * Determine whether a value is null/undefined/empty string
 * @param val argv
 */
export const isNil = function (val?: any): boolean {
  return isNull(val) || isUndefined(val) || (typeis(val) === Types.string && re(kEmptySpacer, val))
}

/**
 * Determine whether a value is equal to null
 * @param val argv
 */
export const isNull = function (val?: any): boolean {
  return typeis(val) === Types.null
}

/**
 * Determine whether a value is equal to undefined
 * @param val argv
 */
export const isUndefined = function (val?: any): boolean {
  return typeis(val) === Types.undefined
}

/**
 * Determine whether a value is numberic which support pure number-like and pure instance of Number
 * @param val argv to determine
 * @param signed symbol mark for positive/negative
 * @param arabic if arabic number limitation, default is true
 */
export const isNumberic = function (val: any, signed?: boolean, arabic = true): boolean | number {
  if (isNil(val)) {
    return false
  }
  if (!re(kRegStartStrictNumberic, val) || re(kRegEndStrictNumberic, val)) {
    return false
  }
  const t = +val
  if (isNaN(t)) {
    return false
  }
  if (!arabic) {
    return typeis(t) === Types.number
  }
  if (typeis(signed) === Types.bool) {
    return signed ? re(kRegSignNumberic, t) : re(kRegUnSignNumberic, t)
  }
  return re(kRegNumberic, t)
}
