import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectCategory } from '../../redux/categories/categories-actions';

import { BorderDecoration, CardCategoria } from './CategoriasStyles';

export const Categoria = ({ id, img, title, category }) => {
  const dispatch = useDispatch();
  const { selectedCategory } = useSelector(state => state.categories);

  return (
    <CardCategoria
      selected={selectedCategory === category}
      onClick={e => dispatch(selectCategory(category))}
      whileTap={{ scale: 0.95 }}
    >
      <img src={img} alt={category} />
      <h2>{title}</h2>
      <BorderDecoration></BorderDecoration>
    </CardCategoria>
  );
};

export default Categoria;
