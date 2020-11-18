import { formatDate, timezoneDate } from '../'

describe('date - timezoneDate cases', () => {
  test('date - timezoneDate', () => {
    expect(timezoneDate()).toEqual(undefined)
    expect(timezoneDate(void 0, void 0)).toEqual(undefined)
  })

  test('date - timezoneDate', () => {
    const d = new Date('2020/11/17 16:21:28')
    d.setTime(d.getTime() - d.getTimezoneOffset() * 60 * 1000)
    expect(timezoneDate(2020, 11, 17, 16, 21, 28)).toEqual(d)
    expect(timezoneDate(2020, 11, 17, 16, 21, 28, 'America/New_York')).toEqual(timezoneDate(2020, 11, 18, 5, 21, 28, 'Asia/Shanghai'))
  })
})
describe('date - formatDate cases', () => {
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
    // const date = new Date('Wed Nov 4 2020 12:06:02 GMT+0800 (中国标准时间)')
    const date = timezoneDate(2020, 11, 4, 12, 6, 2, 'Asia/Shanghai')
    expect(formatDate(date)).toEqual('2020-11-04 12:06:02');
  });
  
  test('date - formatDate', () => {
    // const date = new Date('Wed Nov 4 2020 12:06:02 GMT+0800 (中国标准时间)')
    const date = timezoneDate(2020, 11, 4, 12, 6, 2, 'Asia/Shanghai')
    expect(formatDate(date, 'MM-dd yyyy')).toEqual('11-04 2020');
  });
  
  test('date - formatDate', () => {
    // const date = new Date('Wed Nov 4 2020 12:06:02 GMT+0800 (中国标准时间)')
    const date = timezoneDate(2020, 11, 4, 12, 6, 2, 'Asia/Shanghai')
    expect(formatDate(date, 'hh:mm:ss dd/MM yyyy')).toEqual('12:06:02 04/11 2020');
  });
  
  test('date - formatDate', () => {
    // const date = new Date('Wed Nov 4 2020 12:06:02 GMT+0800 (中国标准时间)')
    const date = timezoneDate(2020, 11, 4, 12, 6, 2, 'Asia/Shanghai')
    expect(formatDate(date, 'h:m:s d-M-Y')).toEqual('12:6:2 4-11-2020');
  });
  
})

