import { isNumberic } from '../regexp/index'

/**
 * Sort function for sorting array of numberic or not numberic values
 * @param a argv
 * @param b argv
 * @param ignoreCase ignore case or not, default is true
 * @param locale locale for sort which default is 'zh-Hans-CN'
 * @returns number
 */
export const sort = function (a: any, b: any, ignoreCase = false, locale = 'zh-Hans-CN') {
  let ta = a ?? ''
  let tb = b ?? ''
  const noZh = /[a-zA-Z0-9]/
  if (isNumberic(a) && isNumberic(b)) {
    return Number(a) > Number(b) ? 1 : Number(a) < Number(b) ? -1 : 0
  } else if (noZh.test(ta) || noZh.test(tb)) {
    if (!ignoreCase) {
      ta = String(ta).toUpperCase()
      tb = String(tb).toUpperCase()
    }
    return ta > tb ? 1 : ta < tb ? -1 : 0
  }
  return ta === tb ? 0 : ta.localeCompare(tb, locale)
}
