import React from 'react';
import { useState } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import { useDispatch, useSelector } from 'react-redux';
import { selectCategory } from '../../redux/categories/categories-actions';

import Button from '../UI/Button/Button';

import {
  HeroContainerStyled,
  HeroFormStyled,
  HeroSearchBarStyled,
  IconWrapperStyled,
} from './HeroStyles';

const Hero = ({ doScroll }) => {
  const [value, setValue] = useState('');
  const dispatch = useDispatch();

  const { categories } = useSelector(state => state.categories);
  console.log({ categories });
  const onSubmit = (e, value) => {
    e.preventDefault();
    const names = categories.map(category => category.category);

    const categoriaBuscada = value.toLowerCase().trim().replaceAll(' ', '');

    const exist = names.find(name => name.toLowerCase() === categoriaBuscada);

    if (!exist) {
      return alert('No existe esa categoria, capo');
    }

    dispatch(selectCategory(exist));
    doScroll();
    setValue('');
  };

  return (
    <HeroContainerStyled>
      <div>
        <h1 className='title'>¿Qué categoría estás buscando?</h1>
        <HeroFormStyled onSubmit={e => onSubmit(e, value)}>
          <HeroSearchBarStyled
            type='text'
            placeholder='Ej. Pizzas a la piedra'
            value={value}
            onChange={e => setValue(e.target.value)}
          />
          <IconWrapperStyled>
            <AiOutlineSearch />
          </IconWrapperStyled>
          <Button onClick={e => onSubmit(e, value)} type='submit' radius='10'>
            Buscar
          </Button>
        </HeroFormStyled>
      </div>
      <div>
        <img
          src='https://res.cloudinary.com/dcatzxqqf/image/upload/v1658797662/coding/NucbaZappi/Assets/pizza-hero_enjaeg_oprhww.png'
          alt=''
        />
      </div>
    </HeroContainerStyled>
  );
};

export default Hero;
