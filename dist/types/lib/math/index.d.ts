/**
 * Retrieve a random number with range limit, default is Math.random()
 * @param min argv for minimum of range
 * @param max argv for maximum of range
 */
export declare const rangeRandom: (min?: any, max?: any) => number;
/**
 * Formatting or rounding a value with digits limitation and rounding places limitation
 * @param val argv
 * @param places rounding places limitation which default is 2
 * @returns number | undefined
 */
export declare const numberic: (val?: any, places?: number) => number | undefined;
/**
 * Generate a guid string randomly
 * @param length length of guid, default: 8
 * @param salt salt of guid, default: 'abcdefghijklmnopqrstuvwxyz0123456789'
 * @returns random string with length and salt limitation
 */
export declare const guid: (length?: number, salt?: string) => string;
/**
 * Generate a hash string randomly
 * @returns random hash string
 */
export declare const hash: () => string;
/**
 * Formatting or rounding a value with digits limitation and rounding places limitation
 * @param val argv
 * @param digits digits limitation which default is 2
 * @param places rounding places limitation which default is equal to digits
 * @returns string | undefined
 */
export declare const numberFormat: (val?: any, digits?: number, places?: number) => string | undefined;
/**
 * Formatting a numberic like value into a string such as '1,000,000'
 * @param val argv
 * @param digits digits limitation which default is 2
 * @param places rounding places limitation which default is equal to digits
 * @param defaultVal string which default is ''
 * @returns string
 */
export declare const moneyFormat: (val?: any, digits?: number, places?: number, defaultVal?: string) => string;
/**
 * Formatting with a positive/negative sign for a numberic value to a string such as '+1' or '-1', '0'
 * @param val argv
 * @param defaultVal string which default is ''
 * @returns string
 */
export declare const signFormat: (val?: any, defaultVal?: string) => string;
