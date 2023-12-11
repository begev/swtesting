import { expect } from 'chai';
import countBy from '../library/src/countBy.js';

describe('countBy', () => {
  it('should count the number of occurrences of each category', () => {
    const users = [
      { 'user': 'barney', 'active': true },
      { 'user': 'betty', 'active': true },
      { 'user': 'fred', 'active': false }
    ];
    const result = countBy(users, value => value.active);
    expect(result).to.deep.equal({ 'true': 2, 'false': 1 });
  });

  it('should return an empty object for an empty collection', () => {
    const result = countBy([], value => value);
    expect(result).to.deep.equal({});
  });

  it('should count the number of occurrences of each number in an array', () => {
    const numbers = [1, 2, 2, 3, 3, 3];
    const result = countBy(numbers, value => value);
    expect(result).to.deep.equal({ '1': 1, '2': 2, '3': 3 });
  });
});
