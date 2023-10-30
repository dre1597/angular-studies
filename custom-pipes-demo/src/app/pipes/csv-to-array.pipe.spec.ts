import { CsvToArrayPipe } from './csv-to-array.pipe';

describe('CsvToArrayPipe', () => {
  it('create an instance', () => {
    const pipe = new CsvToArrayPipe();
    expect(pipe).toBeTruthy();
  });

  it('should transform', () => {
    const pipe = new CsvToArrayPipe();
    expect(pipe.transform('')).toEqual([]);
    expect(pipe.transform('hello,world')).toEqual(['hello', 'world']);
    expect(pipe.transform('hello world')).toEqual(['hello world']);
    // @ts-ignore
    expect(pipe.transform(null)).toEqual([]);
    // @ts-ignore
    expect(pipe.transform(undefined)).toEqual([]);
  })
});
