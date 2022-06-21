# JSTD Documentation

## 0. General funcs

## 0.1 typeis

Determine the type of a value

## 0.2 re

Regexp test function

```ts
re(regxp: RegExp, val: any): boolean
```

## 1. Array

### 1.1 arrayable 

To determine a var is an array or not empty array

```ts
arrayable(array: any, length = true): boolean
```

### 1.2 arrayUnique

Retrieve unique elemens from an array

```ts
arrayUnique<T>(array: any, nested = false): Array<T>
```

### 1.3 arrValsCount

Retrieve elements exists count from an array

```ts
arrValsCount<T>(array: any): NumberDict
```

### 1.4 arrValCount

To Count the number of occurrences of an element in the array

```ts
arrValCount<T>(array: any, key: T): number
```

### 1.5 flat

Flatten an array recursively up to the specified depth.

```ts
flat<T>(array: any, depth = Infinity): OptionalPropertyArray<T> 
```

## 2. Buffer

### 2.1 url2Blob

Convert a string url to blob

```ts
url2Blob(url: string): Blob | never
```

### 2.2 str2Buffer

convert a string to buffer<Uint8Array>

```ts
str2Buffer(str: string): Uint8Array | undefined
```

### 2.3 buffer2Str

convert a buffer<Uint8Array> to a string

```ts
buffer2Str(buff: Uint8Array): string | undefined
```

### 2.4 _btoa/_atob

polyfill for window.btoa/window.atob

## 3. Date

### 3.1 formatDate

Date format

```ts
formatDate(date?: Date | string, format = 'yyyy-MM-dd hh:mm:ss'): string
```

### 3.2 timezoneDate

Retrieve a date with specify timezone

```ts
timezoneDate(year = 0, month = 0, day = 0, hour = 0, minute = 0, second = 0, timezone?: string): Date | undefined
```

### 3.3 dateable

To determine a var is Date type

```ts
dateable(date?: any, validDate = true): boolean
```

### 3.4 quarterable

Retrieve a quarter string with another quarter and delta quarters which are used to calculate

```ts
quarterable(quarter: any, delta = 0, separator = 'Q'): string | undefined
```
## 4. Enum

### 4.1 inEnum

To determine whether a key in an Enum

```ts
inEnum<T>(enums?: Dict<T>, i?: string | T): boolean
```

### 4.2 Types

enum of Types

### 4.3 TypesDesc

enum of type's descriptions

## 5. eventloop

### 5.1 sleep

sleep in eventloop for milliseconds

```ts
sleep(ms = 16): Promise<number>
```

## 6. Map

### 6.1 mappable

To determine a var is an map or not empty map

```ts
mappable(map?: any, length = true): boolean
```

## 7. Math

### 7.1 rangeRandom

Retrieve a random number with range limit

```ts
rangeRandom(min?: any, max?: any): number
```

### 7.2 numberic

Formatting or rounding a value with digits limitation and rounding places limitation

```ts
numberic(val?: any, digits = 2, places?: number): number | undefined
```

### 7.3 guid

Generate a guid string randomly

```ts
guid(length = 8, salt = 'abcdefghijklmnopqrstuvwxyz0123456789'): string
```

### 7.4 hash

Generate a hash string randomly

```ts
hash(): string
```

### 7.5 numberFormat

Formatting or rounding a value with digits limitation and rounding places limitation

```ts
numberFormat(val?: any, digits = 2, places?: number): string | undefined
```

### 7.6 moneyFormat

Formatting a numberic like value into a string such as '1,000,000'

```ts
moneyFormat(val?: any, digits = 2, places?: number, defaultVal = ''): string
```

### 7.7 signFormat

Formatting with a positive/negative sign for a numberic value to a string such as '+1' or '-1', '0'

```ts
signFormat(val?: any, defaultVal = ''): string
```
## 8. Object

### 8.1 objectable
 
To determine a var is an Object type which is type of `{}`

```ts
objectable(obj: any, length = true): boolean
```

### 8.2 optional

Retrieve value from optional chain in an Object

```ts
optional<T>(path: any, obj?: any, separator = '.'): OptionalPropertyItem<T>
```

### 8.3 extractable

Extract some key-values from an object with some properties or custom key-value objects

```ts
extractable(...args: Array<ExtractableArgs>): Dict<any>
```

### 8.4 assign

Assign a value to an object with key path

```ts
assign<T>(path: any, obj: OptionalDict<T>, val?: any, separator = '.'): OptionalDict<T>
```

### 8.5 objReverse

Reverse an object's key and value

```ts
objReverse(obj?: OptionalDict<any> | null): OptionalDict<any> | null
```

## 9. Regexp

### 9.1 isNil

Determine whether a value is null/undefined/empty string

```ts
isNil(val?: any): boolean
```

### 9.2 isNull

Determine whether a value is equal to null

```ts
isNul(val?: any): boolean
```

### 9.3 isUndefined

Determine whether a value is equal to undefined

```ts
isUndefined(val?: any): boolean
```

### 9.4 isNumberic

Determine whether a value is numberic which support pure number-like and pure instance of Number

```ts
isNumberic(val: any, signed?: boolean, arabic = true): boolean | number
```

## 10. Set

### 10.1 settable

To determine a var is an set or not empty set

```ts
settable(set?: any, length = true): boolean
```

## 11. String

### 11.1 stringable

To determine a var is string or not empty string

```ts
stringable(str: any, length = true): boolean
```

### 11.2 strLen

To count the number of characters in a string

```ts
strLen(str: any): number
```

## 12. Function

### 12.1 copy

Create a copy of a variable deeply or not

```ts
copy(obj: any, deep = true): any
```

### 12.2 debounce

Debounce frequency for function execution

```ts
debounce<F extends Func>(fn: F, time: number | string, immediate = false): Func | never
```

### 12.3 throuttle

Throttle frequency for function execution

```ts
throuttle<F extends Func>(fn: F, time: number | string, options?: ThrottleOptions): Func | never
```

### 12.4 sort

Sort function for sorting array of numberic or not numberic values

```ts
sort(a: any, b: any, ignoreCase = false, locale = 'zh-Hans-CN')
```