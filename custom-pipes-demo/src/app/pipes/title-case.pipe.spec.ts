import { TitleCasePipe } from './title-case.pipe';

describe('TitleCasePipe', () => {
  it('create an instance', () => {
    const pipe = new TitleCasePipe();
    expect(pipe).toBeTruthy();
  });

  it('should transform', () => {
    const pipe = new TitleCasePipe();
    expect(pipe.transform('')).toEqual('');
    expect(pipe.transform('this is a title case example')).toEqual('This Is A Title Case Example');
    expect(pipe.transform('This Is A Title Case Example')).toEqual('This Is A Title Case Example');
    expect(pipe.transform('THIS IS A TITLE CASE EXAMPLE')).toEqual('This Is A Title Case Example');
    // @ts-ignore
    expect(pipe.transform(null)).toEqual('');
    // @ts-ignore
    expect(pipe.transform(undefined)).toEqual('');
  })
});
