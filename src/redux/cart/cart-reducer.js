import {
  ADD_PRODUCT,
  CLEAR_CART,
  REMOVE_PRODUCT,
  TOGGLE_CART,
} from './cart-actions';
import { addItemCart, removeItemCart } from './cart-utils';


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
      const newAddedProducts = addItemCart(state.items, payload);
      const newSubtotal = newAddedProducts.reduce(
        (sub, item) => (sub += item.price * item.quantity),
        0
      );
      return {
        ...state,
        items: newAddedProducts,
        totalCost: newSubtotal,
      };
    case REMOVE_PRODUCT:
      const newRemovedProducts = removeItemCart(state.items, payload);
      const newSubtotalReduce = newRemovedProducts.reduce(
        (sub, item) => (sub += item.price * item.quantity),
        0
      );
      return {
        ...state,
        items: newRemovedProducts,
        totalCost: newSubtotalReduce,
      };
    case CLEAR_CART:
      return {
        ...state,
        items: [],
        totalCost: 0,
      };
    default:
      return state;
  }
};
