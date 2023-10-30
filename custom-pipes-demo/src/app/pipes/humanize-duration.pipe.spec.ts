import { HumanizeDurationPipe } from './humanize-duration.pipe';

describe('HumanizeDurationPipe', () => {
  it('create an instance', () => {
    const pipe = new HumanizeDurationPipe();
    expect(pipe).toBeTruthy();
  });

  it('should transform', () => {
    const pipe = new HumanizeDurationPipe();
    expect(pipe.transform(0)).toEqual('0 minutes');
    expect(pipe.transform(1)).toEqual('0 minutes');
    expect(pipe.transform(59)).toEqual('0 minutes');
    expect(pipe.transform(60)).toEqual('1 minute');
    expect(pipe.transform(61)).toEqual('1 minute');
    expect(pipe.transform(3600)).toEqual('1 hour');
    // @ts-ignore
    expect(pipe.transform(null)).toEqual('');
    // @ts-ignore
    expect(pipe.transform(undefined)).toEqual('');
  })
});
