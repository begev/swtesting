import { expect } from 'chai';
import ceil from '../library/src/ceil.js';

describe('ceil.js tests', () => {
    it('should round up a number without precision', () => {
        const num = 4.006;
        const expectedOutput = 5;

        const result = ceil(num);

        expect(result).to.equal(expectedOutput);
    });

    it('should round up a number with precision', () => {
        const num = 6.004;
        const precision = 2;
        const expectedOutput = 6.01;

        const result = ceil(num, precision);

        expect(result).to.equal(expectedOutput);
    });

    it('should round up a number with negative precision', () => {
        const num = 6040;
        const precision = -2;
        const expectedOutput = 6100;

        const result = ceil(num, precision);

        expect(result).to.equal(expectedOutput);
    });
});