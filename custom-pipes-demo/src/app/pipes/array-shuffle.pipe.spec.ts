import { ArrayShufflePipe } from './array-shuffle.pipe';

describe('ArrayShufflePipe', () => {
  it('create an instance', () => {
    const pipe = new ArrayShufflePipe();
    expect(pipe).toBeTruthy();
  });

  it('should transform', () => {
    const pipe = new ArrayShufflePipe();
    expect(pipe.transform([])).toEqual([]);
    expect(pipe.transform([1, 2, 3]).sort()).toEqual([1, 2, 3].sort());
    expect(pipe.transform(['a', 'b', 'c']).sort()).toEqual(['a', 'b', 'c'].sort());
    // @ts-ignore
    expect(pipe.transform(null)).toEqual(null);
    // @ts-ignore
    expect(pipe.transform(undefined)).toEqual(undefined);
  });
});
