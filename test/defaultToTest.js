import { expect } from 'chai';
import defaultTo from '../library/src/defaultTo.js';

describe('defaultTo.js tests', () => {
    it('should return the original value when it is not null or undefined', () => {
        const input = 1;
        const defaultValue = 10;
        const expectedOutput = 1;

        const result = defaultTo(input, defaultValue);

        expect(result).to.equal(expectedOutput);
    });

    it('should return the default value when the original value is null or undefined', () => {
        const input = null;
        const defaultValue = 10;
        const expectedOutput = 10;

        const result = defaultTo(input, defaultValue);

        expect(result).to.equal(expectedOutput);
    });
});