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
import { useNavigate } from 'react-router-dom';

const CardMisOrdenes = ({ totalCost, createdAt, id, status }) => {
  const navigate = useNavigate();
  const createdAtDate = new Timestamp(
    createdAt.seconds,
    createdAt.nanoseconds
  ).toDate();
  return (
    <PedidoContainerStyled onClick={e => navigate(`/resumen/${id}`)}>
      <TextContainerStyled>
        <TitleStyled>ID de la orden: #{id.slice(0, 7)}</TitleStyled>
        <IdStyled>Fecha {formatDate(createdAtDate)}hs</IdStyled>
        <PriceStyled>{formatPrice(totalCost)}</PriceStyled>
      </TextContainerStyled>
      <OrderStatus status={status?.toLowerCase()} />
    </PedidoContainerStyled>
  );
};

export default CardMisOrdenes;
