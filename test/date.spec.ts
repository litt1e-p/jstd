import { formatDate } from '../'

function tEq(t: string) {
  return +new Date(t)
}

test('date - formatDate', () => {
  expect(formatDate()).toEqual('');
});

test('date - formatDate', () => {
  expect(formatDate('abc')).toEqual('');
});

test('date - formatDate', () => {
  expect(formatDate('2020-11-04', 'Y/M/d')).toEqual('2020/11/4');
});

test('date - formatDate', () => {
  expect(formatDate('2020-11-04 1:08:12', 'Y/M/d')).toEqual('2020/11/4');
});

test('date - formatDate', () => {
  const date = new Date('Wed Nov 4 2020 12:06:02 GMT+0800 (中国标准时间)')
  expect(tEq(formatDate(date))).toEqual(tEq('2020-11-04 12:06:02'));
});

test('date - formatDate', () => {
  const date = new Date('Wed Nov 4 2020 12:06:02 GMT+0800 (中国标准时间)')
  expect(tEq(formatDate(date, 'MM-dd yyyy'))).toEqual(tEq('11-04 2020'));
});

test('date - formatDate', () => {
  const date = new Date('Wed Nov 4 2020 12:06:02 GMT+0800 (中国标准时间)')
  expect(tEq(formatDate(date, 'hh:mm:ss dd/MM yyyy'))).toEqual(tEq('12:06:02 04/11 2020'));
});

test('date - formatDate', () => {
  const date = new Date('Wed Nov 4 2020 12:06:02 GMT+0800 (中国标准时间)')
  expect(tEq(formatDate(date, 'h:m:s d-M-Y'))).toEqual(tEq('12:6:2 4-11-2020'));
});

