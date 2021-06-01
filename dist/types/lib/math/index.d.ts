/**
 * Retrieve a random number with range limit, default is Math.random()
 * @param min argv for minimum of range
 * @param max argv for maximum of range
 */
export declare const rangeRandom: (min?: any, max?: any) => number;
/**
 * Formatting or rounding a value with digits limitation and rounding places limitation
 * @param val argv
 * @param digits digits limitation which default is 2
 * @param places rounding places limitation which default is equal to digits
 */
export declare const numberic: (val?: any, digits?: number, places?: number) => number | undefined;
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
