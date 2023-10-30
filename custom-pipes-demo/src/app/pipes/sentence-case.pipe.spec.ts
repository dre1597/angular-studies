import { SentenceCasePipe } from './sentence-case.pipe';

describe('SentenceCasePipe', () => {
  it('create an instance', () => {
    const pipe = new SentenceCasePipe();
    expect(pipe).toBeTruthy();
  });

  it('should transform', () => {
    const pipe = new SentenceCasePipe();
    expect(pipe.transform('')).toEqual('');
    expect(pipe.transform('this is a sentence. this is another. the third.')).toEqual('This is a sentence. This is another. The third.');
    // @ts-ignore
    expect(pipe.transform(null)).toEqual('');
    // @ts-ignore
    expect(pipe.transform(undefined)).toEqual('');
  });
});
