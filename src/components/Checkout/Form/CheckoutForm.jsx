import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { v4 } from 'uuid';
import { createOrderDocument } from '../../../firebase/firebase-utils';
import { checkoutInitialValues } from '../../../formik/initialValues';
import { checkoutValidationSchema } from '../../../formik/validationSchema';
import { createOrder } from '../../../redux/orders/orders-actions';
import { SHIPPING_COST } from '../../../utils';

import Input from '../../UI/Input/Input';
import Submit from '../../UI/Submit/Submit';

import { CheckoutDatosStyled, Formik, Form } from './CheckoutFormStyles';

const CheckoutForm = () => {
  const navigate = useNavigate();
  const { items, totalCost } = useSelector(state => state.cart);
  const { user } = useSelector(state => state.user);
  const dispatch = useDispatch();
  return (
    <CheckoutDatosStyled>
      <h2>Ingresá tus datos</h2>
      <Formik
        initialValues={checkoutInitialValues}
        validationSchema={checkoutValidationSchema}
        onSubmit={async values => {
          const order = {
            user: user.id,
            items,
            totalCost,
            shippingCost: SHIPPING_COST,
            shippingInformation: values,
            id: v4(),
          };

          dispatch(createOrder(order));
          navigate('/felicitaciones');
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
