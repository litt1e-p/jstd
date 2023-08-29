import { Types as T } from '../enum/index';
/**
 * Determine the type of a value
 * @param v argv
 */
export declare const typeis: (v: any) => T[keyof T];
/**
 * Regexp test function
 * @param regxp argv of regexp pattern
 * @param val argv to test
 */
export declare const re: (regxp: RegExp, val: any) => boolean;
