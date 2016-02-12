import assert from 'power-assert';
import mirrorKeyValue from '.';

describe('mirrorKeyValue', () => {
  it('case', () => {
    const actual = mirrorKeyValue(['A', 'B', 'C']);
    const expected = { A: 'A', B: 'B', C: 'C' };
    assert.deepEqual(actual, expected);
  });
});
