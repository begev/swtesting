import add from '../library/src/add.js';
import assert from "assert";

describe('Add', () => {
    context('Add two values together', () => {
        it('should return 2', () => {
            assert.equal(add(1, 1), 2);
        });
    })
})