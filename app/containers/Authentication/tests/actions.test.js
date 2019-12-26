import { requestLogin } from '../actions';
import { REQUEST_LOGIN } from '../constants';

describe('Authentication actions', () => {
  describe('Default Action', () => {
    it('has a type of DEFAULT_ACTION', () => {
      const expected = {
        type: REQUEST_LOGIN,
      };
      expect(requestLogin()).toEqual(expected);
    });
  });
});
