import { ColorContrastPipe } from './color-contrast.pipe';

describe('ColorContrastPipe', () => {
  it('create an instance', () => {
    const pipe = new ColorContrastPipe();
    expect(pipe).toBeTruthy();
  });

  it('should transform', () => {
    const pipe = new ColorContrastPipe();
    expect(pipe.transform('')).toEqual('');
    expect(pipe.transform('#000000')).toEqual('white');
    expect(pipe.transform('#FFFFFF')).toEqual('black');
    expect(pipe.transform('#FF0000')).toEqual('white');
    expect(pipe.transform('#00FF00')).toEqual('black');
    expect(pipe.transform('#0000FF')).toEqual('white');
    expect(pipe.transform('#00FFFF')).toEqual('black');
    expect(pipe.transform('#FFFF00')).toEqual('black');
    expect(pipe.transform('#FF00FF')).toEqual('white');
    // @ts-ignore
    expect(pipe.transform(null)).toEqual('');
    // @ts-ignore
    expect(pipe.transform(undefined)).toEqual('');
  })
});
