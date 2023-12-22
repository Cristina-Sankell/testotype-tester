import { getGenitive } from '../src/getGenitive';

describe('getGenitive function', () => {
  it('should return genitive form if name ends with "s"', () => {
    expect(getGenitive('Jonas')).toBe('Jonas');
    expect(getGenitive('Lucas')).toBe('Lucas');
  });

  it('should return genitive form if name does not end with "s"', () => {
    expect(getGenitive('Maria')).toBe('Marias');
    expect(getGenitive('Sara')).toBe('Saras');
  });

  it('should throw an error if name is an empty string', () => {
    expect(() => getGenitive('')).toThrow(/Name cannot be an empty string/);
  });
});
