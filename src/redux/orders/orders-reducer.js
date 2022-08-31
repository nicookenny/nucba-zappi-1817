import {
  CLEAR_ERROR,
  GET_ORDERS_FAILED,
  GET_ORDERS_START,
  RECEIVE_ORDERS,
  UPDATE_LOCAL_ORDERS,
} from './orders-actions';

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
        loading: false,
      };
    case GET_ORDERS_FAILED:
      return {
        ...state,
        loading: false,
        error: payload,
      };
    case CLEAR_ERROR:
      return {
        ...state,
        error: null,
      };
    case GET_ORDERS_START:
      return {
        ...state,
        loading: true,
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
