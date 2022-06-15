import { CART_ADD_ITEM, CART_REMOVE_ITEM } from "../constants/cartConstants";

export const cartReducer = (cartItems = [], action) => {
  switch (action.type) {
    case CART_ADD_ITEM:
      const item = action.payload;
      const existItem = cartItems.find((p) => item.product === p.product);

      if (existItem) {
        return cartItems.map((p) => (p.product === item.product ? item : p));
      } else {
        return [...cartItems, item];
      }

    case CART_REMOVE_ITEM:
      return cartItems.filter((p) => p.product !== action.payload);

    default:
      return cartItems;
  }
};
