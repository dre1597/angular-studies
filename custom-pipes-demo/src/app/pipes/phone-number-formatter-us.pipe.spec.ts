import { PhoneNumberFormatterUsPipe } from './phone-number-formatter-us.pipe';

describe('PhoneNumberFormatterUsPipe', () => {
  it('create an instance', () => {
    const pipe = new PhoneNumberFormatterUsPipe();
    expect(pipe).toBeTruthy();
  });

  it('should transform', () => {
    const pipe = new PhoneNumberFormatterUsPipe();
    expect(pipe.transform('1234567890')).toEqual('(123) 456-7890');
    expect(pipe.transform('123-456-7890')).toEqual('(123) 456-7890');
    expect(pipe.transform('123.456.7890')).toEqual('(123) 456-7890');
    expect(pipe.transform('123 456 7890')).toEqual('(123) 456-7890');
    expect(pipe.transform('(123) 456-7890')).toEqual('(123) 456-7890');
    expect(pipe.transform('123-456-7890')).toEqual('(123) 456-7890');
    expect(pipe.transform('123123123123')).toEqual('123123123123');
    expect(pipe.transform('')).toEqual('');
    // @ts-ignore
    expect(pipe.transform(null)).toEqual(null);
    // @ts-ignore
    expect(pipe.transform(undefined)).toEqual(undefined);

  })
});
