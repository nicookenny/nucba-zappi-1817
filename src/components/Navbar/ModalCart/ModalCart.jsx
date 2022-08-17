import React from 'react';
import { useNavigate } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import { MdOutlineClose } from 'react-icons/md';
import { IoMdTrash } from 'react-icons/io';
import { formatPrice } from '../../../utils';

import Submit from '../../UI/Submit/Submit';
import Increase from '../../UI/Increase/Increase';
import ModalCartCard from './ModalCartCard';

import {
  ButtonContainerStyled,
  MainContainerStyled,
  CloseButtonContainerStyled,
  CloseButtonStyled,
  ContainerStyled,
  EnvioStyled,
  PriceContainerStyled,
  PriceStyled,
  ProductsWrapperStyled,
  SubtotalStyled,
  TitleStyled,
  TotalStyled,
} from './ModalCartStyles';
import { ModalOverlayStyled } from '../NavbarStyles';
import { useDispatch, useSelector } from 'react-redux';
import { clearCart, toggleVisibleCart } from '../../../redux/cart/cart-actions';

const ModalCart = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { visible, items, totalCost } = useSelector(state => state.cart);

  return (
    <>
      {visible && (
        <ModalOverlayStyled
          onClick={() => {
            dispatch(toggleVisibleCart());
          }}
          isHidden={!visible}
        />
      )}
      <AnimatePresence>
        {visible && (
          <ContainerStyled
            initial={{ translateX: 600 }}
            animate={{ translateX: 0 }}
            exit={{ translateX: 600 }}
            transition={{ type: 'spring', damping: 27 }}
            key='cart-modal'
          >
            <CloseButtonContainerStyled>
              <CloseButtonStyled
                className='close__modal '
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  dispatch(toggleVisibleCart());
                }}
              >
                <MdOutlineClose size='24px' />
              </CloseButtonStyled>
            </CloseButtonContainerStyled>

            <MainContainerStyled>
              <TitleStyled>
                <h1>Tus Productos</h1>
                <Increase
                  onClick={e => dispatch(clearCart())}
                  bgColor='var(--magenta)'
                  disabled={!items.length}
                >
                  <IoMdTrash />
                </Increase>
              </TitleStyled>

              <ProductsWrapperStyled>
                {items.length ? (
                  items.map(item => <ModalCartCard key={item.id} {...item} />)
                ) : (
                  <p>Si no compras algo, te vamos a matar</p>
                )}
              </ProductsWrapperStyled>
            </MainContainerStyled>

            <PriceContainerStyled>
              <SubtotalStyled>
                <p>Subtotal:</p>
                <span>{formatPrice(totalCost)}</span>
              </SubtotalStyled>
              <EnvioStyled>
                <p>Envio</p>
                <span>{formatPrice(500)}</span>
              </EnvioStyled>
              <hr />
              <TotalStyled>
                <p>Total:</p>
                <PriceStyled>{formatPrice(totalCost + 500)}</PriceStyled>
              </TotalStyled>
              <ButtonContainerStyled>
                <Submit
                  disabled={!items.length}
                  onClick={() => {
                    dispatch(toggleVisibleCart());
                    navigate('/checkout');
                  }}
                >
                  Iniciar pedido
                </Submit>
              </ButtonContainerStyled>
            </PriceContainerStyled>
          </ContainerStyled>
        )}
      </AnimatePresence>
    </>
  );
};

export default ModalCart;
