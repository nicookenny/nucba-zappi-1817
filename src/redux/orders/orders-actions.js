import {
  createOrderDocument,
  getFirebaseOrders,
} from '../../firebase/firebase-utils';
import { clearCart } from '../cart/cart-actions';

export const CREATE_ORDER_FAILED = 'CREATE_ORDER_FAILED';
export const RECEIVE_ORDERS = 'RECEIVE_ORDERS';

export const GET_ORDERS_START = 'GET_ORDERS_START';
export const GET_ORDERS_FAILED = 'GET_ORDERS_FAILED';
export const CLEAR_ERROR = 'CLEAR_ERROR';

export const UPDATE_LOCAL_ORDERS = 'UPDATE_LOCAL_ORDERS';

export const startLoadingOrders = () => ({ type: GET_ORDERS_START });
export const failedGetOrders = error => ({
  type: GET_ORDERS_FAILED,
  payload: error || 'Hubo un error, que pasarrella?',
});
export const clearError = () => ({
  type: CLEAR_ERROR,
});

export const getOrders = userId => {
  return async dispatch => {
    try {
      dispatch(startLoadingOrders());
      const orders = await getFirebaseOrders(userId);
      dispatch({ type: RECEIVE_ORDERS, payload: orders });
    } catch (error) {
      dispatch(failedGetOrders(error.message));
    }
  };
};

export const createOrder = order => {
  return async dispatch => {
    try {
      await createOrderDocument(order);
      dispatch(getOrders(order.user));
      dispatch(clearCart());
      //   dispatch({ type: UPDATE_LOCAL_ORDERS, payload: order });
      return true;
    } catch (error) {
      dispatch({
        type: GET_ORDERS_FAILED,
        payload: error,
      });
      return false;
    }
  };
};
