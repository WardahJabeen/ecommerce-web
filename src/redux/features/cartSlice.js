import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

export const cartSlice = createSlice({
    name: "cartSlice",
    initialState,
    reducers: {
        addToCart: (state, action) => {
            // if item is being added the first time
            if (state.findIndex((pro) => pro.id === action.payload.id) === -1) {
                state.push(action.payload);
                //if item is already in cart, increment the count
            } else {
                return state.map((item) =>
                    item.id === action.payload.id
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                );
            }
        },
        //filter out the item from cart
        removeFromCart: (state, action) => {
            const id = action.payload;
            return state.filter((item) => item.id !== id);
        },
    },
});

export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;