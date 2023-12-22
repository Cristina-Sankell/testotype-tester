export function getGenitive(name: string): string {
    if (name === '') {
      throw new Error('Name cannot be an empty string');
    }

    return name.endsWith('s') ? name : name + 's';
  }
