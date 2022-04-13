import { Dict } from '../typing/index';
/**
 * Convert a string url to blob
 * @param url
 */
export declare const url2Blob: (url: string) => Blob | never;
/**
 * convert a string to buffer<Uint8Array>
 * @param str argv string
 */
export declare const str2Buffer: (str: string) => Uint8Array | undefined;
/**
 * convert a buffer<Uint8Array> to a string
 * @param buff argv buffer<Uint8Array>
 */
export declare const buffer2Str: (buff: Uint8Array | Dict<number> | string) => string | undefined;
