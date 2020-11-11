/**
 * Retrieve a random number with range limit
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
