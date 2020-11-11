import { formatDate } from '../'

test('object - objReverse', () => {
  expect(formatDate()).toEqual('');
});

test('object - objReverse', () => {
  expect(formatDate('abc')).toEqual('');
});

test('object - objReverse', () => {
  expect(formatDate('2020-11-04', 'Y/M/d')).toEqual('2020/11/4');
});

test('object - objReverse', () => {
  expect(formatDate('2020-11-04 1:08:12', 'Y/M/d')).toEqual('2020/11/4');
});

test('object - objReverse', () => {
  const date = new Date('Wed Nov 4 2020 12:06:02 GMT+0800 (中国标准时间)')
  expect(formatDate(date)).toEqual('2020-11-04 12:06:02');
});

test('object - objReverse', () => {
  const date = new Date('Wed Nov 4 2020 12:06:02 GMT+0800 (中国标准时间)')
  expect(formatDate(date, 'MM-dd yyyy')).toEqual('11-04 2020');
});

test('object - objReverse', () => {
  const date = new Date('Wed Nov 4 2020 12:06:02 GMT+0800 (中国标准时间)')
  expect(formatDate(date, 'hh:mm:ss dd/MM yyyy')).toEqual('12:06:02 04/11 2020');
});

test('object - objReverse', () => {
  const date = new Date('Wed Nov 4 2020 12:06:02 GMT+0800 (中国标准时间)')
  expect(formatDate(date, 'h:m:s d-M-Y')).toEqual('12:6:2 4-11-2020');
});
