import { isValidZip } from '../src/isValidZip';

describe('isValidZip function', () => {
    it('should return true if zip code is valid', () => {
        const validZip = '12345';
        const isValid = isValidZip(validZip);
        expect(isValid).toBe(true);
    });

    it('should return false if zip code is less than 5 digits', () => {
        const invalidZip = '1234';
        const isValid = isValidZip(invalidZip);
        expect(isValid).toBe(false);
    });

    it('should return false for if zip code is more than 5 digits', () => {
        const invalidZip = '123456';
        const isValid = isValidZip(invalidZip);
        expect(isValid).toBe(false);
    });

    it('should return false if zip code is not a number', () => {
        const invalidZip = 'abcde';
        const isValid = isValidZip(invalidZip);
        expect(isValid).toBe(false);
    });
});
