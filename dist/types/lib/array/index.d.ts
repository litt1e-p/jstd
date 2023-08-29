import { NumberDict, OptionalPropertyArray } from '../typing/index';
/**
 * To determine a var is an array or not empty array
 * @param array - var to determine
 * @param length - length equals true ? not empty array : array, default is true
 */
export declare const arrayable: (array: any, length?: boolean) => boolean;
/**
 * Retrieve unique elemens from an array
 * @param array var to determine
 * @param nested whether element in array is a nested object, default is false
 */
export declare const arrayUnique: <T>(array: any, nested?: boolean) => T[];
/**
 * Retrieve elements exists count from an array
 * @param array var to determine
 */
export declare const arrValsCount: <T>(array: any) => NumberDict;
/**
 * Count the number of occurrences of an element in the array
 * @param array var to determine
 * @param key clue for the count of var
 */
export declare const arrValCount: <T>(array: any, key: T) => number;
/**
 * Flatten an array recursively up to the specified depth.
 * @param array
 * @param depth depth of recurrence default is Infinity
 */
export declare const flat: <T>(array: any, depth?: number) => OptionalPropertyArray<T>;
