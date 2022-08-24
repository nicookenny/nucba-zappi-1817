export const SET_USER = 'SET_USER';
export const TOGGLE_MENU = 'TOGGLE_MENU';

export const setCurrentUser = user => ({
  type: SET_USER,
  payload: user,
});

export const toggleUserMenu = () => ({
  type: TOGGLE_MENU,
});
