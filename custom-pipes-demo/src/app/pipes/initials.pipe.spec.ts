import { InitialsPipe } from './initials-pipe.pipe';

describe('InitialsPipe', () => {
  it('create an instance', () => {
    const pipe = new InitialsPipe();
    expect(pipe).toBeTruthy();
  });

  it('should transform', () => {
    const pipe = new InitialsPipe();
    expect(pipe.transform('')).toEqual('');
    expect(pipe.transform('John Doe')).toEqual('JD');
    expect(pipe.transform('John Doe John Doe')).toEqual('JDJD');
    // @ts-ignore
    expect(pipe.transform(null)).toEqual('');
    // @ts-ignore
    expect(pipe.transform(undefined)).toEqual('');
  })
});
