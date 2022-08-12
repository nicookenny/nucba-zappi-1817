export const addItemCart = (cart, product) => {
  const exists = cart.find(item => item.id === product.id);

  if (exists) {
    return cart.map(item =>
      item.id === exists.id
        ? {
            ...item,
            quantity: item.quantity + 1,
          }
        : item
    );
  }

  return [...cart, { ...product, quantity: 1 }];
};
