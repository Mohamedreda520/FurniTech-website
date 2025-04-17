import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
export const fetchproducts = createAsyncThunk(
    "product/fetch",
    async () => {
        const res = await fetch('/data/products.json')
        const data = await res.json();
        return data

    }
);

const productSlice = createSlice({
    initialState: [],
    name: "productSlice",
    reducers: {},
    extraReducers: (bulider) => {
        bulider.addCase(fetchproducts.fulfilled, (state, actions) => {
            return actions.payload;
        })
    }
})

export const { } = productSlice.actions
export default productSlice.reducer;