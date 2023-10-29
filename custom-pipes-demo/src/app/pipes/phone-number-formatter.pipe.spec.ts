import { PhoneNumberFormatterPipe } from './phone-number-formatter.pipe';

describe('PhoneNumberFormatterPipe', () => {
  it('create an instance', () => {
    const pipe = new PhoneNumberFormatterPipe();
    expect(pipe).toBeTruthy();
  });

  it('should transform', () => {
    const pipe = new PhoneNumberFormatterPipe();
    expect(pipe.transform('1133224455')).toEqual('(11) 3322-4455');
    expect(pipe.transform('21 88776655')).toEqual('(21) 8877-6655');
    expect(pipe.transform('(85)33224455')).toEqual('(85) 3322-4455');
    expect(pipe.transform('853322-4455')).toEqual('(85) 3322-4455');
    expect(pipe.transform('85988776655')).toEqual('(85) 98877-6655');
    expect(pipe.transform('55859 88776655')).toEqual('+55 (85) 98877-6655');
    expect(pipe.transform('55(85)988776655')).toEqual('+55 (85) 98877-6655');
    expect(pipe.transform('5585988776655')).toEqual('+55 (85) 98877-6655');
    expect(pipe.transform('')).toEqual('Invalid Format');
    // @ts-ignore
    expect(pipe.transform(null)).toEqual('Invalid Format');
    // @ts-ignore
    expect(pipe.transform(undefined)).toEqual('Invalid Format');
  })
});
