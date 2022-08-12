import CardProducto from './CardProducto';
import Button from '../UI/Button/Button';

import { ProductosContainer } from './CardsProductosStyles';
import { ButtonContainerStyled } from '../../pages/Home/HomeStyles';

import { useSelector } from 'react-redux';
import { useState } from 'react';

const STANDARD_QUANTITY = 8;

const CardsProductos = () => {
  const [limit, setLimit] = useState(STANDARD_QUANTITY);

  const { selectedCategory } = useSelector(state => state.categories);
  const { products, total } = useSelector(state => state.products);

  return (
    <>
      <ProductosContainer>
        {Object.entries(products).map(([_category, foods]) =>
          !selectedCategory || _category === selectedCategory
            ? foods.map(food =>
                food.id <= limit || selectedCategory ? (
                  <CardProducto key={food.id} {...food} />
                ) : null
              )
            : []
        )}
      </ProductosContainer>

      {!selectedCategory && (
        <ButtonContainerStyled>
          <Button
            onClick={e => setLimit(previous => previous - STANDARD_QUANTITY)}
            secondary='true'
            disabled={limit <= STANDARD_QUANTITY}
          >
            <span>Ver menos</span>
          </Button>
          <Button
            onClick={e => setLimit(previous => previous + STANDARD_QUANTITY)}
            disabled={limit >= total}
          >
            Ver más
          </Button>
        </ButtonContainerStyled>
      )}
    </>
  );
};

export default CardsProductos;
