import { sort } from '../'

describe('Sort', () => {
  test('function - sort - sort mixed value', () => {
    expect(sort(123.1235, void 0)).toEqual(1);
    expect(sort(123.1235, null)).toEqual(1);
    expect(sort('123.1235', '123.1235')).toEqual(0);
    expect(sort('123.1235', 123.1235)).toEqual(0);
    expect(sort('0.1235', 1)).toEqual(-1);
    expect(sort('0.1235', '0.1236')).toEqual(-1);
    expect(sort('0.1235', 0.1236)).toEqual(-1);
    expect(sort(0.1235, 0.1236)).toEqual(-1);
    expect(sort(0.1235, 0.1235)).toEqual(0);
    expect(sort(0.1236, 0.1235)).toEqual(1);
    expect(sort(-0.1235, 0.1235)).toEqual(-1);
    expect(sort(-0.1235, -0.1235)).toEqual(0);
    expect(sort(-0.1236, -0.1235)).toEqual(-1);
    expect(sort(-0.1235, -0.1236)).toEqual(1);
    expect(sort(-0.1236, '-0.1235')).toEqual(-1);
    expect(sort('-0.1236', '-0.1235')).toEqual(-1);
    expect(sort(0.1235, -0.1235)).toEqual(1);
    expect(sort(0.1236, '0.1236Y')).toEqual(-1);
    expect(sort(3655.0005, 16742.002)).toEqual(-1);
    expect(sort('3655.0005', 16742.002)).toEqual(-1);
    expect(sort(3655.0005, '16742.002')).toEqual(-1);
    expect(sort('3655.0005', '16742.002')).toEqual(-1);
    expect(sort('F123.4', 'F223.4')).toEqual(-1);
    expect(sort('F223.4', 'F123.4')).toEqual(1);
    expect(sort('F123.4', '--')).toEqual(1);
    expect(sort('--', 'F123.4')).toEqual(-1);
    expect(sort('ab1', 'aa1')).toEqual(1);
    expect(sort('a', '1')).toEqual(1);
  });
  test('function - sort - sort localString', () => {
    expect(sort('日', '也')).toEqual(-1);
    expect(sort('日', '1')).toEqual(1);
    expect(sort('五矿证券FOF29号单一资产', '广西交投一号单一计划')).toEqual(1);
    expect(sort('广西交投一号单一计划', '五矿证券FOF29号单一资产')).toEqual(-1);
    expect(sort('日1', 'a1')).toEqual(-1);
  })
});