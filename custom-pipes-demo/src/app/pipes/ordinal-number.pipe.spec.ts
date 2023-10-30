import { OrdinalNumberPipe } from './ordinal-number.pipe';

describe('OrdinalNumberPipe', () => {
  it('create an instance', () => {
    const pipe = new OrdinalNumberPipe();
    expect(pipe).toBeTruthy();
  });

  it('should transform', () => {
    const pipe = new OrdinalNumberPipe();
    expect(pipe.transform(0)).toEqual('0th');
    expect(pipe.transform(1)).toEqual('1st');
    expect(pipe.transform(22)).toEqual('22nd');
    expect(pipe.transform(7)).toEqual('7th');
    expect(pipe.transform(13)).toEqual('13th');
  })
});
