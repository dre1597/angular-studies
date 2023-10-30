import { MaskedInputPipe } from './masked-input.pipe';

describe('MaskedInputPipe', () => {
  it('create an instance', () => {
    const pipe = new MaskedInputPipe();
    expect(pipe).toBeTruthy();
  });

  it('should transform', () => {
    const pipe = new MaskedInputPipe();
    expect(pipe.transform('', '(***) ***-****')).toEqual('');
    expect(pipe.transform('1234567890', '(***) ***-****')).toEqual('(123) 456-7890');
    expect(pipe.transform('1234', '**-**')).toEqual('12-34');
    expect(pipe.transform('1234567890', '**-**')).toEqual('12-34');
    // @ts-ignore
    expect(pipe.transform(null)).toEqual(null);
    // @ts-ignore
    expect(pipe.transform(undefined)).toEqual(undefined);
  })
});
