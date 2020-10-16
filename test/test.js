const test = require('ava');
import { Jstd as lib } from '../'
import { sleep } from '../'
import Lib from '../'


/**
 * importations cases
 */
test('module import1', importation, lib, Lib)
test('module import2', importation, sleep, Lib.sleep)
test('module import3', importation, sleep, lib.sleep)
test('module import4', importation, Lib.sleep, lib.sleep)

function importation (t, input, expected) {
  t.is(eval(input), eval(expected))
}

/**
 * strLen cases
 */

test('strLen5', eq, Lib.strLen('123'), 3)
test('strLen6', eq, Lib.strLen('这是中文测试'), 18) // 18chars
test('strLen7', eq, Lib.strLen('it is english'), 13)

function eq(t, input, expected) {
  t.deepEqual(eval(input), expected)
}

/**
 * str2Buffer cases
 */

test('str2Buffer8', deq, lib.str2Buffer('123'), new Uint8Array([77, 84, 73, 122]))
test('str2Buffer9', deq, lib.str2Buffer('这是中文测试'), new Uint8Array([54, 76, 43, 90, 53, 112, 105, 118, 53, 76, 105, 116, 53, 112, 97, 72, 53, 114, 87, 76, 54, 75, 43, 86]))
test('str2Buffer10', deq, lib.str2Buffer('it is english'), new Uint8Array([97, 88, 81, 103, 97, 88, 77, 103, 90, 87, 53, 110, 98, 71, 108, 122, 97, 65, 61, 61]))

/**
 * buffer2Str cases
 */

test('buffer2Str11', deq, lib.buffer2Str(new Uint8Array([77, 84, 73, 122])), '123')
test('buffer2Str12', deq, lib.buffer2Str(new Uint8Array([54, 76, 43, 90, 53, 112, 105, 118, 53, 76, 105, 116, 53, 112, 97, 72, 53, 114, 87, 76, 54, 75, 43, 86])), '这是中文测试')
test('buffer2Str13', deq, lib.buffer2Str(new Uint8Array([97, 88, 81, 103, 97, 88, 77, 103, 90, 87, 53, 110, 98, 71, 108, 122, 97, 65, 61, 61])), 'it is english')

function deq(t, input, expected) {
  t.deepEqual(input, expected)
}


