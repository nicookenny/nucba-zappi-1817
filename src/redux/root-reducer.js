import { combineReducers } from 'redux';
import persistReducer from 'redux-persist/es/persistReducer';
import storage from 'redux-persist/lib/storage';
import { cartReducer } from './cart/cart-reducer';
import { categoriesReducer } from './categories/categories-reducer';
import { productsReducer } from './products/products-reducer';
import { recommendedReducer } from './recommended/recommended-reducer';
import { userReducer } from './user/user-reducer';

const rootReducer = combineReducers({
  categories: categoriesReducer,
  products: productsReducer,
  recommended: recommendedReducer,
  cart: cartReducer,
  user: userReducer,
});

export default persistReducer(
  {
    key: 'global',
    storage,
    whitelist: [],
  },
  rootReducer
);
