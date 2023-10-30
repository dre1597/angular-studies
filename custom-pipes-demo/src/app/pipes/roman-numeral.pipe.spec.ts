import { RomanNumeralPipe } from './roman-numeral.pipe';

describe('RomanNumeralPipe', () => {
  it('create an instance', () => {
    const pipe = new RomanNumeralPipe();
    expect(pipe).toBeTruthy();
  });

  it('should transform', () => {
    const pipe = new RomanNumeralPipe();
    expect(pipe.transform(0)).toEqual('');
    expect(pipe.transform(1)).toEqual('I');
    expect(pipe.transform(2)).toEqual('II');
    expect(pipe.transform(3)).toEqual('III');
    expect(pipe.transform(4)).toEqual('IV');
    expect(pipe.transform(5)).toEqual('V');
    expect(pipe.transform(6)).toEqual('VI');
    expect(pipe.transform(7)).toEqual('VII');
    expect(pipe.transform(8)).toEqual('VIII');
    expect(pipe.transform(9)).toEqual('IX');
    expect(pipe.transform(10)).toEqual('X');
    expect(pipe.transform(11)).toEqual('XI');
    expect(pipe.transform(15)).toEqual('XV');
    expect(pipe.transform(19)).toEqual('XIX');
    expect(pipe.transform(20)).toEqual('XX');
    expect(pipe.transform(46)).toEqual('XLVI');
    expect(pipe.transform(51)).toEqual('LI');
    expect(pipe.transform(95)).toEqual('XCV');
    expect(pipe.transform(107)).toEqual('CVII');
    expect(pipe.transform(999)).toEqual('CMXCIX');
    expect(pipe.transform(1000)).toEqual('M');
    expect(pipe.transform(1001)).toEqual('MI');
    expect(pipe.transform(1984)).toEqual('MCMLXXXIV');
    // @ts-ignore
    expect(pipe.transform(null)).toEqual('');
    // @ts-ignore
    expect(pipe.transform(undefined)).toEqual('');
  });
});
