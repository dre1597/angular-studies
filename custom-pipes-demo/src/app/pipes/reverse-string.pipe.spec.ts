import { ReverseStringPipe } from './reverse-string.pipe';

describe('ReverseStringPipe', () => {
  it('create an instance', () => {
    const pipe = new ReverseStringPipe();
    expect(pipe).toBeTruthy();
  });

  it('should transform', () => {
    const pipe = new ReverseStringPipe();
    expect(pipe.transform('hello')).toEqual('olleh');
    expect(pipe.transform('HELLO')).toEqual('OLLEH');
    expect(pipe.transform('Hello')).toEqual('olleH');
    expect(pipe.transform('hello world')).toEqual('dlrow olleh');
    expect(pipe.transform('HELLO WORLD')).toEqual('DLROW OLLEH');
    expect(pipe.transform('Hello World')).toEqual('dlroW olleH');
    expect(pipe.transform('')).toEqual('');
    // @ts-ignore
    expect(pipe.transform(null)).toEqual(null);
    // @ts-ignore
    expect(pipe.transform(undefined)).toEqual(undefined);
  })
});
