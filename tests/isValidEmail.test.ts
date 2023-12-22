import { isValidEmail } from '../src/isValidEmail';

describe('isValidEmail function', () => {
  it('should return true if the email adress is valid', () => {
    const validEmail = 'jonatan@gmail.com';
    const isValid = isValidEmail(validEmail);
    expect(isValid).toBe(true);
  });

  it('should return false if the email adress is missing top-level domain', () => {
    const incompleteEmail = 'jonatan@gmail';
    const isValid = isValidEmail(incompleteEmail);
    expect(isValid).toBe(false);
  });

  it('should return false if the email adress is missing @', () => {
    const invalidEmail = 'jonatan.com';
    const isValid = isValidEmail(invalidEmail);
    expect(isValid).toBe(false);
  });
});
