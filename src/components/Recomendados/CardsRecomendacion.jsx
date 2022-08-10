import React from 'react';
import { useSelector } from 'react-redux';

import CardRecomendacion from './CardRecomendacion';

import { CardsContainer } from './CardsRecomendacionStyled';

const CardsRecomendacion = () => {
  const { recommended } = useSelector(state => state.recommended);
  console.log({ recommended });

  return (
    <CardsContainer gridLength={4}>
      {recommended.map(recom => (
        <CardRecomendacion key={recom.id} {...recom} />
      ))}
    </CardsContainer>
  );
};

export default CardsRecomendacion;
