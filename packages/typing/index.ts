/*
 * Created on 2020-11-2 14:59:05
 * Created by litt1e-p
 *
 * The MIT License (MIT)
 * Copyright (c) 2022 litt1e-p
 * Permission is hereby granted, free of charge, to any person obtaining a copy of this software
 * and associated documentation files (the "Software"), to deal in the Software without restriction,
 * including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense,
 * and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so,
 * subject to the following conditions:
 * The above copyright notice and this permission notice shall be included in all copies or substantial
 * portions of the Software.
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED
 * TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL
 * THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
 * TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */
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
