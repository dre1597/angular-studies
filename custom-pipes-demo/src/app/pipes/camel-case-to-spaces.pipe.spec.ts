import { CamelCaseToSpacesPipe } from './camel-case-to-spaces.pipe';

describe('CamelCaseToSpacesPipe', () => {
  it('create an instance', () => {
    const pipe = new CamelCaseToSpacesPipe();
    expect(pipe).toBeTruthy();
  });

  it('should transform', () => {
    const pipe = new CamelCaseToSpacesPipe();
    expect(pipe.transform('')).toEqual('');
    expect(pipe.transform('camelCaseExample')).toEqual('camel Case Example');
    expect(pipe.transform('CamelCaseExample')).toEqual('Camel Case Example');
    // @ts-ignore
    expect(pipe.transform(null)).toEqual('');
    // @ts-ignore
    expect(pipe.transform(undefined)).toEqual('');
  })
});
