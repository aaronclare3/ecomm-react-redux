export const cartReducer = (state = { cartItems: [] }, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      const itemId = action.payload.id;

      const itemExists = state.cartItems.find((x) => x.id === itemId);

      if (itemExists) {
        return {
          ...state,
          cartItems: state.cartItems.map((x) =>
            x.id === itemExists.id ? action.payload : x
          ),
        };
      } else {
        return {
          ...state,
          cartItems: [...state.cartItems, action.payload],
        };
      }

    case "REMOVE_FROM_CART":
      const cartWithoutItem = state.cartItems.filter(
        (item) => item.id !== action.payload
      );
      return { ...state, cartItems: cartWithoutItem };

    case "RESET_CART":
      return { ...state, cartItems: [] };

    default:
      return state;
  }
};
