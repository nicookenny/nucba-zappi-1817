import React from 'react';
import { Formik } from 'formik';
import { Navigate, useNavigate } from 'react-router-dom';

import LoginInput from '../../components/UI/LoginInput/LoginInput';
import Submit from '../../components/UI/Submit/Submit';

import {
  ForgotContainerStyled,
  ForgotEmailStyled,
  Form,
} from './ForgotPasswordStyles';
import { forgotPasswordSchema } from '../../formik/validationSchema';
import { forgotPasswordInitial } from '../../formik/initialValues';
import { resetPassword } from '../../firebase/firebase-utils';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useRedirect } from '../../hooks/useRedirect';

const ERROR_TYPES = {
  NOT_FOUND: 'auth/user-not-found',
};

const ForgotPassword = () => {
  const navigate = useNavigate();
  useRedirect('/');

  return (
    <ForgotContainerStyled>
      <h1>Reestablece tu contraseña</h1>
      <Formik
        validationSchema={forgotPasswordSchema}
        initialValues={forgotPasswordInitial}
        onSubmit={async (values, actions) => {
          try {
            await resetPassword(values.email);
            actions.resetForm();
          } catch (error) {
            console.log({ error });
            switch (error.code) {
              case ERROR_TYPES.NOT_FOUND:
                return alert('No existe ese mail');
            }
          }
        }}
      >
        <Form>
          <LoginInput
            name='email'
            type='text'
            placeholder='Mail de recuperación'
          />
          <ForgotEmailStyled onClick={e => navigate('/login')}>
            ¿Ya te acordaste la contraseña? Volvé
          </ForgotEmailStyled>
          <Submit type='button'>Ingresar</Submit>
        </Form>
      </Formik>
    </ForgotContainerStyled>
  );
};

export default ForgotPassword;
