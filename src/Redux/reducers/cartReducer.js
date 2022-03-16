const cart = [];

const cartReducer = (state = cart, action) => {
  const product = action.payload;
  switch (action.type) {
    case "ADD_ITEM_TO_CART":
      const exist = state.find((item) => item.id === product.id);
      if (exist) {
        return state.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        const product = action.payload;
        return [...state, { ...product, quantity: 1 }];
      }
    case "DELETE_ITEM_FROM_CART":
      const exist1 = state.find((item) => item.id === product.id);
      if (exist1.quantity === 1) {
        return state.filter((item) => item.id !== exist1.id);
      } else {
        return state.map((x) =>
          x.id === product.id ? { ...x, quantity: x.quantity - 1 } : x
        );
      }
    default:
      return state;
  }
};
export default cartReducer;
