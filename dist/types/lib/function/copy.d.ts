/**
 * type of builtIn Array
 */
declare type TypeArrayBuiltIn = Float32Array | Float64Array | Int8Array | Int16Array | Int32Array | Uint8Array | Uint16Array | Uint32Array | Uint8ClampedArray | BigInt64Array | BigUint64Array;
/**
 * Create a copy of a variable deeply or not
 * @param obj param to copy or deep copy
 * @param deep deep or not, default value is true
 * @returns a copied or deep copied variable
 */
export declare const copy: (obj: any, deep?: boolean) => any;
/**
 * Creates a copy of `arrayBuffer`.
 *
 * @param {ArrayBuffer} arrayBuffer The array buffer to copy.
 * @returns {ArrayBuffer} Returns the copied array buffer.
 */
export declare function copyArrayBuffer(arrayBuffer: ArrayBuffer): ArrayBuffer;
/**
 * Creates a copy of `dataView`.
 *
 * @param {Object} dataView The data view to copy.
 * @returns {Object} Returns the copied data view.
 */
export declare function copyDataView(dataView: DataView): DataView;
/**
 * Creates a copy of `date`.
 *
 * @param {Date} typedDate The date to copy.
 * @returns {Object} Returns the copied date.
 */
export declare function copyDate(targetDate: Date): Date;
/**
 * Creates a copy of `regexp`.
 *
 * @param {Object} targetRegexp The regexp to copy.
 * @returns {Object} Returns the copied regexp.
 */
export declare function copyRegExp(targetRegexp: RegExp): RegExp;
/**
 * Creates a copy of `typedArray`.
 *
 * @param {Object} typedArray The typed array to copy.
 * @returns {Object} Returns the copied typed array.
 */
export declare function copyTypedArray(typedArray: TypeArrayBuiltIn): TypeArrayBuiltIn;
export {};
