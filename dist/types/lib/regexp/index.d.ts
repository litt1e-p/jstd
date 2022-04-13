/**
 * Determine whether a value is null/undefined/empty string
 * @param val argv
 */
export declare const isNil: (val?: any) => boolean;
/**
 * Determine whether a value is equal to null
 * @param val argv
 */
export declare const isNull: (val?: any) => boolean;
/**
 * Determine whether a value is equal to undefined
 * @param val argv
 */
export declare const isUndefined: (val?: any) => boolean;
/**
 * Determine whether a value is numberic which support pure number-like and pure instance of Number
 * @param val argv to determine
 * @param signed true: positive val only, false: negative val only. default is ignore positive/negative
 * @param arabic if arabic number limitation, default is true
 */
export declare const isNumberic: (val: any, signed?: boolean, arabic?: boolean) => boolean | number;
