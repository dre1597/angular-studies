import { JsonPrettyPrintPipe } from './json-pretty-print.pipe';

describe('JsonPrettyPrintPipe', () => {
  it('create an instance', () => {
    const pipe = new JsonPrettyPrintPipe();
    expect(pipe).toBeTruthy();
  });


  it('should transform', () => {
    const pipe = new JsonPrettyPrintPipe();
    expect(pipe.transform('')).toEqual('')
    expect(pipe.transform({})).toEqual('{}');
    expect(pipe.transform({ name: 'John Doe', age: 30 })).toEqual('{\n  "name": "John Doe",\n  "age": 30\n}');
    // @ts-ignore
    expect(pipe.transform(null)).toEqual('');
    // @ts-ignore
    expect(pipe.transform(undefined)).toEqual('');

  })
});
