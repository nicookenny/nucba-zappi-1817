import React from 'react';
import { formatPrice } from '../../../utils';

import { BsPlusLg } from 'react-icons/bs';
import { FaMinus } from 'react-icons/fa';

import Count from '../../UI/Count/Count';
import Increase from '../../UI/Increase/Increase';

import {
  ProductContainerStyled,
  TextContainerStyled,
  CardTitleStyled,
  TextStyled,
  PriceStyled,
  QuantityContainerStyled,
} from './ModalCartStyles';
import { useDispatch } from 'react-redux';
import { addProduct, removeProduct } from '../../../redux/cart/cart-actions';

const ModalCartCard = ({ id, title, desc, price, quantity, img }) => {
  const dispatch = useDispatch();

  return (
    <ProductContainerStyled>
      <img src={img} alt={title} />
      <TextContainerStyled>
        <CardTitleStyled>{title}</CardTitleStyled>
        <TextStyled>{desc}</TextStyled>
        <PriceStyled>{formatPrice(price * quantity)}</PriceStyled>
      </TextContainerStyled>
      <QuantityContainerStyled>
        <Increase
          bgColor='var(--btn-gradient-secondary)'
          onClick={e => dispatch(removeProduct(id))}
        >
          <FaMinus />
        </Increase>
        <Count>{quantity}</Count>
        <Increase
          onClick={e => dispatch(addProduct({ title, img, desc, price, id }))}
        >
          <BsPlusLg />
        </Increase>
      </QuantityContainerStyled>
    </ProductContainerStyled>
  );
};

export default ModalCartCard;
