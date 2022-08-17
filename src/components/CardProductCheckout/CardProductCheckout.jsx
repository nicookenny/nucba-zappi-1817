import { formatPrice } from '../../utils';

import { BsPlusLg } from 'react-icons/bs';
import { FaMinus } from 'react-icons/fa';

import Count from '../UI/Count/Count';
import Increase from '../UI/Increase/Increase';

import {
  CardContainerStyled,
  CardInfoStyled,
  PriceStyled,
  ProductTitleStyled,
  TextStyled,
  QuantityContainerStyled,
} from './CardProductCheckoutStyles';
import { addProduct, removeProduct } from '../../redux/cart/cart-actions';
import { useDispatch } from 'react-redux';

const CardProductCheckout = ({ id, desc, img, price, title, quantity }) => {
  const dispatch = useDispatch();

  return (
    <CardContainerStyled>
      <img src={img} alt={title} />
      <CardInfoStyled>
        <ProductTitleStyled>{title}</ProductTitleStyled>
        <TextStyled>{desc}</TextStyled>
        <PriceStyled>{formatPrice(price)}</PriceStyled>
      </CardInfoStyled>
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
    </CardContainerStyled>
  );
};

export default CardProductCheckout;
