import React from 'react';
import { useSelector } from 'react-redux';
import { checkoutInitialValues } from '../../../formik/initialValues';
import { checkoutValidationSchema } from '../../../formik/validationSchema';

import Input from '../../UI/Input/Input';
import Submit from '../../UI/Submit/Submit';

import { CheckoutDatosStyled, Formik, Form } from './CheckoutFormStyles';

const CheckoutForm = () => {
  const { items } = useSelector(state => state.cart);
  return (
    <CheckoutDatosStyled>
      <h2>Ingresá tus datos</h2>
      <Formik
        initialValues={checkoutInitialValues}
        validationSchema={checkoutValidationSchema}
        onSubmit={values => {
          console.log(values);
        }}
      >
        <Form>
          <Input
            name='name'
            htmlFor='nombre'
            type='text'
            id='nombre'
            placeholder='Tu nombre'
          >
            Nombre
          </Input>
          <Input
            name='cellphone'
            htmlFor='celular'
            type='text'
            id='celular'
            placeholder='Tu celular'
          >
            Celular
          </Input>
          <Input
            name='locality'
            htmlFor='localidad'
            type='text'
            id='localidad'
            placeholder='Tu localidad'
          >
            Localidad
          </Input>
          <Input
            name='address'
            htmlFor='direccion'
            type='text'
            id='dirección'
            placeholder='Tu dirección'
          >
            Dirección
          </Input>
          <div>
            <Submit disabled={!items.length}>Iniciar Pedido</Submit>
          </div>
        </Form>
      </Formik>
    </CheckoutDatosStyled>
  );
};

export default CheckoutForm;
