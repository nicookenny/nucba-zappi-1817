import React from 'react';
import { formatPrice } from '../../utils';

import CardResumen from '../../components/Resumen/CardResumen';
import Link from '../../components/UI/Link/Link';

import {
  CostoEnvioStyled,
  CostoProductoStyled,
  CostoTotalStyled,
  HrStyled,
  ProductsContainerStyled,
  ResumenContainerInfoStyled,
  ResumenContainerStyled,
  ResumenTitleStyled,
} from './ResumenStyles';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';
import { getOrders } from '../../redux/orders/orders-actions';

const Resumen = () => {
  const dispatch = useDispatch();

  const [order, setOrder] = useState(null);

  const { orderId } = useParams();
  const { orders } = useSelector(state => state.orders);
  const { user } = useSelector(state => state.user);

  // 1: orders = []
  // 1.1: exists = undefined / setOrder(undefined)
  // 2: orders = [....]

  useEffect(() => {
    if (!orders.length) {
      dispatch(getOrders(user?.id));
    }
    const exist = orders?.find(order => order.id === orderId);
    setOrder(exist);
    console.log({ order });
  }, [orderId, orders, user, dispatch]);

  return (
    <ResumenContainerStyled>
      <ResumenTitleStyled>
        <h1>Resumen Orden: #{order?.id.slice(0, 7)}</h1>
        <Link borderRadius='20' to='/mis-ordenes'></Link>
      </ResumenTitleStyled>
      <h2>Productos:</h2>
      <ProductsContainerStyled>
        {order?.items.map(item => (
          <CardResumen key={item.id} {...item} />
        ))}
      </ProductsContainerStyled>
      <HrStyled />
      <ResumenContainerInfoStyled>
        <h3>Costos:</h3>
        <CostoProductoStyled>
          <p>Costo de productos</p>
          <span>{formatPrice(order?.totalCost)}</span>
        </CostoProductoStyled>
        <CostoEnvioStyled>
          <p>Costo de envío</p>
          <span>{formatPrice(order?.shippingCost)}</span>
        </CostoEnvioStyled>
        <CostoTotalStyled>
          <p>Total</p>
          <span>{formatPrice(order?.totalCost + order?.shippingCost)}</span>
        </CostoTotalStyled>
      </ResumenContainerInfoStyled>
    </ResumenContainerStyled>
  );
};

export default Resumen;
