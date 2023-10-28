import { CurrencyConverterPipe } from './currency-converter.pipe';

describe('CurrencyConverterPipe', () => {
  it('create an instance', () => {
    const pipe = new CurrencyConverterPipe();
    expect(pipe).toBeTruthy();
  });

  it('should transform', () => {
    const pipe = new CurrencyConverterPipe();

    expect(pipe.transform(100, 1.2)).toBe(120);
    expect(pipe.transform(100, 1.5)).toBe(150);
    expect(pipe.transform(100, 1.8)).toBe(180);
    expect(pipe.transform(100, 2)).toBe(200);
    expect(pipe.transform(0, 2)).toBe(0);
    //@ts-ignore
    expect(pipe.transform(null, null)).toEqual(0);
    //@ts-ignore
    expect(pipe.transform(undefined, undefined)).toEqual(undefined);
  })
});
