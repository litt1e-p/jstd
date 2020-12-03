export type Dict<T> = { [key: string]: T }
export type StringDict = Dict<string>
export type NumberDict = Dict<number>
export type Obj<T> = Dict<T> | Array<T>
export type OptionalDict<T> = Dict<T> | undefined
export type OptionalPropertyItem<T> = T | undefined
export type OptionalPropertyDict<T> = Dict<T> | OptionalPropertyItem<T>
export type OptionalPropertyArray<T> = Array<T> | OptionalPropertyItem<T>
export type OptionalPropertyObj<T> = OptionalPropertyDict<T> | OptionalPropertyArray<T>
// string/tuple
export type ExtractableArgs = string | [string, string] | [string, any] | [string, any, any] | Dict<any> | undefined
export type EmptyFunc = () => void
