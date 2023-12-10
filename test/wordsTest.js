import { expect } from 'chai';
import words from '../library/src/words.js';

describe('words', () => {
    
    it('should return an empty array for null input', () => {
        const result = words(null);
        expect(result).to.deep.equal([]);
    });
    
    it('should split a string into words', () => {
        const string = 'apple banana cherry';
        const result = words(string);
        expect(result).to.deep.equal(['apple', 'banana', 'cherry']);
    });

    it('should split a string into words, not considering punctuation as part of the word', () => {
        const string = 'apple, banana. cherry!';
        const result = words(string);
        expect(result).to.deep.equal(['apple', 'banana', 'cherry']);
    });

    it('should split a string into words, using a custom pattern', () => {
        const string = 'fred, barney, & pebbles';
        const pattern = /\b\w+\b/g;
        const result = words(string, pattern);
        expect(result).to.deep.equal(['fred', 'barney', 'pebbles']);
    });
});
