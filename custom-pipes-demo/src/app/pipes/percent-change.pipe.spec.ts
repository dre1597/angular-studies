import { PercentChangePipe } from './percent-change.pipe';

describe('PercentChangePipe', () => {
  it('create an instance', () => {
    const pipe = new PercentChangePipe();
    expect(pipe).toBeTruthy();
  });

  it('should transform', () => {
    const pipe = new PercentChangePipe();
    expect(pipe.transform(0, 0)).toEqual('0.00%');
    expect(pipe.transform(0, 1)).toEqual('-100.00%');
    expect(pipe.transform(1, 1)).toEqual('0.00%');
    expect(pipe.transform(1, 0)).toEqual('+100.00%');
    expect(pipe.transform(25, 50)).toEqual('-50.00%');
    expect(pipe.transform(85, 100)).toEqual('-15.00%');
    expect(pipe.transform(100, 85)).toEqual('+17.65%');
    // @ts-ignore
    expect(pipe.transform(null)).toEqual('');
    // @ts-ignore
    expect(pipe.transform(undefined)).toEqual('');
  })
});
