import { FileSizePipe } from './file-size.pipe';

describe('FileSizePipe', () => {
  it('create an instance', () => {
    const pipe = new FileSizePipe();
    expect(pipe).toBeTruthy();
  });

  it('should transform', () => {
    const pipe = new FileSizePipe();
    expect(pipe.transform(0)).toEqual('0 Bytes');
    expect(pipe.transform(1)).toEqual('1 Bytes');
    expect(pipe.transform(500)).toEqual('500 Bytes');
    expect(pipe.transform(1024)).toEqual('1 KB');
    expect(pipe.transform(1024 + 1024)).toEqual('2 KB');
    expect(pipe.transform(1024 * 1024)).toEqual('1 MB');
    expect(pipe.transform(1024 * 1024 * 1024)).toEqual('1 GB');
    expect(pipe.transform(1024 * 1024 * 1024 * 1024)).toEqual('1 TB');
    expect(pipe.transform(1024 * 1024 * 1024 * 1024 * 1024)).toEqual('1 PB');
    expect(pipe.transform(1024 * 1024 * 1024 * 1024 * 1024 * 1024)).toEqual('1 EB');
    // @ts-ignore
    expect(pipe.transform(null)).toEqual('0 Bytes');
    // @ts-ignore
    expect(pipe.transform(undefined)).toEqual('0 Bytes');
  })
});
