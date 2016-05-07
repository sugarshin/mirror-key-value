import assert from 'assert';
import mirrorKeyValue from './src';

describe('mirrorKeyValue', () => {
  it('case', () => {
    const actual = mirrorKeyValue(['A', 'B', 'C']);
    const expected = { A: 'A', B: 'B', C: 'C' };
    assert.deepEqual(actual, expected);
  });
});
