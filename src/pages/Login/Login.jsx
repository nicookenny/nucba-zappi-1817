import React from 'react';
import { Formik } from 'formik';
import { Link } from 'react-router-dom';

import LoginInput from '../../components/UI/LoginInput/LoginInput';
import Submit from '../../components/UI/Submit/Submit';

import {
  Form,
  LoginButtonGoogleStyled,
  LoginContainerStyled,
  LoginEmailStyled,
  LoginPasswordStyled,
} from './LoginStyles';
import { loginInitialValues } from '../../formik/initialValues';
import { loginValidationSchema } from '../../formik/validationSchema';
import { createUserProfile, signIn, signInGoogle } from '../../firebase/firebase-utils';
const ERROR_CODES = {
  WRONG_PASSWORD: 'auth/wrong-password',
  NOT_FOUND_USER: 'auth/user-not-found',
};
const Login = () => {
  return (
    <LoginContainerStyled>
      <h1>Iniciar Sesión</h1>
      <Formik
        initialValues={loginInitialValues}
        validationSchema={loginValidationSchema}
        onSubmit={async values => {
          const { email, password } = values;
          try {
            const { user } = await signIn(email, password);
            const response = await createUserProfile(user);
            const data = response.data();
            console.log({ data });
          } catch (error) {
            const { code } = error;
            switch (code) {
              case ERROR_CODES.WRONG_PASSWORD:
                return alert('Contraseña incorrecta');
              case ERROR_CODES.NOT_FOUND_USER:
                return alert('Usuario no encontrado');
              default:
                return alert('Error interno del servidor');
            }
          }
        }}
      >
        <Form>
          <LoginInput name='email' type='text' placeholder='Email' />
          <LoginInput name='password' type='password' placeholder='Password' />
          <Link to='/forgot-password'>
            <LoginPasswordStyled>
              ¿Olvidaste la contraseña? Reestablecela
            </LoginPasswordStyled>
          </Link>
          <p>O podés ingresar con</p>
          <LoginButtonGoogleStyled
            type='button'
            onClick={e => {
              const response = signInGoogle();
            }}
          >
            <img
              src='https://res.cloudinary.com/dcatzxqqf/image/upload/v1656648432/coding/NucbaZappi/Assets/google-icon_jgdcr1.png'
              alt='Google logo'
            />
            Google
          </LoginButtonGoogleStyled>
          <Link to='/register'>
            <LoginEmailStyled>¿No tenes cuenta? Crea una</LoginEmailStyled>
          </Link>
          <Submit type='submit'>Ingresar</Submit>
        </Form>
      </Formik>
    </LoginContainerStyled>
  );
};

export default Login;
