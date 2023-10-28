import { UppercaseFirstPipe } from './uppercase-first.pipe';

describe('UppercaseFirstPipe', () => {
  it('create an instance', () => {
    const pipe = new UppercaseFirstPipe();
    expect(pipe).toBeTruthy();
  });

  it('should transform', () => {
    const pipe = new UppercaseFirstPipe();
    expect(pipe.transform('hello')).toEqual('Hello');
    expect(pipe.transform('HELLO')).toEqual('Hello');
    expect(pipe.transform('Hello')).toEqual('Hello');
    expect(pipe.transform('hello world')).toEqual('Hello world');
    expect(pipe.transform('HELLO WORLD')).toEqual('Hello world');
    expect(pipe.transform('Hello World')).toEqual('Hello world');
    expect(pipe.transform('')).toEqual('');
    // @ts-ignore
    expect(pipe.transform(null)).toEqual(null);
    // @ts-ignore
    expect(pipe.transform(undefined)).toEqual(undefined);
  })
});
