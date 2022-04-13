import { EmptyFunc } from '../typing/index';
interface ResolveFn extends EmptyFunc {
    (value: any): any;
}
interface RejectFn extends EmptyFunc {
    (reason: any): any;
}
declare type ExecutorArgs = ResolveFn | RejectFn;
declare type RejectReason = Error | undefined;
declare enum PromiseStatus {
    pending = "pending",
    fulfilled = "fulfilled",
    rejected = "rejected"
}
interface Executor {
    (resolve: ExecutorArgs, reject: ExecutorArgs): any;
}
/**
 * polyfill for Promise
 */
export declare class PromisePolyfill {
    status: PromiseStatus;
    value: any;
    reason: RejectReason;
    onResolvedClosures: Array<ResolveFn>;
    onRejectedClosures: Array<RejectFn>;
    static resolve: (val: any) => PromisePolyfill;
    static reject: (err: RejectReason) => PromisePolyfill;
    static race: (promises: Array<PromisePolyfill>) => PromisePolyfill;
    static all: (promises: Array<PromisePolyfill>) => PromisePolyfill;
    static deferred: () => Deferred;
    constructor(executor: Executor);
    then(onFulfilled?: ResolveFn, onRejected?: RejectFn): PromisePolyfill;
    catch(fn: RejectFn): PromisePolyfill;
}
/**
 * promises-aplus-tests adapter
 */
interface Deferred {
    promise?: PromisePolyfill;
    resolve?: ResolveFn;
    reject?: RejectFn;
}
export {};
