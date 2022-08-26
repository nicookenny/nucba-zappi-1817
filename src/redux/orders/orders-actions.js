import {
  createOrderDocument,
  getFirebaseOrders,
} from '../../firebase/firebase-utils';

export const CREATE_ORDER_START = 'CREATE_ORDER_START';
export const CREATE_ORDER_FAILED = 'CREATE_ORDER_FAILED';
export const GET_ORDERS_START = 'GET_ORDERS_START';
export const RECEIVE_ORDERS = 'RECEIVE_ORDERS';
export const GET_ORDERS_FAILED = 'GET_ORDERS_FAILED';

export const UPDATE_LOCAL_ORDERS = 'UPDATE_LOCAL_ORDERS';

export const getOrders = userId => {
  return async dispatch => {
    const orders = await getFirebaseOrders(userId);
    dispatch({ type: RECEIVE_ORDERS, payload: orders });
  };
};

export const createOrder = order => {
  return async dispatch => {
    try {
      await createOrderDocument(order);
      dispatch(getOrders(order.user));
      //   dispatch({ type: UPDATE_LOCAL_ORDERS, payload: order });
    } catch (error) {
      dispatch({
        type: GET_ORDERS_FAILED,
        payload: error,
      });
    }
  };
};
