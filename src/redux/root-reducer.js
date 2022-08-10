import { combineReducers } from 'redux';
import persistReducer from 'redux-persist/es/persistReducer';
import storage from 'redux-persist/lib/storage';
import { categoriesReducer } from './categories/categories-reducer';
import { productsReducer } from './products/products-reducer';
import { recommendedReducer } from './recommended/recommended-reducer';

const rootReducer = combineReducers({
  categories: categoriesReducer,
  products: productsReducer,
  recommended: recommendedReducer,
});

export default persistReducer(
  {
    key: 'global',
    storage,
    blacklist: ['recommended'],
  },
  rootReducer
);
