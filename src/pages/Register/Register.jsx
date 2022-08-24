import React, { useEffect } from 'react';
import { Formik } from 'formik';

import LoginInput from '../../components/UI/LoginInput/LoginInput';
import Submit from '../../components/UI/Submit/Submit';

import {
  Form,
  LoginButtonGoogleStyled,
  LoginContainerStyled,
  LoginEmailStyled,
} from './RegisterStyles';
import { registerInitialValues } from '../../formik/initialValues';
import { registerValidationSchema } from '../../formik/validationSchema';
import { register, signInGoogle } from '../../firebase/firebase-utils';
import { useRedirect } from '../../hooks/useRedirect';

const ERROR_CODES = {
  EMAIL_IN_USE: 'auth/email-already-in-use',
};

const Register = () => {
  useRedirect('/');

  return (
    <LoginContainerStyled>
      <h1>Crea tu cuenta</h1>
      <Formik
        initialValues={registerInitialValues}
        validationSchema={registerValidationSchema}
        onSubmit={async (values, { resetForm }) => {
          const { email, password, name } = values;
          try {
            const response = await register(email, password);
            resetForm();
          } catch (error) {
            if (error.code === ERROR_CODES.EMAIL_IN_USE) {
              alert('Che, este correo ya esta usado, capo.');
            }
          }
        }}
      >
        <Form>
          <LoginInput name={'name'} type='text' placeholder='Nombre' />
          <LoginInput name='email' type='text' placeholder='Email' />
          <LoginInput name='password' type='password' placeholder='Password' />
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
          <LoginEmailStyled to='/login'>
            <p>¿Ya tenes cuenta? Inicia sesión</p>
          </LoginEmailStyled>
          <Submit type='submit'>Registrarte</Submit>
        </Form>
      </Formik>
    </LoginContainerStyled>
  );
};

export default Register;
