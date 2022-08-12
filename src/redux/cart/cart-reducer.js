import { ADD_PRODUCT, TOGGLE_CART } from './cart-actions';
import { addItemCart } from './cart-utils';

const INITIAL_STATE = {
  items: [],
  totalCost: 0,

  visible: false,
};

export const cartReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;
  switch (type) {
    case TOGGLE_CART:
      return {
        ...state,
        visible: !state.visible,
      };
    case ADD_PRODUCT:
      return {
        ...state,
        items: addItemCart(state.items, payload),
      };
    default:
      return state;
  }
};
