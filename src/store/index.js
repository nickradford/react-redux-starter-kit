import { createStore } from 'redux';
import deepFreeze from 'deep-freeze';

import Actions from 'store/actions';
import generateNewState from 'store/helpers/generateNewState';

const reducer = (state = generateNewState(), action) => {
  deepFreeze(state);

  switch (action.type) {
    case Actions.LOGOUT:
      return { ...state, loggedIn: false };

    case Actions.LOGIN:
      return { ...state, loggedIn: true };

    case Actions.SHOW_MODAL:
      return { ...state, modalOptions: { ...action.modalOptions, visible: true } };

    case Actions.CLOSE_MODAL:
      return { ...state, modalOptions: { ...state.modalOptions, visible: false } };

    default:
      return state;
  }
};

const store = createStore(reducer);

export default store;
