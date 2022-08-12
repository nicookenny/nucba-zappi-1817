import React from 'react';
import { useDispatch } from 'react-redux';
import { addProduct } from '../../redux/cart/cart-actions';
import { formatPrice } from '../../utils/index';

import Button from '../UI/Button/Button';

import {
  CardPrice,
  ContainerPrice,
  ProductosCard,
} from './CardsProductosStyles';

const CardProducto = ({ title, img, desc, price, id }) => {
  const dispatch = useDispatch();
  return (
    <ProductosCard>
      <img src={img} alt={title} />
      <h2>{title}</h2>
      <p>{desc}</p>
      <ContainerPrice>
        <CardPrice>{formatPrice(price)}</CardPrice>
        <Button
          onClick={e => dispatch(addProduct({ title, img, desc, price, id }))}
        >
          Agregar
        </Button>
      </ContainerPrice>
    </ProductosCard>
  );
};

export default CardProducto;
