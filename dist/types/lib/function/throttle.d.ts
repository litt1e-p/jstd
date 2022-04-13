import { Func, ThrottleOptions } from './interface';
/**
 * throttle frequency for function execution
 * @param fn argv for debounce target function
 * @param time argv for debounce time(millisecond)
 * @param options \{ leading: true, trailing: true \} enable or disable trigger fn execution in the beginning or in the end
 * @returns an new function or throw an error
 */
export declare const throttle: <F extends Func>(fn: F, time: number | string, options?: ThrottleOptions) => Func | never;
