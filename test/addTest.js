import { expect } from 'chai';
import add from '../library/src/add.js';

describe('add.js tests', () => {
    it('should return the sum of two numbers', () => {
        const num1 = 1;
        const num2 = 2;
        const expectedOutput = 3;

        const result = add(num1, num2);

        expect(result).to.equal(expectedOutput);
    });

    it('should return the sum even if one of the numbers is negative', () => {
        const num1 = -1;
        const num2 = 2;
        const expectedOutput = 1;

        const result = add(num1, num2);

        expect(result).to.equal(expectedOutput);
    });
});