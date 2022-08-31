import { useSelector } from 'react-redux';
import CardMisOrdenes from './CardMisOrdenes';
import Loader from '../UI/Loader/Loader';
import { MisOrdenesContainerStyled } from './CardMisOrdenesStyles';

const CardsMisOrdenes = () => {
  const { orders, loading, error } = useSelector(state => state.orders);

  if (loading && !orders.length) {
    return <Loader styles={{ height: '50px', width: '50px' }} />;
  }

  if (error) {
    return <h2>{error}</h2>;
  }

  return (
    <MisOrdenesContainerStyled>
      {orders.length ? (
        orders.map(order => <CardMisOrdenes key={order.id} {...order} />)
      ) : (
        <h2>Compra algo, ratatouille</h2>
      )}
    </MisOrdenesContainerStyled>
  );
};

export default CardsMisOrdenes;
