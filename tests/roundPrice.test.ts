import { roundPrice } from '../src/roundPrice';

describe('roundPrice function', () => {
    it('should round up a decimal price to two decimal places with default pattern', () => {
        const result = roundPrice(232.10542);
        expect(result).toBe('232.11 SEK');
    });

    it('should round up a decimal price to two decimal places with default pattern', () => {
        const result = roundPrice(1024.2048);
        expect(result).toBe('1024.20 SEK');
    });

    it('should round up an integer price to two decimal places with default pattern', () => {
        const result = roundPrice(14);
        expect(result).toBe('14.00 SEK');
    });

    it('should round up an integer price to two decimal places with pattern and currency', () => {
        const result = roundPrice(232.10542, '%PRICE% kr');
        expect(result).toBe('232.11 kr');
    });


    it('should round up a decimal price to two decimal places with pattern and currency', () => {
        const result = roundPrice(14, '$%PRICE%');
        expect(result).toBe('$14.00');
    });

    it('should round up a decimal price to two decimal places with pattern and currency', () => {
        const result = roundPrice(1024.2048, 'USD %PRICE%');
        expect(result).toBe('USD 1024.20');
    });
});
