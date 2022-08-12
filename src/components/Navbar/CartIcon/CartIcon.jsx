import React from 'react';

import { FaShoppingCart } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { toggleVisibleCart } from '../../../redux/cart/cart-actions';

import { LinkContainerStyled } from './../NavbarStyles';

const CartIcon = () => {
  const dispatch = useDispatch();
  const { items } = useSelector(state => state.cart);
  const total = items.reduce((acc, item) => (acc += item.quantity), 0);
  return (
    <LinkContainerStyled
      onClick={() => {
        dispatch(toggleVisibleCart());
      }}
    >
      <FaShoppingCart />
      <span>{total}</span>
    </LinkContainerStyled>
  );
};

export default CartIcon;
