import { expect } from 'chai';
import toString from '../library/src/toString.js';

describe('toString', () => {
    it('should return empty string for null', () => {
        expect(toString(null)).to.equal('');
    });

    it('should return empty string for undefined', () => {
        expect(toString(undefined)).to.equal('');
    });

    it('should preserve the sign of -0', () => {
        expect(toString(-0)).to.equal('-0');
    });

    it('should convert array to string', () => {
        expect(toString([1, 2, 3])).to.equal('1,2,3');
    });

    it('should convert string to string', () => {
        expect(toString('hello')).to.equal('hello');
    });

    it('should convert number to string', () => {
        expect(toString(123)).to.equal('123');
    });

    it('should convert object to string', () => {
        expect(toString({a: 1})).to.equal('[object Object]');
    });

    it('should convert symbol to string', () => {
        const symbol = Symbol('test');
        expect(toString(symbol)).to.equal(symbol.toString());
    });
});