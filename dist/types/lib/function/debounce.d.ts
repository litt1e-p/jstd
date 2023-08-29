import { Func } from './interface';
/**
 * Debounce frequency for function execution
 * @param fn argv for debounce target function
 * @param time argv for debounce time(millisecond)
 */
export declare const debounce: <F extends Func>(fn: F, time: number | string, immediate?: boolean) => Func | never;
