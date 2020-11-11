import { url2Blob, str2Buffer, buffer2Str } from '../'

describe('Buffer', () => {
  test('Buffer - url2Blob', () => {
    try {
      url2Blob('')
    } catch (e) {
      expect(e.message).toBe('url2Blob only works in browser environment')
    }
  });

  test('Buffer - str2Buffer', () => {
    expect(str2Buffer('')).toEqual(undefined)
    expect(str2Buffer('123456')).toEqual(new Uint8Array([77, 84, 73, 122, 78, 68, 85, 50]))
    expect(str2Buffer('abcdefg')).toEqual(new Uint8Array([89, 87, 74, 106, 90, 71, 86, 109, 90, 119, 61, 61]))
  })

  test('Buffer - buffer2Str', () => {
    expect(buffer2Str(new Uint8Array())).toEqual(undefined)
    expect(buffer2Str(new Uint8Array([77, 84, 73, 122, 78, 68, 85, 50]))).toEqual('123456')
    expect(buffer2Str(new Uint8Array([89, 87, 74, 106, 90, 71, 86, 109, 90, 119, 61, 61]))).toEqual('abcdefg')
  })

})