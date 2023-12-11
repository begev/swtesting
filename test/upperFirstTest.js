import { expect } from 'chai';
import upperFirst from '../library/src/upperFirst.js';

describe('upperFirst.js tests', () => {
    it('should convert the first character of a lowercase string to uppercase', () => {
        const str = 'fred';
        const expectedOutput = 'Fred';

        const result = upperFirst(str);

        expect(result).to.equal(expectedOutput);
    });

    it('should not change the string if the first character is already uppercase', () => {
        const str = 'FRED';
        const expectedOutput = 'FRED';

        const result = upperFirst(str);

        expect(result).to.equal(expectedOutput);
    });

    it('should handle an empty string', () => {
        const str = '';
        const expectedOutput = '';

        const result = upperFirst(str);

        expect(result).to.equal(expectedOutput);
    });

    it('should handle a string with special characters', () => {
        const str = '!fred';
        const expectedOutput = '!fred';

        const result = upperFirst(str);

        expect(result).to.equal(expectedOutput);
    });
});