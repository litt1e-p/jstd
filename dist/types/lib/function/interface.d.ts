/**
 * type declaration for function
 */
export declare type Func = (...args: Array<any>) => any;
/**
 * interface for debounce & throttle
 */
export interface FrequencyFn<F extends Func> {
    (this: ThisParameterType<F>, ...args: Parameters<F>): ReturnType<F>;
    /**
     * cancel execution
     */
    cancel(): void;
}
/**
 * Options of throttle,
 * leading: boolean means execute in the beginning,
 * trailing: boolean means execute in the end
 */
export interface ThrottleOptions {
    leading?: boolean;
    trailing?: boolean;
}
