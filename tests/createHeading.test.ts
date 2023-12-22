import { createHeading } from '../src/createHeading';

describe('makeHeading function', () => {
  it('should create a h1 heading with the given text', () => {
    const result = createHeading('Hello World! 1', 1);
    expect(result).toBe('<h1>Hello World! 1</h1>');
  });

  it('should create a h2 heading with the given text', () => {
    const result = createHeading('Hello World! 2', 2);
    expect(result).toBe('<h2>Hello World! 2</h2>');
  });

  it('should throw an error if heading level is invalid', () => {
    expect(() => createHeading('Invalid Heading', 7)).toThrow(/Heading level must be between 1 and 6/);

});
});
