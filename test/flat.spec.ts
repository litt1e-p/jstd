import { flat } from '../';

describe('Array-like flatten', () => {
  it('should return empty array when input is empty array', () => {
    expect(flat([])).toEqual([])
  })

  it('should return array when input is array - 1', () => {
    expect(flat([1])).toEqual([1])
  })

  it('should return array when input is array - 2', () => {
    expect(flat([1, [2]])).toEqual([1, 2])
  })

  it('should return array when input is array - 3', () => {
    expect(flat([1, [2, [3]]])).toEqual([1, 2, 3])
  })

  it('should return array when input is array - 4', () => {
    expect(flat([1, [2, [3, [{ i: 4 }]]]])).toEqual([1, 2, 3, { i: 4 }])
  })

  it('should return array when input is array - 5', () => {
    expect(flat([1, [2, [3, [{ i: 4 }]]]], Infinity)).toEqual([1, 2, 3, { i: 4 }])
  })
})

describe('Tree-like Array flatten', () => {
  it('should return empty array when input is empty array', () => {
    expect(flat([{}])).toEqual([{}])
  })

  it('should return array when input is array - 1', () => {
    expect(flat([{ a: 1 }])).toEqual([{ a: 1 }])
  })

  it('should return array when input is array - 2', () => {
    expect(flat([{ a: 1, children: [{ a: 2 }] }])).toEqual([{ a: 1 }, { a: 2 }])
  })

  it('should return array when input is array - 3', () => {
    expect(flat([{ a: 1, children: [{ a: 2, children: [{ a: 3 }] }] }])).toEqual([{ a: 1 }, { a: 2 }, { a: 3 }])
  })

  it('should return array when input is array - 4', () => {
    expect(flat([{ a: 1, children: [{ a: 2, children: [{ a: 3, children: [{ a: 4 }] }] }] }])).toEqual([{ a: 1 }, { a: 2 }, { a: 3 }, { a: 4 }])
  })

  it('should return array when input is array - 5', () => {
    expect(flat([{ a: 1, children: [{ a: 2, children: [{ a: 3, children: [{ a: 4 }] }] }] }], Infinity)).toEqual([{ a: 1 }, { a: 2 }, { a: 3 }, { a: 4 }])
  })

  it('should return array when input is array - 6', () => {
    expect(flat([{ a: 1, children: [{ a: 2, children: [{ a: 3, children: [{ a: 4 }] }] }] }], 1)).toEqual([{ a: 1 }, { a: 2, children: [{ a: 3, children: [{ a: 4 }] }] }])
  })

  it('should return array when input is array - 7', () => {
    expect(flat([{ a: 1, children: [{ a: 2, children: [{ a: 3, children: [{ a: 4 }] }] }] }], 2)).toEqual([{ a: 1 }, { a: 2 }, { a: 3, children: [{ a: 4 }] }])
  })

})

describe('Mixed type Array flatten', () => {
  it('should return array when input is array 1 - 0', () => {
    expect(flat([1, { a: 1 }])).toEqual([1, { a: 1 }])
  })

  it('should return array when input is array 1 - 1', () => {
    expect(flat([1, [{ a: 1 }]])).toEqual([1, { a: 1 }])
  })

  it('should return array when input is array 2 - 0', () => {
    expect(flat([1, { a: 1, children: [{ a: 2 }] }])).toEqual([1, { a: 1 }, { a: 2 }])
  })

  it('should return array when input is array 2 - 1', () => {
    expect(flat([1, [{ a: 1, children: [{ a: 2 }] }]])).toEqual([1, { a: 1 }, { a: 2 }])
  })

  it('should return array when input is array 3 - 0', () => {
    expect(flat([1, { a: 1, children: [{ a: 2, children: [{ a: 3 }] }] }])).toEqual([1, { a: 1 }, { a: 2 }, { a: 3 }])
  })

  it('should return array when input is array 3 - 1', () => {
    expect(flat([1, [{ a: 1, children: [{ a: 2, children: [{ a: 3 }] }] }]])).toEqual([1, { a: 1 }, { a: 2 }, { a: 3 }])
  })

  it('should return array when input is array 4 - 0', () => {
    expect(flat([1, { a: 1, children: [{ a: 2, children: [{ a: 3, children: [{ a: 4 }] }] }] }])).toEqual([1, { a: 1 }, { a: 2 }, { a: 3 }, { a: 4 }])
  })

  it('should return array when input is array 4 - 1', () => {
    expect(flat([1, [{ a: 1, children: [{ a: 2, children: [{ a: 3, children: [{ a: 4 }] }] }] }]])).toEqual([1, { a: 1 }, { a: 2 }, { a: 3 }, { a: 4 }])
  })

  it('should return array when input is array 5 - 0', () => {
    expect(flat([1, { a: 1, children: [{ a: 2, children: [{ a: 3, children: [{ a: 4 }] }] }] }, 2], Infinity)).toEqual([1, { a: 1 }, { a: 2 }, { a: 3 }, { a: 4 }, 2])
  })

  it('should return array when input is array 5 - 1', () => {
    expect(flat([1, [{ a: 1, children: [{ a: 2, children: [{ a: 3, children: [{ a: 4 }] }] }] }]], Infinity)).toEqual([1, { a: 1 }, { a: 2 }, { a: 3 }, { a: 4 }])
  })

  it('should return array when input is array 6 - 0', () => {
    expect(flat([1, { a: 1, children: [{ a: 2, children: [{ a: 3, children: [{ a: 4 }] }] }] }], 1)).toEqual([1, { a: 1 }, { a: 2, children: [{ a: 3, children: [{ a: 4 }] }] }])
  })

  it('should return array when input is array 6 - 1', () => {
    expect(flat([1, [{ a: 1, children: [{ a: 2, children: [{ a: 3, children: [{ a: 4 }] }] }] }]], 1)).toEqual([1, { a: 1, children: [{ a: 2, children: [{ a: 3, children: [{ a: 4 }] }] }] }])
  })

  it('should return array when input is array 7 - 0', () => {
    expect(flat([1, { a: 1, children: [{ a: 2, children: [{ a: 3, children: [{ a: 4 }] }] }] }], 2)).toEqual([1, { a: 1 }, { a: 2 }, { a: 3, children: [{ a: 4 }] }])
  })

  it('should return array when input is array 7 - 1', () => {
    expect(flat([1, [{ a: 1, children: [{ a: 2, children: [{ a: 3, children: [{ a: 4 }] }] }] }]], 2)).toEqual([1, { a: 1 }, { a: 2, children: [{ a: 3, children: [{ a: 4 }] }] }])
  })

  it('should return array when input is array 8 - 0', () => {
    expect(flat([1, { a: 1, children: [{ a: 2, children: [{ a: 3, children: [{ a: 4 }] }] }] }], 3)).toEqual([1, { a: 1 }, { a: 2 }, { a: 3 }, { a: 4 }])
  })

  it('should return array when input is array 8 - 1', () => {
    expect(flat([1, [{ a: 1, children: [{ a: 2, children: [{ a: 3, children: [{ a: 4 }] }] }] }]], 3)).toEqual([1, { a: 1 }, { a: 2 }, { a: 3, children: [{ a: 4 }] }])
  })

  it('should return array when input is array 9 - 0', () => {
    expect(flat([1, { a: 1, children: [{ a: 2, children: [{ a: 3, children: [{ a: 4 }] }] }] }], 4)).toEqual([1, { a: 1 }, { a: 2 }, { a: 3 }, { a: 4 }])
  })

  it('should return array when input is array 9 - 1', () => {
    expect(flat([1, [{ a: 1, children: [{ a: 2, children: [{ a: 3, children: [{ a: 4 }] }] }] }]], 4)).toEqual([1, { a: 1 }, { a: 2 }, { a: 3 }, { a: 4 }])
  })
})

describe('Options test', () => {
  it('should return array when options is specified in tree-like array', () => {
    expect(flat([{ a: 1, child: [{ a: 2, child: [{ a: 3, child: [{ a: 4 }] }] }] }], 3, { children: 'child' })).toEqual([{ a: 1 }, { a: 2 }, { a: 3 }, { a: 4 }])
  })

  it('should return array when options is specified in mixed-type array', () => {
    expect(flat([1, [{ a: 1, child: [{ a: 2, child: [{ a: 3, child: [{ a: 4 }] }] }] }]], 4, { children: 'child' })).toEqual([1, { a: 1 }, { a: 2 }, { a: 3 }, { a: 4 }])
  })
})
