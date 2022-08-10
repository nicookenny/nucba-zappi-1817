import CardProducto from './CardProducto';
import Button from '../UI/Button/Button';

import { ProductosContainer } from './CardsProductosStyles';
import { ButtonContainerStyled } from '../../pages/Home/HomeStyles';

import { useSelector } from 'react-redux';

const CardsProductos = () => {
  const { selectedCategory } = useSelector(state => state.categories);
  const { products } = useSelector(state => state.products);

  return (
    <>
      <ProductosContainer>
        {Object.entries(products).map(([_category, foods]) =>
          (!selectedCategory || _category === selectedCategory)
            ? foods.map(food => <CardProducto key={food.id} {...food} />)
            : []
        )}
      </ProductosContainer>

      <ButtonContainerStyled>
        <Button
          onClick={e => e.preventDefault()}
          secondary='true'
          disabled='true'
        >
          <span>Ver menos</span>
        </Button>
        <Button onClick={e => e.preventDefault()} disabled='true'>
          Ver más
        </Button>
      </ButtonContainerStyled>
    </>
  );
};

export default CardsProductos;
