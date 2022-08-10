import { Categories } from '../../data';
import { SELECT_CATEGORY } from './categories-actions';

const INITIAL_STATE = {
  categories: Categories,
  selectedCategory: null,
};

export const categoriesReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;

  switch (type) {
    case SELECT_CATEGORY:
      return {
        ...state,
        selectedCategory: payload === state.selectedCategory ? null : payload,
      };
    default:
      return state;
  }
};
