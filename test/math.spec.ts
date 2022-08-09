import { rangeRandom, numberic, guid, hash, numberFormat, moneyFormat, signFormat } from '../'

describe('math testing', () => {
  test('math - rangeRandom - empty', async () => {
    expect(rangeRandom()).toBeLessThan(1)
  });

  test('math - rangeRandom - undefined', async () => {
    expect(rangeRandom(void 0, void 0)).toBeLessThan(1)
  });

  test('math - rangeRandom - undefined', async () => {
    expect(rangeRandom(3, void 0)).toBeLessThan(1)
  });

  test('math - rangeRandom - undefined', async () => {
    expect(rangeRandom(void 0, 1000)).toBeLessThan(1)
  });

  test('math - rangeRandom - range 3:5', async () => {
    expect(rangeRandom(3, 5)).toBeGreaterThanOrEqual(3)
    expect(rangeRandom(3, 5)).toBeLessThanOrEqual(5)
  });

  test('math - rangeRandom - range -3:5', async () => {
    expect(rangeRandom(-3, 5)).toBeGreaterThanOrEqual(-3)
    expect(rangeRandom(-3, 5)).toBeLessThanOrEqual(5)
  });

  test('math - rangeRandom - range 3:-5', async () => {
    expect(rangeRandom(3, -5)).toBeGreaterThanOrEqual(0)
    expect(rangeRandom(3, -5)).toBeLessThanOrEqual(1)
  });

  test('math - rangeRandom - range -5:-5', async () => {
    expect(rangeRandom(-5, -3)).toBeGreaterThanOrEqual(-5)
    expect(rangeRandom(-5, -3)).toBeLessThanOrEqual(-3)
  });

  test('math - rangeRandom - range -2:0', async () => {
    expect(rangeRandom(-2, 0)).toBeGreaterThanOrEqual(-2)
    expect(rangeRandom(-2, 0)).toBeLessThanOrEqual(0)
  });

  describe('regex testing - numberic', () => {

    test('regexp - numberic - empty', () => {
      expect(numberic()).toEqual(void 0)
    });
  
    test('regexp - numberic - null', () => {
      expect(numberic(null)).toEqual(void 0)
    });
  
    test('regexp - numberic - void 0', () => {
      expect(numberic(void 0)).toEqual(void 0)
    });
  
    test('regexp - numberic - no-number-string', () => {
      expect(numberic('abc')).toEqual(void 0)
    });
  
    test('regexp - numberic - object', () => {
      expect(numberic({})).toEqual(void 0)
    });
  
    test('regexp - numberic - array', () => {
      expect(numberic([])).toEqual(void 0)
    });
  
    test('regexp - numberic - number-string', () => {
      expect(numberic('123')).toEqual(123.00)
    });
  
    test('regexp - numberic - decimal-string', () => {
      expect(numberic('123.12')).toEqual(123.12)
    });
  
    test('regexp - numberic - rounding-decimal-string', () => {
      expect(numberic('123.54')).toEqual(123.54)
    });
  
    test('regexp - numberic - rounding-decimal-string2', () => {
      expect(numberic('123.545')).toEqual(123.55)
    });
  
    test('regexp - numberic - int', () => {
      expect(numberic(123)).toEqual(123.00)
    });
  
    test('regexp - numberic - decimal', () => {
      expect(numberic(123.12)).toEqual(123.12)
    });
  
    test('regexp - numberic - rounding-decimal - long', () => {
      expect(numberic(123.54)).toEqual(123.54)
      expect(numberic(-123.5456)).toEqual(-123.55)
      expect(numberic(-123.125)).toEqual(-123.13)
      expect(numberic(-123.1245, 3)).toEqual(-123.125)
      expect(numberic(-123.0257)).toEqual(-123.03)
      expect(numberic(-123.9257)).toEqual(-123.93)
      expect(numberic(-123.8057)).toEqual(-123.81)
      expect(numberic(-123.017)).toEqual(-123.02)
      expect(numberic(-1.01709820845050)).toEqual(-1.02)
      expect(numberic(-10170982084505.4077845745457457)).toEqual(-10170982084505.41)
    });
  
    test('regexp - numberic - rounding-decimal-options', () => {
      expect(numberic(123.54, 1)).toEqual(123.5)
      expect(numberic(123.5446, 3)).toEqual(123.545)
      expect(numberic(-123.1445, 3)).toEqual(-123.145)
      expect(numberic(-123.1455, 2)).toEqual(-123.15)
      expect(numberic(123.1245, 0)).toEqual(123)
      expect(numberic(-123.5257, 0)).toEqual(-124)
      expect(numberic(-123.9257, -1)).toEqual(-123.93)
    });
  
    test('regexp - numberic - rounding-decimal2', () => {
      expect(numberic(123.5456)).toEqual(123.55)
    });
  
    test('regexp - numberic - negative-string-int', () => {
      expect(numberic('-123')).toEqual(-123.00)
    });
  
    test('regexp - numberic - negative-string-decimal', () => {
      expect(numberic('-123.13')).toEqual(-123.13)
    });
  
    test('regexp - numberic - negative-rounding-string-decimal', () => {
      expect(numberic('-123.5456')).toEqual(-123.55)
      expect(numberic('-123.125')).toEqual(-123.13)
      expect(numberic('-123.1245', 3)).toEqual(-123.125)
      expect(numberic('-123.0257')).toEqual(-123.03)
      expect(numberic('-123.9257')).toEqual(-123.93)
      expect(numberic('-123.8057')).toEqual(-123.81)
      expect(numberic('-123.017')).toEqual(-123.02)
      expect(numberic('-1.01709820845050')).toEqual(-1.02)
      expect(numberic('-10170982084505.407784574545745723')).toEqual(-10170982084505.41)
    });
  
    test('regexp - numberic - negative-rounding-decimal-options', () => {
      expect(numberic('123.54', 1)).toEqual(123.5)
      expect(numberic('123.5446', 3)).toEqual(123.545)
      expect(numberic('-123.1445', 3)).toEqual(-123.145)
      expect(numberic('-123.1455', 2)).toEqual(-123.15)
      expect(numberic('0.0000000001', 2)).toEqual(0.00)
      expect(numberic('9.405', 2)).toEqual(9.41)
      expect(numberic('9.405', 3)).toEqual(9.405)
      expect(numberic('9.405', 4)).toEqual(9.405)
      expect(numberic('123.1245', 0)).toEqual(123)
      expect(numberic('-123.5257', 0)).toEqual(-124)
      expect(numberic('-123.9257', -1)).toEqual(-123.93)
    });

    test('regexp - numberFormat - places-decimal-options', () => {
      expect(numberFormat('123', 0, 3)).toEqual('123.000')
      expect(numberFormat('123.45', 1)).toEqual('123.5')
      expect(numberFormat('123.4', 3, 3)).toEqual('123.400')
      expect(numberFormat('123.1235', 3)).toEqual('123.124')
      expect(numberFormat('0.1235', 3)).toEqual('0.124')
      expect(numberFormat('-0.1235', 3)).toEqual('-0.124')
      expect(numberFormat('9.405')).toEqual('9.41')
    });

    test('regexp - moneyFormat - places-decimal-options', () => {
      expect(moneyFormat('123000.1235')).toEqual('123,000.12')
      expect(moneyFormat('123000.125')).toEqual('123,000.13')
      expect(moneyFormat('123000.4', 3, 3)).toEqual('123,000.400')
      expect(moneyFormat('123000.1235', 3)).toEqual('123,000.124')
      expect(moneyFormat('123', 0)).toEqual('123')
      expect(moneyFormat('123.45', 1)).toEqual('123.5')
      expect(moneyFormat('0.1235', 3)).toEqual('0.124')
      expect(moneyFormat('-0.1235', 3)).toEqual('-0.124')
      expect(moneyFormat('9.405')).toEqual('9.41')
    });

    test('regexp - signFormat - places-decimal-options', () => {
      expect(signFormat('123.1235')).toEqual('+123.1235')
      expect(signFormat(123.1235)).toEqual('+123.1235')
      expect(signFormat('0.1235')).toEqual('+0.1235')
      expect(signFormat(0.1235)).toEqual('+0.1235')
      expect(signFormat('-0.1235')).toEqual('-0.1235')
      expect(signFormat(-0.1235)).toEqual('-0.1235')
      expect(signFormat(-0.57)).toEqual('-0.57')
      expect(signFormat()).toEqual('')
      expect(signFormat('F123.4')).toEqual('')
      expect(signFormat('F123.4', '--')).toEqual('--')
    });
  
    test('regexp - numberic - negative int', () => {
      expect(numberic(-123)).toEqual(-123.00)
    });
  
    test('regexp - numberic - negative decimal', () => {
      expect(numberic(-123.12)).toEqual(-123.12)
    });
  
    test('regexp - numberic - special number', () => {
      expect(numberic(Number.EPSILON)).toEqual(0)
      expect(numberic(Number.MAX_VALUE)).toEqual(Infinity)
      expect(numberic(Number.MIN_VALUE)).toEqual(0)
      expect(numberic(Number.NaN)).toEqual(void 0)
      expect(numberic(Math.PI)).toEqual(3.14)
    })
  })

  test('Math - guid', () => {
    const id = guid()
    const id16 = guid(16)
    expect(id.length).toEqual(8)
    expect(id16.length).toEqual(16)
    expect(/[a-z0-9]{8}/.test(id)).toBeTruthy()
  })

  test('Math - hash', () => {
    const hs = hash()
    expect(/[a-z0-9]{1,}/.test(hs)).toBeTruthy()
  })

})