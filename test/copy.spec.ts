import { copyArrayBuffer, copyDataView, copyDate, copyRegExp, copyTypedArray, copy } from '../'

// Copy
describe('Copy - cases', () => {
  test('Copy - copyArrayBuffer', () => {
    const arrayBuffer = new ArrayBuffer(16)
    const copy = copyArrayBuffer(arrayBuffer)

    expect(copy).not.toBe(arrayBuffer)
    expect(Object.prototype.toString.call(copy)).toEqual("[object ArrayBuffer]")
    expect(copy.byteLength).toEqual(16)
  })

  test('Copy - copyDataView', () => {
    const buffer = new ArrayBuffer(16)
    const view = new DataView(buffer, 0)
    view.setInt16(1, 42)
    const copy = copyDataView(view)

    expect(copy).not.toBe(view)
    expect(Object.prototype.toString.call(copy)).toEqual("[object DataView]")
    expect(copy.byteLength).toEqual(16)
    expect(copy.byteOffset).toEqual(0)
    expect(copy.getInt16(1)).toEqual(42)
  })

  test('Copy - copyDate', () => {
    const date = new Date()
    const copy = copyDate(date)

    expect(copy).not.toBe(date)
    expect(Object.prototype.toString.call(copy)).toEqual("[object Date]")
    expect(copy.getTime()).toEqual(date.getTime())
  })

  test('Copy - copyRegExp', () => {
    const regexp = new RegExp("ab+c", "i")
    const copy = copyRegExp(regexp)

    expect(copy).not.toBe(regexp)
    expect(Object.prototype.toString.call(copy)).toEqual("[object RegExp]")
    expect(copy.source).toEqual(regexp.source)
    expect(copy.flags).toEqual(regexp.flags)
    expect(copy.lastIndex).toEqual(regexp.lastIndex)
  })

  test('Copy - copyTypedArray - Float32Array', () => {
    const buffer = new ArrayBuffer(16)
    const float32Array = new Float32Array(buffer, 0)
    float32Array[0] = 42
    const copy = copyTypedArray(float32Array)

    expect(copy).not.toBe(float32Array)
    expect(Object.prototype.toString.call(copy)).toEqual(
      "[object Float32Array]"
    )
    expect(copy.BYTES_PER_ELEMENT).toEqual(4)
    expect(copy.length).toEqual(4)
    expect(copy.byteLength).toEqual(16)
    expect(copy.byteOffset).toEqual(0)
    expect(copy[0]).toEqual(42)
  })
  
  test('Copy - copyTypedArray - Float64Array', () => {
    const buffer = new ArrayBuffer(16)
    const float64Array = new Float64Array(buffer, 0)
    float64Array[0] = 42
    const copy = copyTypedArray(float64Array)

    expect(copy).not.toBe(float64Array)
    expect(Object.prototype.toString.call(copy)).toEqual(
      "[object Float64Array]"
    )
    expect(copy.BYTES_PER_ELEMENT).toEqual(8)
    expect(copy.length).toEqual(2)
    expect(copy.byteLength).toEqual(16)
    expect(copy.byteOffset).toEqual(0)
    expect(copy[0]).toEqual(42)
  })
  
  test('Copy - copyTypedArray - Int8Array', () => {
    const buffer = new ArrayBuffer(16)
    const int8Array = new Int8Array(buffer, 0)
    int8Array[0] = 42
    const copy = copyTypedArray(int8Array)

    expect(copy).not.toBe(int8Array)
    expect(Object.prototype.toString.call(copy)).toEqual("[object Int8Array]")
    expect(copy.BYTES_PER_ELEMENT).toEqual(1)
    expect(copy.length).toEqual(16)
    expect(copy.byteLength).toEqual(16)
    expect(copy.byteOffset).toEqual(0)
    expect(copy[0]).toEqual(42)
  })
  
  test('Copy - copyTypedArray - Int16Array', () => {
    const buffer = new ArrayBuffer(16)
    const int16Array = new Int16Array(buffer, 0)
    int16Array[0] = 42
    const copy = copyTypedArray(int16Array)

    expect(copy).not.toBe(int16Array)
    expect(Object.prototype.toString.call(copy)).toEqual("[object Int16Array]")
    expect(copy.BYTES_PER_ELEMENT).toEqual(2)
    expect(copy.length).toEqual(8)
    expect(copy.byteLength).toEqual(16)
    expect(copy.byteOffset).toEqual(0)
    expect(copy[0]).toEqual(42)
  })
  
  test('Copy - copyTypedArray - Int32Array', () => {
    const buffer = new ArrayBuffer(16)
    const int32Array = new Int32Array(buffer, 0)
    int32Array[0] = 42
    const copy = copyTypedArray(int32Array)

    expect(copy).not.toBe(int32Array)
    expect(Object.prototype.toString.call(copy)).toEqual("[object Int32Array]")
    expect(copy.BYTES_PER_ELEMENT).toEqual(4)
    expect(copy.length).toEqual(4)
    expect(copy.byteLength).toEqual(16)
    expect(copy.byteOffset).toEqual(0)
    expect(copy[0]).toEqual(42)
  })
  
  test('Copy - copyTypedArray - Uint8Array', () => {
    const buffer = new ArrayBuffer(16)
    const uint8Array = new Uint8Array(buffer, 0)
    uint8Array[0] = 42
    const copy = copyTypedArray(uint8Array)

    expect(copy).not.toBe(uint8Array)
    expect(Object.prototype.toString.call(copy)).toEqual("[object Uint8Array]")
    expect(copy.BYTES_PER_ELEMENT).toEqual(1)
    expect(copy.length).toEqual(16)
    expect(copy.byteLength).toEqual(16)
    expect(copy.byteOffset).toEqual(0)
    expect(copy[0]).toEqual(42)
  })
  
  test('Copy - copyTypedArray - Uint16Array', () => {
    const buffer = new ArrayBuffer(16)
    const uint16Array = new Uint16Array(buffer, 0)
    uint16Array[0] = 42
    const copy = copyTypedArray(uint16Array)

    expect(copy).not.toBe(uint16Array)
    expect(Object.prototype.toString.call(copy)).toEqual(
      "[object Uint16Array]"
    )
    expect(copy.BYTES_PER_ELEMENT).toEqual(2)
    expect(copy.length).toEqual(8)
    expect(copy.byteLength).toEqual(16)
    expect(copy.byteOffset).toEqual(0)
    expect(copy[0]).toEqual(42)
  })
  
  test('Copy - copyTypedArray - Uint32Array', () => {
    const buffer = new ArrayBuffer(16)
    const uint32Array = new Uint32Array(buffer, 0)
    uint32Array[0] = 42
    const copy = copyTypedArray(uint32Array)

    expect(copy).not.toBe(uint32Array)
    expect(Object.prototype.toString.call(copy)).toEqual(
      "[object Uint32Array]"
    )
    expect(copy.BYTES_PER_ELEMENT).toEqual(4)
    expect(copy.length).toEqual(4)
    expect(copy.byteLength).toEqual(16)
    expect(copy.byteOffset).toEqual(0)
    expect(copy[0]).toEqual(42)
  })
  
  test('Copy - copyTypedArray - Uint8ClampedArray', () => {
    const buffer = new ArrayBuffer(16)
    const uint8ClampedArray = new Uint8ClampedArray(buffer, 0)
    uint8ClampedArray[0] = 42
    const copy = copyTypedArray(uint8ClampedArray)

    expect(copy).not.toBe(uint8ClampedArray)
    expect(Object.prototype.toString.call(copy)).toEqual(
      "[object Uint8ClampedArray]"
    )
    expect(copy.BYTES_PER_ELEMENT).toEqual(1)
    expect(copy.length).toEqual(16)
    expect(copy.byteLength).toEqual(16)
    expect(copy.byteOffset).toEqual(0)
    expect(copy[0]).toEqual(42)
  })
  
  test('Copy - copyTypedArray - BigInt64Array', () => {
    const buffer = new ArrayBuffer(16)
    const bigInt64Array = new BigInt64Array(buffer, 0)
    bigInt64Array[0] = BigInt(42)
    const copy = copyTypedArray(bigInt64Array)

    expect(copy).not.toBe(bigInt64Array)
    expect(Object.prototype.toString.call(copy)).toEqual(
      "[object BigInt64Array]"
    )
    expect(copy.BYTES_PER_ELEMENT).toEqual(8)
    expect(copy.length).toEqual(2)
    expect(copy.byteLength).toEqual(16)
    expect(copy.byteOffset).toEqual(0)
    expect(copy[0]).toEqual(BigInt(42))
  })
  
  test('Copy - copyTypedArray - BigUint64Array', () => {
    const buffer = new ArrayBuffer(16)
    const bigUint64Array = new BigUint64Array(buffer, 0)
    bigUint64Array[0] = BigInt(42)
    const copy = copyTypedArray(bigUint64Array)

    expect(copy).not.toBe(bigUint64Array)
    expect(Object.prototype.toString.call(copy)).toEqual(
      "[object BigUint64Array]"
    )
    expect(copy.BYTES_PER_ELEMENT).toEqual(8)
    expect(copy.length).toEqual(2)
    expect(copy.byteLength).toEqual(16)
    expect(copy.byteOffset).toEqual(0)
    expect(copy[0]).toEqual(BigInt(42))
  })
  
  test('Copy - copy - basic', () => {
    expect(copy(true)).toBe(true)
    expect(copy(false)).toBe(false)
    expect(copy(0.234)).toEqual(0.234)
    expect(copy(0)).toEqual(0)
    expect(copy(1)).toEqual(1)
    expect(copy(-1)).toEqual(-1)
    expect(copy(null)).toEqual(null)
    expect(copy(undefined)).toEqual(undefined)
    expect(copy('abc')).toEqual('abc')
    // expect(copy(120n)).toEqual(120n) // @support target: ES2020
  })

  // copy object
  test('Copy - copy - object - deep: true', () => {
    const obj1 = {}
    expect(copy(obj1)).toEqual({})
    // reference with mutation
    const obj2 = {a: {b: 1, c: 2, d: 3, e: 4, f: 5}, g: {h: 6, i: 7}}
    const obj2UnCopy = obj2
    const obj2CopyMutated = copy(obj2)
    obj2UnCopy.a.c = 3
    obj2UnCopy.g.h = 7
    obj2CopyMutated.a.c = 3
    obj2CopyMutated.g.h = 7
    expect(obj2).toEqual({a: {b: 1, c: 3, d: 3, e: 4, f: 5}, g: {h: 7, i: 7}})
    expect(obj2UnCopy).toEqual({a: {b: 1, c: 3, d: 3, e: 4, f: 5}, g: {h: 7, i: 7}})
    expect(obj2CopyMutated).toEqual({a: {b: 1, c: 3, d: 3, e: 4, f: 5}, g: {h: 7, i: 7}})

    // reference without mutation
    const obj3 = {a: {b: 1, c: 2, d: 3, e: 4, f: 5}, g: {h: 6, i: 7}}
    const obj3UnCopy = obj3
    const obj3CopyMutated = copy(obj3)
    obj3CopyMutated.a.c = 3
    obj3CopyMutated.g.h = 7
    expect(obj3).toEqual({a: {b: 1, c: 2, d: 3, e: 4, f: 5}, g: {h: 6, i: 7}})
    expect(obj3UnCopy).toEqual({a: {b: 1, c: 2, d: 3, e: 4, f: 5}, g: {h: 6, i: 7}})
    expect(obj3CopyMutated).toEqual({a: {b: 1, c: 3, d: 3, e: 4, f: 5}, g: {h: 7, i: 7}})
  })

  test('Copy - copy - object - deep: false', () => {
    const obj = {a: {b: 1, c: 2, d: 3, e: 4, f: 5}, g: 9}
    const objCopy = copy(obj, false)
    obj.a.c = 3
    obj.g = 10
    expect(obj).toEqual({a: {b: 1, c: 3, d: 3, e: 4, f: 5}, g: 10})
    expect(objCopy).toEqual({a: {b: 1, c: 3, d: 3, e: 4, f: 5}, g: 9})
  })

  test('Copy - copy - regExp in an object - deep: true', () => {
    const rgo = {a: 1, b: {r: new RegExp(/\d{4,}/, 'ig')}}
    let rgoCopy = copy(rgo)
    rgoCopy.b.r = new RegExp(/\d{5,}/, 'ig')
    const rgoMutated = rgo
    rgoMutated.b.r = new RegExp(/\d{6,}/, 'ig')
    expect(rgoCopy).not.toBe(rgo)
    expect(rgoCopy).toEqual({a: 1, b: {r: new RegExp(/\d{5,}/, 'ig')}})
    expect(rgo).toEqual({a: 1, b: {r: new RegExp(/\d{6,}/, 'ig')}})
    expect(rgoMutated).toEqual({a: 1, b: {r: new RegExp(/\d{6,}/, 'ig')}})
  })

  test('Copy - copy - regExp in an object - deep: false', () => {
    const rgo = {a: 1, b: {r: new RegExp(/\d{4,}/, 'ig')}}
    let rgoCopy = copy(rgo, false)
    rgoCopy.b.r = new RegExp(/\d{5,}/, 'ig')
    rgoCopy.a = 2
    expect(rgoCopy).not.toBe(rgo)
    expect(rgo).toEqual({a: 1, b: {r: new RegExp(/\d{5,}/, 'ig')}})
    expect(rgoCopy).toEqual({a: 2, b: {r: new RegExp(/\d{5,}/, 'ig')}})
  })

  test('Copy - copy - Date in an object - deep: true', () => {
    const dto = {a: 1, b: {r: new Date('2021-05-18')}}
    let dtoCopy = copy(dto)
    dtoCopy.b.r = new Date('2021-05-20')
    const dtoMutated = dto
    dtoMutated.b.r = new Date('2021-05-30')
    expect(dtoCopy).not.toBe(dto)
    expect(dtoCopy).toEqual({a: 1, b: {r: new Date('2021-05-20')}})
    expect(dto).toEqual({a: 1, b: {r: new Date('2021-05-30')}})
    expect(dtoMutated).toEqual({a: 1, b: {r: new Date('2021-05-30')}})
  })

  test('Copy - copy - Date in an object - deep: false', () => {
    const dto = {a: 1, b: {r: new Date('2021-05-18')}}
    let dtoCopy = copy(dto, false)
    dtoCopy.b.r = new Date('2021-05-20')
    dtoCopy.a = 2
    expect(dtoCopy).not.toBe(dto)
    expect(dto).toEqual({a: 1, b: {r: new Date('2021-05-20')}})
    expect(dtoCopy).toEqual({a: 2, b: {r: new Date('2021-05-20')}})
  })

  // copy array
  test('Copy - copy - array - deep: true', () => {
    const arr1: number[] = []
    expect(copy(arr1)).toEqual([])
    // reference with mutation
    const arr2 = [{b: 1, c: 2, d: 3, e: 4, f: 5}, {h: 6, i: 7}]
    const arr2UnCopy = arr2
    const arr2CopyMutated = copy(arr2)
    arr2UnCopy[0].c = 3
    arr2UnCopy[1].h = 7
    arr2CopyMutated[0].c = 3
    arr2CopyMutated[1].h = 7
    expect(arr2).toEqual([{b: 1, c: 3, d: 3, e: 4, f: 5}, {h: 7, i: 7}])
    expect(arr2UnCopy).toEqual([{b: 1, c: 3, d: 3, e: 4, f: 5}, {h: 7, i: 7}])
    expect(arr2CopyMutated).toEqual([{b: 1, c: 3, d: 3, e: 4, f: 5}, {h: 7, i: 7}])

    // reference without mutation
    const arr3 = [{b: 1, c: 2, d: 3, e: 4, f: 5}, {h: 6, i: 7}]
    const arr3UnCopy = arr3
    const arr3CopyMutated = copy(arr3)
    arr3CopyMutated[0].c = 3
    arr3CopyMutated[1].h = 7
    expect(arr3).toEqual([{b: 1, c: 2, d: 3, e: 4, f: 5}, {h: 6, i: 7}])
    expect(arr3UnCopy).toEqual([{b: 1, c: 2, d: 3, e: 4, f: 5}, {h: 6, i: 7}])
    expect(arr3CopyMutated).toEqual([{b: 1, c: 3, d: 3, e: 4, f: 5}, {h: 7, i: 7}])
  })

  test('Copy - copy - array - deep: false', () => {
    const arr = [[1, 2, 3, 4, 5], 9]
    const arrCopy = copy(arr, false)
    // @ts-ignore
    arr[0][2] = 0
    arr[1] = 10
    expect(arr).toEqual([[1, 2, 0, 4, 5], 10])
    expect(arrCopy).toEqual([[1, 2, 0, 4, 5], 9])
  })

  test('Copy - copy - regExp in an array - deep: true', () => {
    const rgo = [1, {r: new RegExp(/\d{4,}/, 'ig')}]
    let rgoCopy = copy(rgo)
    // @ts-ignore
    rgoCopy[1].r = new RegExp(/\d{5,}/, 'ig')
    const rgoMutated = rgo
    // @ts-ignore
    rgoMutated[1].r = new RegExp(/\d{6,}/, 'ig')
    expect(rgoCopy).not.toBe(rgo)
    expect(rgoCopy).toEqual([1, {r: new RegExp(/\d{5,}/, 'ig')}])
    expect(rgo).toEqual([1, {r: new RegExp(/\d{6,}/, 'ig')}])
    expect(rgoMutated).toEqual([1, {r: new RegExp(/\d{6,}/, 'ig')}])
  })

  test('Copy - copy - regExp in an array - deep: false', () => {
    const rgo = [1, {r: new RegExp(/\d{4,}/, 'ig')}]
    let rgoCopy = copy(rgo, false)
    // @ts-ignore
    rgoCopy[1].r = new RegExp(/\d{5,}/, 'ig')
    // @ts-ignore
    rgoCopy[0] = 2
    expect(rgoCopy).not.toBe(rgo)
    expect(rgo).toEqual([1, {r: new RegExp(/\d{5,}/, 'ig')}])
    expect(rgoCopy).toEqual([2, {r: new RegExp(/\d{5,}/, 'ig')}])
  })

  test('Copy - copy - Date in an array - deep: true', () => {
    const dto = [1, {r: new Date('2021-05-18')}]
    let dtoCopy = copy(dto)
    // @ts-ignore
    dtoCopy[1].r = new Date('2021-05-20')
    const dtoMutated = dto
    // @ts-ignore
    dtoMutated[1].r = new Date('2021-05-30')
    expect(dtoCopy).not.toBe(dto)
    expect(dtoCopy).toEqual([1, {r: new Date('2021-05-20')}])
    expect(dto).toEqual([1, {r: new Date('2021-05-30')}])
    expect(dtoMutated).toEqual([1, {r: new Date('2021-05-30')}])
  })

  test('Copy - copy - Date in an array - deep: false', () => {
    const dto = [1, {r: new Date('2021-05-18')}]
    let dtoCopy = copy(dto, false)
    dtoCopy[1].r = new Date('2021-05-20')
    dtoCopy[0] = 2
    expect(dtoCopy).not.toBe(dto)
    expect(dto).toEqual([1, {r: new Date('2021-05-20')}])
    expect(dtoCopy).toEqual([2, {r: new Date('2021-05-20')}])
  })
  
  test('Copy - recursive copy', () => {
    type O = {
      k: number,
      r: any
    }
    const o: O = {
      k: 1,
      r: void 0
    }
    o.r = o
    const co = copy(o)
    expect(co).not.toBe(o)
  })
  
  
  test('Copy - proxy copy', () => {
    type O = {
      arr: Array<any>
    }
    const o: O = {
      arr: [1, 2, 3]
    }
    const po = new Proxy(o, {})
    const co = copy(po)
    po.arr = [1, 2]
    expect(co).not.toBe(po)
  })

  test('Copy - array with object copy', () => {
    type O = {
      arr: Array<any>
    }
    const o: Array<O> = [{
      arr: []
    }]
    const co = copy(o)
    co[0].arr[0] = 1
    expect(co).not.toBe(o)
  })
})
