/**
 * To determine a var is string or not empty string
 * @param str var to determine
 * @param length length equals true ? not empty string : string, default is true
 */
export declare const stringable: (str: any, length?: boolean) => boolean;
/**
 * To count the number of characters in a string
 * @param str var string
 */
export declare const strLen: (str: any) => number;
/**
 * number to alphabet eg. 0 -> A/a, 1 -> B/b ...
 * @param {*} n: number
 * @param {*} upperCase boolean
 * @returns string
 */
export declare const number2Alphabet: (num: number, upperCase?: boolean) => string;
/**
 * alphabet to number eg. A/a -> 0, B/b -> 1 ...
 * @param {*} a string
 * @param {*} upperCase boolean
 * @returns number
 */
export declare const alphabet2Number: (a: string, upperCase?: boolean) => number;
/**
 * serialize an object to encoded string
 * @param {*} obj target object
 * @returns string
 */
export declare const serialize: (obj: any) => any;
/**
 * unserialize a string to object
 * @param {*} str encoded string
 * @returns object
 */
export declare const unserialize: (str: string) => any;
