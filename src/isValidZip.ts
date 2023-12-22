export function isValidZip(zip: string): boolean {
    const zipPattern = /^\d{5}$/;
    return zipPattern.test(zip);
  }
