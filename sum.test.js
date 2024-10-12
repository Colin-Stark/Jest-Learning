/**
 * Import the sum function from the sum.js file
 */
const addition = require('./sum');

/**
 * Jest test suite for the sum function
 */
describe('Addition', () => {
    test(`check that 1 + 2 is not '3'`, () => {
        expect(addition(1, 2)).not.toBe('3');
    });
    test(`check that 1 + 2 is 3`, () => {
        expect(addition(1, 2)).toBe(3);
    });
});

test('null', () => {
    const n = null;
    expect(n).toBeNull();
    expect(n).toBeDefined();
    expect(n).not.toBeUndefined();
    expect(n).not.toBeTruthy();
    expect(n).toBeFalsy();
});

test('zero', () => {
    const z = 0;
    expect(z).not.toBeNull();
    expect(z).toBeDefined();
    expect(z).not.toBeUndefined();
    expect(z).not.toBeTruthy();
    expect(z).toBeFalsy();
});