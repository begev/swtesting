import { expect } from 'chai';
import countBy from '../library/src/countBy.js';

describe('countBy', () => {
    it('should return an empty object for null input', () => {
        const result = countBy(null, () => true);
        expect(result).to.deep.equal({});
    });

    it('should count elements by a predicate', () => {
        const array = [1.2, 2.3, 3.4];
        const predicate = Math.floor;
        const result = countBy(array, predicate);
        expect(result).to.deep.equal({ '1': 1, '2': 1, '3': 1 });
    });

    it('should count elements by identity if no predicate is provided', () => {
        const array = [1, 2, 2, 3, 3, 3];
        const result = countBy(array);
        expect(result).to.deep.equal({ '1': 1, '2': 2, '3': 3 });
    });

    it('should ignore undefined return values from predicate', () => {
        const array = [1, 2, 3];
        const predicate = (value) => value > 2 ? value : undefined;
        const result = countBy(array, predicate);
        expect(result).to.deep.equal({ '3': 1 });
    });

    it('should pass three arguments to the predicate', () => {
        const array = [1];
        const predicate = (value, index, arr) => {
            expect(value).to.equal(1);
            expect(index).to.equal(0);
            expect(arr).to.deep.equal([1]);
            return true;
        };
        countBy(array, predicate);
    });
});