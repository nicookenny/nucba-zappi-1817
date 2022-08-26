import { formatPrice, formatDate } from '../../utils';
import OrderStatus from '../UI/OrderStatus/OrderStatus';
import { Timestamp } from 'firebase/firestore';

import {
  IdStyled,
  PedidoContainerStyled,
  PriceStyled,
  TextContainerStyled,
  TitleStyled,
} from './CardMisOrdenesStyles';

const CardMisOrdenes = ({ totalCost, createdAt, id, status, items }) => {
  const createdAtDate = new Timestamp(
    createdAt.seconds,
    createdAt.nanoseconds
  ).toDate();
  return (
    <PedidoContainerStyled onClick={e => e.preventDefault()}>
      <TextContainerStyled>
        <TitleStyled>ID de la orden: {id}</TitleStyled>
        <IdStyled>Fecha {formatDate(createdAtDate)}hs</IdStyled>
        <PriceStyled>{formatPrice(totalCost)}</PriceStyled>
      </TextContainerStyled>
      <OrderStatus status={status?.toLowerCase()} />
    </PedidoContainerStyled>
  );
};

export default CardMisOrdenes;
