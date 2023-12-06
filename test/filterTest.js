import { expect } from 'chai';
import filter from '../library/src/filter.js';

describe('filter', () => {
    it('should return an empty array for null input', () => {
        const result = filter(null, () => true);
        expect(result).to.deep.equal([]);
    });

    it('should filter out non-matching elements', () => {
        const array = [1, 2, 3, 4, 5];
        const predicate = (value) => value % 2 === 0;
        const result = filter(array, predicate);
        expect(result).to.deep.equal([2, 4]);
    });

    it('should return an empty array if no elements match', () => {
        const array = [1, 2, 3, 4, 5];
        const predicate = (value) => value > 10;
        const result = filter(array, predicate);
        expect(result).to.deep.equal([]);
    });

    it('should return all elements if all elements match', () => {
        const array = [1, 2, 3, 4, 5];
        const predicate = (value) => value > 0;
        const result = filter(array, predicate);
        expect(result).to.deep.equal([1, 2, 3, 4, 5]);
    });

    it('should pass three arguments to the predicate', () => {
        const array = [1];
        const predicate = (value, index, arr) => {
            expect(value).to.equal(1);
            expect(index).to.equal(0);
            expect(arr).to.deep.equal([1]);
            return true;
        };
        filter(array, predicate);
    });
});