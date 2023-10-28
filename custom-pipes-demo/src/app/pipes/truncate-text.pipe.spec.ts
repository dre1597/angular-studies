import { TruncateTextPipe } from './truncate-text.pipe';

describe('TruncateTextPipe', () => {
  it('create an instance', () => {
    const pipe = new TruncateTextPipe();
    expect(pipe).toBeTruthy();
  });

  it('should transform', () => {
    const pipe = new TruncateTextPipe();
    expect(pipe.transform('hello', 5)).toEqual('hello');
    expect(pipe.transform('hello world', 5)).toEqual('hello...');
    expect(pipe.transform('', 10)).toEqual('');
    // @ts-ignore
    expect(pipe.transform(null, 10)).toEqual(null);
    // @ts-ignore
    expect(pipe.transform(undefined, 10)).toEqual(undefined);
  })
});
