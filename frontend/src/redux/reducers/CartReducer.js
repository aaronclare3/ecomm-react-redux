
export const cartReducer = (state={cartItems: []}, action) => {
    switch (action.type) {
        case "ADD_TO_CART":
            const item = action.payload;

            const itemAlreadyInCart = state.cartItems.find(product => product.id === item.id)
            return itemAlreadyInCart ? state : {...state, cartItems: [...state.cartItems, action.payload]}
    
        case "REMOVE_FROM_CART":
            const cartWithoutItem = state.cartItems.filter(item => item.id !== action.payload)
            return {...state, cartItems: cartWithoutItem}

        case "RESET_CART":
            return {...state, cartItems: []}

        default:
            return state;
    }
}