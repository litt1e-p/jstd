export enum DecimalMathCalcType {
  round = 'round',
  ceil = 'ceil',
  floor = 'floor',
  trunc = 'trunc'
}

export default class Decimal {
  powers: Array<number>

  constructor() {
    // if (Number.EPSILON === undefined) {
    //   Number.EPSILON = Math.pow(2, -52)
    // }
    if (Math.trunc === undefined) {
      Math.trunc = function (v) {
        return v < 0 ? Math.ceil(v) : Math.floor(v)
      }
    }
    // eslint-disable-next-line prettier/prettier
    this.powers = [1e0, 1e1, 1e2, 1e3, 1e4, 1e5, 1e6, 1e7, 1e8, 1e9, 1e10, 1e11, 1e12, 1e13, 1e14, 1e15, 1e16, 1e17, 1e18, 1e19, 1e20, 1e21, 1e22]
  }

  private intpow10(power: number): number {
    if (power < 0 || power > 22) {
      return Math.pow(10, power)
    }
    return this.powers[power]
  }

  private isRound(num: number, decimalPlaces: number): boolean {
    //return decimalPlaces >= 0 &&
    //    +num.toFixed(decimalPlaces) === num;
    const p = this.intpow10(decimalPlaces)
    return Math.round(num * p) / p === num
  }

  private decimalAdjust(type: DecimalMathCalcType, num: number, decimalPlaces: number): number {
    if (type !== 'round' && this.isRound(num, decimalPlaces || 0)) return num
    const p = this.intpow10(decimalPlaces || 0)
    const n = num * p * (1 + Number.EPSILON)
    return Math[type](n) / p
  }

  // Decimal round (half away from zero)
  round(num: number, decimalPlaces: number) {
    return this.decimalAdjust(DecimalMathCalcType.round, num, decimalPlaces)
  }

  // Decimal ceil
  ceil(num: number, decimalPlaces: number) {
    return this.decimalAdjust(DecimalMathCalcType.ceil, num, decimalPlaces)
  }

  // Decimal floor
  floor(num: number, decimalPlaces: number) {
    return this.decimalAdjust(DecimalMathCalcType.floor, num, decimalPlaces)
  }

  // Decimal trunc
  trunc(num: number, decimalPlaces: number) {
    return this.decimalAdjust(DecimalMathCalcType.trunc, num, decimalPlaces)
  }

  // Format using fixed-point notation
  toFixed(num: number, decimalPlaces: number) {
    return this.decimalAdjust(DecimalMathCalcType.round, num, decimalPlaces).toFixed(decimalPlaces)
  }
}
