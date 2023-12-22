export function roundPrice(price: number, pattern: string = '%PRICE% %CURRENCY%'): string {
    const roundedPrice = price.toFixed(2);
    return pattern.replace('%PRICE%', roundedPrice).replace('%CURRENCY%', 'SEK');
}
