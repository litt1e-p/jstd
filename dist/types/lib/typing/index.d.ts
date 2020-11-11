export declare type Dict<T> = {
    [key: string]: T;
};
export declare type StringDict = Dict<string>;
export declare type NumberDict = Dict<number>;
export declare type OptionalDict<T> = Dict<T> | undefined;
export declare type OptionalPropertyItem<T> = T | undefined;
export declare type OptionalPropertyDict<T> = Dict<T> | OptionalPropertyItem<T>;
export declare type ExtractableArgs = string | [string, string] | [string, any] | [string, any, any] | Dict<any> | undefined;
