import { formatDate, timezoneDate, quarterable, dateable } from '../'

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
    const date = new Date('Wed Nov 4 2020 12:06:02 GMT+0800 (中国标准时间)')
    // const date = timezoneDate(2020, 11, 4, 12, 6, 2, 'Asia/Shanghai')
    // const date2 = timezoneDate(2020, 11, 4, 12, 6, 2, 'America/New_York')
    expect(formatDate(date)).toEqual('2020-11-04 12:06:02');
  });
  
  test('date - formatDate', () => {
    const date = new Date('Wed Nov 4 2020 12:06:02 GMT+0800 (中国标准时间)')
    // const date = timezoneDate(2020, 11, 4, 12, 6, 2, 'Asia/Shanghai')
    // const date2 = timezoneDate(2020, 11, 4, 12, 6, 2, 'America/New_York')
    expect(formatDate(date, 'MM-dd yyyy')).toEqual('11-04 2020');
  });
  
  test('date - formatDate', () => {
    const date = new Date('Wed Nov 4 2020 12:06:02 GMT+0800 (中国标准时间)')
    // const date = timezoneDate(2020, 11, 4, 12, 6, 2, 'Asia/Shanghai')
    // const date2 = timezoneDate(2020, 11, 4, 12, 6, 2, 'America/New_York')
    expect(formatDate(date, 'hh:mm:ss dd/MM yyyy')).toEqual('12:06:02 04/11 2020');
  });
  
  test('date - formatDate', () => {
    const date = new Date('Wed Nov 4 2020 12:06:02 GMT+0800 (中国标准时间)')
    // const date = timezoneDate(2020, 11, 4, 12, 6, 2, 'Asia/Shanghai')
    // const date2 = timezoneDate(2020, 11, 4, 12, 6, 2, 'America/New_York')
    expect(formatDate(date, 'h:m:s d-M-Y')).toEqual('12:6:2 4-11-2020');
  });
  
})

describe('date - quarterable cases', () => {
  test('date - quarterable - undefined', () => {
    expect(quarterable('')).toEqual(undefined)
    expect(quarterable('20')).toEqual(undefined)
    expect(quarterable('2020Q1', 1, 'q')).toEqual(undefined)
  })

  test('date - quarterable - normal', () => {
    expect(quarterable('2020Q1')).toEqual('2020Q1')
    expect(quarterable('2020Q1', -1)).toEqual('2019Q4')
    expect(quarterable('2020Q1', 3)).toEqual('2020Q4')
    expect(quarterable('2020Q1', 4)).toEqual('2021Q1')
    expect(quarterable('2020Q1', 7)).toEqual('2021Q4')
    expect(quarterable('2020Q4', -4)).toEqual('2019Q4')
    expect(quarterable('2020Q4', -8)).toEqual('2018Q4')
  })
})

describe('date - dateable cases', () => {
  test('date - dateable', () => {
    expect(dateable()).toEqual(false)
    expect(dateable(void 0, void 0)).toEqual(false)
  })

  test('date - dateable', () => {
    const d = new Date('2022/06/20 15:05:28')
    expect(dateable(d)).toEqual(true)
    expect(dateable(d, true)).toEqual(true)
    expect(dateable(new Date(628021800000))).toEqual(true)
    expect(dateable(Date())).toEqual(false) // string
    expect(dateable(Date.now())).toEqual(false) // number
    expect(dateable('')).toEqual(false)
    expect(dateable(void 0)).toEqual(false)
    expect(dateable(null)).toEqual(false)
    expect(dateable(new Date(''))).toEqual(false)
    expect(dateable(new Date(''), false)).toEqual(true)
  })
})
