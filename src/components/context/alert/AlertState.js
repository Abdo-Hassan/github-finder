import React, { useReducer } from 'react';
import AlertContext from './AlertContext';
import AlertReducer from './AlertReducer';
import { MAKE_ALERT } from '../types';
import { REMOVE_ALERT } from '../types';

const AlertState = props => {
  const initialState = null;
  const [state, dispatch] = useReducer(AlertReducer, initialState);

  // set alert
  const makeAlert = (msg, type) => {
    dispatch({ type: MAKE_ALERT, payload: { msg, type } });
    setTimeout(() => dispatch({ type: REMOVE_ALERT }), 2000);
  };

  return (
    <AlertContext.Provider
      value={{
        alert: state,
        makeAlert
      }}
    >
      {props.children}
    </AlertContext.Provider>
  );
};

export default AlertState;
