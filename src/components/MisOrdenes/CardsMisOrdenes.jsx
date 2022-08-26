import { useSelector } from 'react-redux';
import CardMisOrdenes from './CardMisOrdenes';
import { MisOrdenesContainerStyled } from './CardMisOrdenesStyles';

const CardsMisOrdenes = () => {
  const { orders } = useSelector(state => state.orders);
  return (
    <MisOrdenesContainerStyled>
      {orders.length ? (
        orders.map(order => (
          <CardMisOrdenes  key={order.id} {...order} />
        ))
      ) : (
        <h2>Compra algo, ratatouille</h2>
      )}
    </MisOrdenesContainerStyled>
  );
};

export default CardsMisOrdenes;
