import { ErrorMessage, Field } from 'formik';
import React from 'react';

import {
  ErrorMessageStyled,
  InputContainerStyled,
  LoginInputStyled,
} from './LoginInputStyles';

const LoginInput = ({ name, type, placeholder }) => {
  return (
    <Field name={name}>
      {({ field, form: { errors } }) => (
        <InputContainerStyled>
          <LoginInputStyled
            type={type}
            placeholder={placeholder}
            {...field}
            isError={errors[field.name]}
          />
          <ErrorMessage name={field.name}>
            {message => <ErrorMessageStyled>{message}</ErrorMessageStyled>}
          </ErrorMessage>
        </InputContainerStyled>
      )}
    </Field>
  );
};

export default LoginInput;
