import { UrlifyPipe } from './urlify.pipe';

describe('UrlifyPipe', () => {
  it('create an instance', () => {
    const pipe = new UrlifyPipe();
    expect(pipe).toBeTruthy();
  });

  it('should transform', () => {
    const pipe = new UrlifyPipe();
    expect(pipe.transform('')).toEqual('');
    expect(pipe.transform('This is a URL-friendly title!')).toEqual('this-is-a-url-friendly-title');
    // @ts-ignore
    expect(pipe.transform(null)).toEqual('');
    // @ts-ignore
    expect(pipe.transform(undefined)).toEqual('');
  })
});
