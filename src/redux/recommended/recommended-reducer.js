import { products } from '../../data';

const INITIAL_STATE = {
  recommended: Array(4)
    .fill(0)
    .reduce((accum, _item) => {
      const IDs = accum.map(value => value.id);
      let newRecommended;
      do {
        const pizzas = products.filter(
          product => product.category === 'Pizzas'
        );
        newRecommended = {
          ...pizzas[Math.floor(Math.random() * pizzas.length)],
        };
      } while (IDs.includes(newRecommended.id));

      return [...accum, newRecommended];
    }, []),
};

export const recommendedReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;
  switch (type) {
    default:
      return state;
  }
};
