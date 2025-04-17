import { createSlice } from "@reduxjs/toolkit";

export const catSlice = createSlice({
    initialState: JSON.parse(localStorage.getItem('cart')) || [],
    name: 'cartSlice',
    reducers: {
        addToCart: (state, action) => {
            const findProduct = state.find((product) => product.id === action.payload.id)
            if (findProduct) {
                findProduct.quantity += 1
            } else {
                const productClone = { ...action.payload, quantity: 1 };
                state.push(productClone)
            }
            localStorage.setItem('cart', JSON.stringify(state))
        },
        inCrement: (state, action) => {
            const productincrement = state.find((pro) => pro.id === action.payload.id)
            if (productincrement) {
                productincrement.quantity += 1;
            }
            localStorage.setItem('cart', JSON.stringify(state))
        },
        deCrement: (state, action) => {
            const productdecrement = state.find((pro) => pro.id === action.payload.id)
            if (productdecrement) {
                productdecrement.quantity -= 1;
            }
            localStorage.setItem('cart', JSON.stringify(state))
        },
        deleteFromCart: (state, action) => {
            const newstate = state.filter((pro) => pro.id !== action.payload.id)
            localStorage.setItem('cart', JSON.stringify(newstate))
            return newstate
        },
        clearcart:()=>{
            return []
        }
    }
})
export const { addToCart,inCrement,deCrement,deleteFromCart ,clearcart} = catSlice.actions;
export default catSlice.reducer;