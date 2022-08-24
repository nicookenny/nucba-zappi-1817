import { SET_USER, TOGGLE_MENU } from './user-actions';

const INITIAL_STATE = {
  visible: false,
  user: null,
};

export const userReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;

  switch (type) {
    case SET_USER:
      return { ...state, user: payload };
    case TOGGLE_MENU:
      return { ...state, visible: !state.visible };
    default:
      return state;
  }
};
