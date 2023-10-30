import { PasswordStrengthPipe } from './password-strength.pipe';

describe('PasswordStrengthPipe', () => {
  it('create an instance', () => {
    const pipe = new PasswordStrengthPipe();
    expect(pipe).toBeTruthy();
  });

  it('should transform', () => {
    const pipe = new PasswordStrengthPipe();
    expect(pipe.transform('')).toEqual('');
    expect(pipe.transform('pass')).toEqual('Weak');
    expect(pipe.transform('password')).toEqual('Medium');
    expect(pipe.transform('password123')).toEqual('Strong');
    // @ts-ignore
    expect(pipe.transform(null)).toEqual('');
    // @ts-ignore
    expect(pipe.transform(undefined)).toEqual('');
  })
});
