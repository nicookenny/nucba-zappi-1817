export const TOGGLE_CART = 'TOGGLE_CART';
export const ADD_PRODUCT = 'ADD_PRODUCT';
export const REMOVE_PRODUCT = 'REMOVE_PRODUCT';
export const CLEAR_CART = 'CLEAR_CART';
export const toggleVisibleCart = () => ({
  type: TOGGLE_CART,
});

export const addProduct = product => ({
  type: ADD_PRODUCT,
  payload: product,
});

export const removeProduct = ID => ({
  type: REMOVE_PRODUCT,
  payload: ID,
});

export const clearCart = () => ({
  type: CLEAR_CART,
});
