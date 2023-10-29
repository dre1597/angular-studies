import { StripHtmlTagsPipe } from './strip-html-tags.pipe';

describe('StripHtmlTagsPipe', () => {
  it('create an instance', () => {
    const pipe = new StripHtmlTagsPipe();
    expect(pipe).toBeTruthy();
  });

  it('should transform', () => {
    const pipe = new StripHtmlTagsPipe();
    expect(pipe.transform('')).toEqual('');
    expect(pipe.transform('<p>This is <b>HTML</b> text</p>')).toEqual('This is HTML text');
    expect(pipe.transform('<p>This is <b>HTML</b> text</p><p>This is <b>HTML</b> text</p>')).toEqual('This is HTML textThis is HTML text');
    expect(pipe.transform(
      '<table><tr><th>Head 1</th><th>Head 2</th><th>Head 3</th></tr><tr><td>Cell 1</td><td>Cell 2</td><td>Cell 3</td></td></tr></table>'
    )).toEqual('Head 1Head 2Head 3Cell 1Cell 2Cell 3');
    // @ts-ignore
    expect(pipe.transform(null)).toEqual('');
    // @ts-ignore
    expect(pipe.transform(undefined)).toEqual('');
  })
});
