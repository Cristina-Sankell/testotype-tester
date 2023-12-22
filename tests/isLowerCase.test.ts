import { isLowerCase } from '../src/isLowerCase';

describe('isLowerCase function', () => {
  it('should return true if input contains lowercase letters only', () => {
    const result = isLowerCase('abcdefg');
    expect(result).toBe(true);
  });

  it('should return false if input contains any uppercase letters', () => {
    const result = isLowerCase('abcDefg');
    expect(result).toBe(false);
  });

  it('should return false if input is an empty string', () => {
    const result = isLowerCase('');
    expect(result).toBe(false);
  });

  it('should return false if input contains any special characters or numbers', () => {
    const result = isLowerCase('abcdefg123!@#');
    expect(result).toBe(false);
  });
});
