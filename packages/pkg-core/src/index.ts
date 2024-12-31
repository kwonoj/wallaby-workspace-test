import { isNum } from '@test/util/util';

const throwNonNumeric = (value: unknown): void => {
  if (!isNum(value)) {
    throw new Error('Expected a numeric value, got: ' + JSON.stringify(value));
  }
}

export {
  throwNonNumeric,
}
