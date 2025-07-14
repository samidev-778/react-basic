const CartReducer = (state, action) => {
  let newCrats = [];
  switch (action.type) {
    case "ADD_TO_CART":
      newCrats = [...state.carts, action.id];
      localStorage.setItem("carts", JSON.stringify(newCrats));
      return {
        ...state,
        carts: newCrats,
      };
    case "REMOVE_FROM_CART":
      newCrats = state.carts;
      newCrats.splice(
        state.carts.findIndex((cartId) => cartId === action.id),
        1
      );
      localStorage.setItem("carts", JSON.stringify(newCrats));
      return {
        ...state,
        carts: newCrats,
      };
    default:
      break;
  }
};

export default CartReducer;
