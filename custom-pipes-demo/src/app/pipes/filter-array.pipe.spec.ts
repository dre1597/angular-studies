import { FilterArrayPipe } from './filter-array.pipe';

describe('FilterArrayPipe', () => {
  it('create an instance', () => {
    const pipe = new FilterArrayPipe();
    expect(pipe).toBeTruthy();
  });

  it('should transform', () => {
    const pipe = new FilterArrayPipe();
    expect(pipe.transform([{ name: 'hello' }], 'name', 'hello')).toEqual([{ name: 'hello' }]);
    expect(pipe.transform([{ name: 'hello' }], 'name', 'world')).toEqual([]);
    // @ts-ignore
    expect(pipe.transform(null, null, null)).toEqual([]);
    // @ts-ignore
    expect(pipe.transform(undefined, undefined, undefined)).toEqual([]);
  });
});
