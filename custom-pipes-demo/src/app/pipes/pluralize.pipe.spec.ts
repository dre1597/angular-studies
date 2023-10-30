import { PluralizePipe } from './pluralize.pipe';

describe('PluralizePipe', () => {
  it('create an instance', () => {
    const pipe = new PluralizePipe();
    expect(pipe).toBeTruthy();
  });

  it('should transform', () => {
    const pipe = new PluralizePipe();
    expect(pipe.transform('', 1)).toEqual('');
    expect(pipe.transform('item', 1)).toEqual('item');
    expect(pipe.transform('item', 2)).toEqual('items');
    // @ts-ignore
    expect(pipe.transform(null)).toEqual('');
    // @ts-ignore
    expect(pipe.transform(undefined)).toEqual('');
  })
});
