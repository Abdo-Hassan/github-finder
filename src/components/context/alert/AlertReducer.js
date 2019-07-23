import { MAKE_ALERT } from '../types';
export default (state, action) => {
  switch (action.type) {
    case MAKE_ALERT:
      return action.payload;
    default:
      return state;
  }
};
