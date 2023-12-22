import { isPrime } from '../src/isPrime';

describe('isPrime function', () => {
  it('should return true if number is a prime number', () => {
    expect(isPrime(2)).toBe(true);
    expect(isPrime(5)).toBe(true);
    expect(isPrime(11)).toBe(true);
  });

  it('should return false if number is not a prime number', () => {
    expect(isPrime(1)).toBe(false);
    expect(isPrime(6)).toBe(false);
    expect(isPrime(10)).toBe(false);

  });

  it('should return false if number is a negative number', () => {
    expect(isPrime(-2)).toBe(false);
  });

  it('should return false if number is not an integer', () => {
    expect(isPrime(2.5)).toBe(false);
    expect(isPrime(-3.3)).toBe(false);
  });
});
