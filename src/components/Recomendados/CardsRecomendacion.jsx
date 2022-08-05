import React from 'react';

import CardRecomendacion from './CardRecomendacion';

import { CardsContainer } from './CardsRecomendacionStyled';

import { Recommended } from '../../data';


const CardsRecomendacion = () => {
  return (
    <CardsContainer gridLength={4}>
      {Recommended.map(recom => (
        <CardRecomendacion key={recom.id} {...recom} />
      ))}
    </CardsContainer>
  );
};

export default CardsRecomendacion;
