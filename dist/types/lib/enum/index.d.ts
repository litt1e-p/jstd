import { Dict } from '../typing/index';
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
    '[object AsyncFunction]' = "asyncFunction",
    '[object BigInt]' = "bigInt",
    '[object Date]' = "date",
    '[object WeakMap]' = "weakMap",
    '[object Map]' = "map",
    '[object WeakSet]' = "weakSet",
    '[object ArrayBuffer]' = "arrayBuffer",
    '[object Set]' = "set",
    '[object Symbol]' = "symbol",
    '[object DataView]' = "dataView",
    '[object Float32Array]' = "float32Array",
    '[object Float64Array]' = "float64Array",
    '[object Int8Array]' = "int8Array",
    '[object Int16Array]' = "int16Array",
    '[object Int32Array]' = "int32Array",
    '[object Uint8ClampedArray]' = "uint8ClampedArray",
    '[object Uint16Array]' = "uint16Array",
    '[object Uint32Array]' = "uint32Array",
    '[object BigInt64Array]' = "bigInt64Array",
    '[object BigUint64Array]' = "bigUint64Array",
    '[object RegExp]' = "regExp"
}
/**
 * enum of Types
 */
export declare enum Types {
    /** basic */
    number = "number",
    string = "string",
    bool = "bool",
    undefined = "undefined",
    null = "null",
    bigInt = "bigInt",
    /** complex  */
    object = "object",
    function = "function",
    asyncFunction = "asyncFunction",
    symbol = "symbol",
    arrayBuffer = "arrayBuffer",
    /** functional */
    regExp = "regExp",
    date = "date",
    dataView = "dataView",
    /** map */
    weakMap = "weakMap",
    map = "map",
    /** set */
    weakSet = "weakSet",
    set = "set",
    /** array */
    array = "array",
    uint8Array = "uint8Array",
    float32Array = "float32Array",
    float64Array = "float64Array",
    int8Array = "int8Array",
    int16Array = "int16Array",
    int32Array = "int32Array",
    uint8ClampedArray = "uint8ClampedArray",
    uint16Array = "uint16Array",
    uint32Array = "uint32Array",
    bigInt64Array = "bigInt64Array",
    bigUint64Array = "bigUint64Array",
    /** unknown */
    unknown = ""
}
/**
 * To determine whether a key in an Enum
 * @param enums argv Enum
 * @param i argv key
 */
export declare const inEnum: <T>(enums?: Dict<T>, i?: string | T) => boolean;
