import { SortArrayPipe } from './sort-array.pipe';

describe('SortArrayPipe', () => {
  it('create an instance', () => {
    const pipe = new SortArrayPipe();
    expect(pipe).toBeTruthy();
  });

  it('should transform', () => {
    const pipe = new SortArrayPipe();
    expect(pipe.transform([{ name: 'hello' }, { name: 'world' }, { name: 'test' }], 'name', 'asc')).toEqual([
      { name: 'hello' },
      { name: 'test' },
      { name: 'world' }
    ])
    expect(pipe.transform([{ name: 'hello' }, { name: 'world' }, { name: 'test' }], 'name', 'desc')).toEqual([
      { name: 'world' },
      { name: 'test' },
      { name: 'hello' }
    ])
  })
});
