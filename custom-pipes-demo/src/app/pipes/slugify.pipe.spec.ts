import { SlugifyPipe } from './slugify.pipe';

describe('SlugifyPipePipe', () => {
  it('create an instance', () => {
    const pipe = new SlugifyPipe();
    expect(pipe).toBeTruthy();
  });

  it('should transform', () => {
    const pipe = new SlugifyPipe();
    expect(pipe.transform('')).toEqual('');
    expect(pipe.transform('this is a sentence. this is another. the third.')).toEqual('this-is-a-sentence-this-is-another-the-third');
    // @ts-ignore
    expect(pipe.transform(null)).toEqual('');
    // @ts-ignore
    expect(pipe.transform(undefined)).toEqual('');
  })
});
