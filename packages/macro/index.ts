// export const kRegSignNumberic = /^\d+(\.|\.\d+)?$/g
// export const kRegUnSignNumberic = /^\-\d+(\.|\.\d+)?$/g
// export const kRegNumberic = /^\-?\d+(\.|\.\d+)?$/g
// export const kRegStartNumberic = /^['"]?([1-9]|0?\.\d|0\.\d|0['"]?$|0\.['"]?$)/g

export const kRegSignNumberic = new RegExp('^\\d+(\\.|\\.\\d+)?$', 'i')
export const kRegUnSignNumberic = new RegExp('^\\-\\d+(\\.|\\.\\d+)?$', 'i')
export const kRegNumberic = new RegExp('^\\-?\\d+(\\.|\\.\\d+)?$', 'i')
export const kRegStartNumberic = new RegExp('^(\\-?[1-9]|\\-?[1-9]\\.$|0?\\.\\d|0\\.\\d|0$|0\\.$)', 'i')
export const kRegStartStrictNumberic = new RegExp('^(\\-?[1-9]|0\\.\\d+|0$)', 'i')
export const kRegEndStrictNumberic = new RegExp('\\.$', 'i')
export const kEmptySpacer = new RegExp('(^$|^\\s+$)', 'i')
