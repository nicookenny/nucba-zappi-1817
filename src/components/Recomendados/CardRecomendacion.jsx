import React from 'react';
import { useDispatch } from 'react-redux';
import { addProduct } from '../../redux/cart/cart-actions';
import { formatPrice } from '../../utils';

import Button from '../UI/Button/Button';

import {
  Card,
  CardImg,
  CardPrice,
  CardText,
  CardTitle,
  InfoCard,
} from './CardsRecomendacionStyled';

const CardRecomendacion = ({ title, img, desc, price, id }) => {
  const dispatch = useDispatch();
  return (
    <Card>
      <CardImg src={img} alt={title} />
      <CardText>
        <CardTitle>{title}</CardTitle>
        <InfoCard>{desc}</InfoCard>
        <CardPrice>{formatPrice(price)}</CardPrice>
      </CardText>
      <Button
        onClick={e => dispatch(addProduct({ title, img, desc, price, id }))}
      >
        Agregar
      </Button>
    </Card>
  );
};

export default CardRecomendacion;
