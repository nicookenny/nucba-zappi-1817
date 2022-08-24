import React, { useState } from 'react';
import { AnimatePresence } from 'framer-motion';

import {
  HrStyled,
  LinkStyled,
  ModalContainerStyled,
  UsernameStyled,
} from './ModelUserStyles';
import { useDispatch, useSelector } from 'react-redux';
import { toggleUserMenu } from '../../../redux/user/user-actions';
import { auth } from '../../../firebase/firebase-utils';

const ModalUser = () => {
  const dispatch = useDispatch();
  const { visible, user } = useSelector(state => state.user);

  return (
    <AnimatePresence>
      {visible && (
        <ModalContainerStyled
          initial={{ translateX: 600 }}
          animate={{ translateX: 0 }}
          exit={{ translateX: 600 }}
          transition={{ duration: 0.5 }}
          key='cart-user'
        >
          <UsernameStyled>Bienvenido, {user?.name}!</UsernameStyled>
          <HrStyled />
          <LinkStyled to='/mis-ordenes'>Mis Ordenes</LinkStyled>
          <span
            onClick={() =>
              auth.signOut().then(() => dispatch(toggleUserMenu()))
            }
          >
            Cerrar Sesion
          </span>
        </ModalContainerStyled>
      )}
    </AnimatePresence>
  );
};

export default ModalUser;
