import { MAKE_ALERT } from '../types';
import { REMOVE_ALERT } from '../types';
export default (state, action) => {
  switch (action.type) {
    case MAKE_ALERT:
      return action.payload;
    case REMOVE_ALERT:
      return null;

    default:
      return state;
  }
};
