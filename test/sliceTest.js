import { expect } from 'chai';
import slice from '../library/src/slice.js';

describe('slice', () => {
    it('should return an empty array for null input', () => {
        const result = slice(null, 0, 2);
        expect(result).to.deep.equal([]);
    });

    it('should slice an array from start index to end index', () => {
        const array = [1, 2, 3, 4, 5];
        const result = slice(array, 1, 3);
        expect(result).to.deep.equal([2, 3]);
    });

    it('should slice an array from start index to the end of the array if end index is not provided', () => {
        const array = [1, 2, 3, 4, 5];
        const result = slice(array, 2);
        expect(result).to.deep.equal([3, 4, 5]);
    });

    it('should return an empty array if start index is greater than array length', () => {
        const array = [1, 2, 3, 4, 5];
        const result = slice(array, 10);
        expect(result).to.deep.equal([]);
    });

    it('should handle negative start and end indices', () => {
        const array = [1, 2, 3, 4, 5];
        const result = slice(array, -3, -1);
        expect(result).to.deep.equal([3, 4]);
    });
});