import { _btoa, _atob } from '../'

describe('base64 _btoa', () => {
  test('base64 - _btoa - empty', () => {
    // expect(_btoa()).toThrow("Uncaught TypeError: Failed to execute 'btoa' on 'Window': 1 argument required, but only 0 present.")
    expect(_btoa('')).toEqual('')
  });

  test('base64 - _btoa - string', () => {
    expect(_btoa('123')).toEqual('MTIz')
    expect(_btoa('abc')).toEqual('YWJj')
    expect(_btoa('1234567890abcdefghijklmnopqrstuvwxyz')).toEqual('MTIzNDU2Nzg5MGFiY2RlZmdoaWprbG1ub3BxcnN0dXZ3eHl6')
    try {
      _btoa('中文')
    } catch (e) {
      type Err = {
        message: String
      }
      const msg =  (e as Err).message ?? 'unknow error'
      expect(msg).toBe("'btoa' failed: The string to be encoded contains characters outside of the Latin1 range.")
    }
  });

  test('base64 - _atob - empty', () => {
    // expect(_atob()).toThrow("Uncaught TypeError: Failed to execute 'atob' on 'Window': 1 argument required, but only 0 present.")
    expect(_atob('')).toEqual('')
  });

  test('base64 - _atob - string', () => {
    expect(_atob('MTIz')).toEqual('123')
    expect(_atob('YWJj')).toEqual('abc')
    expect(_atob('MTIzNDU2Nzg5MGFiY2RlZmdoaWprbG1ub3BxcnN0dXZ3eHl6')).toEqual('1234567890abcdefghijklmnopqrstuvwxyz')
    expect(_atob('中文')).toEqual('')
    try {
      _atob('中文123')
    } catch (e) {
      type Err = {
        message: String
      }
      const msg =  (e as Err).message ?? 'unknow error'
      expect(msg).toBe("'atob' failed: The string to be decoded is not correctly encoded.")
    }
  });
})