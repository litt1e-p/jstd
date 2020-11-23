import { Dict, OptionalDict, OptionalPropertyItem, ExtractableArgs } from '../typing/index';
/**
 * To determine a var is an Object type which is type of `{}`
 * @param obj args var
 * @param length length equals true ? not empty Object : Object, default is true
 */
export declare const objectable: (obj: any, length?: boolean) => boolean;
/**
 * Retrieve value from optional chain in an Object
 * @param path The path where the string concatenated by the separator is used to find the value
 * @param obj target object
 * @param separator separator of path string, default is '.'
 */
export declare const optional: <T>(path: any, obj?: any, separator?: string) => T;
/**
 * Extract some key-values from an object with some properties or custom key-value objects
 * @param args args of properties for extraction
 */
export declare const extractable: (...args: Array<ExtractableArgs>) => Dict<any>;
/**
 * Assign a value to an object with key path
 * @param path key path, support string and Array<string>
 * @param obj target object
 * @param val value to assign
 * @param separator separator for key path, default is '.'
 */
export declare const assign: <T>(path: any, obj: Dict<T>, val?: any, separator?: string) => Dict<T>;
/**
 * Reverse an object's key and value
 * @param obj argv object
 */
export declare const objReverse: (obj?: OptionalDict<any> | null) => OptionalDict<any> | null;
