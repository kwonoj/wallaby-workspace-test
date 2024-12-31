import { throwNonNumeric } from '#core/index';

describe('throwNonNumeric', () => {
  it('should not throw an error for a numeric value', () => {
    throwNonNumeric(123);
  });
});
