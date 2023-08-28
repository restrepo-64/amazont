export const initialState = {
    cart: [],

};

export const getCartTotal = (cart) =>
    cart?.reduce((amount, item) => item.price + amount, 0);

const reducer = (state, action) => {
    console.log(action);
    switch(action.type) {
        case 'SET_USER':
            return {
                ...state,
                user: action.user
            }
        case 'ADD_TO_CART':
            //logic: add item to cart
            return {
                ...state, 
                cart: [...state.cart, action.item]
,            };

        case 'REMOVE_FROM_CART':
            //logic: remove item from cart

            let newCart = [...state.cart];

                //find the index(if it exists) of the item that matches the action(the info the button gives)
                //match id of cart to id of item attached to button/div
            const index = state.cart.findIndex((cartItem => cartItem.id ===action.id));

            if (index >= 0) {
                //item exists in basket, remove it
                newCart.splice(index, 1); //goes to that point in array and cut it


            } else {
                console.warn( //red console log
                    `Cant remove product (id: ${action.id}) as its not in cart`
                )
            }

            return {
                //find it, parse it out, and remove it
                ...state, 
                cart: newCart
            };
    
        default: 
            return state;
    }
}

export default reducer;