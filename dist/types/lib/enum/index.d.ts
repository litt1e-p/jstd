import { Dict } from '../typing/index';
/**
 * enum of Types
 */
export declare enum Types {
    number = "number",
    string = "string",
    bool = "bool",
    undefined = "undefined",
    null = "null",
    array = "array",
    uint8Array = "uint8Array",
    object = "object",
    function = "function",
    bigInt = "bigInt",
    date = "date",
    weakMap = "weakMap",
    map = "map",
    weakSet = "weakSet",
    set = "set",
    symbol = "symbol",
    arrayBuffer = "arrayBuffer",
    unknown = ""
}
/**
 * enum of type's descriptions
 */
export declare enum TypesDesc {
    '[object Number]' = "number",
    '[object String]' = "string",
    '[object Boolean]' = "bool",
    '[object Undefined]' = "undefined",
    '[object Null]' = "null",
    '[object Array]' = "array",
    '[object Uint8Array]' = "uint8Array",
    '[object Object]' = "object",
    '[object Function]' = "function",
    '[object BigInt]' = "bigInt",
    '[object Date]' = "date",
    '[object WeakMap]' = "weakMap",
    '[object Map]' = "map",
    '[object WeakSet]' = "weakSet",
    '[object ArrayBuffer]' = "arrayBuffer",
    '[object Set]' = "set",
    '[object Symbol]' = "symbol"
}
/**
 * To determine whether a key in an Enum
 * @param enums argv Enum
 * @param i argv key
 */
export declare const inEnum: <T>(enums?: Dict<T>, i?: string | T) => boolean;
