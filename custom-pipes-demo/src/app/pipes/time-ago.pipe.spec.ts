import { TimeAgoPipe } from './time-ago.pipe';
import { subDays, subHours, subMinutes, subMonths } from 'date-fns';

describe('TimeAgoPipe', () => {
  it('create an instance', () => {
    const pipe = new TimeAgoPipe();
    expect(pipe).toBeTruthy();
  });

  it('should transform', () => {
    const pipe = new TimeAgoPipe();
    expect(pipe.transform(0)).toEqual('');
    expect(pipe.transform(new Date())).toEqual('less than a minute ago');
    expect(pipe.transform(subMinutes(new Date(), 1))).toEqual('1 minute ago');
    expect(pipe.transform(subMinutes(new Date(), 2))).toEqual('2 minutes ago');
    expect(pipe.transform(subHours(new Date(), 1))).toEqual('about 1 hour ago');
    expect(pipe.transform(subHours(new Date(), 2))).toEqual('about 2 hours ago');
    expect(pipe.transform(subDays(new Date(), 1))).toEqual('1 day ago');
    expect(pipe.transform(subDays(new Date(), 2))).toEqual('2 days ago');
    expect(pipe.transform(subMonths(new Date(), 1))).toEqual('about 1 month ago');
    expect(pipe.transform(subMonths(new Date(), 2))).toEqual('2 months ago');
    // @ts-ignore
    expect(pipe.transform(null)).toEqual('');
    // @ts-ignore
    expect(pipe.transform(undefined)).toEqual('');
  })
});
