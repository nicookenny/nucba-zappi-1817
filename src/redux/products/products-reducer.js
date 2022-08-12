import { Products, TotalProducts } from '../../data';

const INITIAL_STATE = { products: Products, total: TotalProducts };

export const productsReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;
  switch (type) {
    default:
      return state;
  }
};
