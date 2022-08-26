import { RECEIVE_ORDERS, UPDATE_LOCAL_ORDERS } from './orders-actions';

const INITIAL_STATE = {
  orders: [],
  loading: false,
  error: null,
};

export const ordersReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;
  switch (type) {
    case RECEIVE_ORDERS:
      return {
        ...state,
        orders: payload,
      };
    case UPDATE_LOCAL_ORDERS:
      return {
        ...state,
        orders: [...state.orders, payload],
      };
    default:
      return state;
  }
};
