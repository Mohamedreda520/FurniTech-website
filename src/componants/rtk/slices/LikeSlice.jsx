import { createSlice } from "@reduxjs/toolkit";


export const likeSlice= createSlice({
 initialState: JSON.parse(localStorage.getItem('favorites')) ||[],
 name:'likeslice',
 reducers:{
    addToFavorites:(state, action)=>{
const favoraiteproduct = state.find((item)=> item.id === action.payload.id)
        if (!favoraiteproduct) {
            const favoriteproductclone  ={...action.payload, favorite: 1}
            state.push(favoriteproductclone)
        }
        localStorage.setItem('favorites', JSON.stringify(state))
    },
    removeFromFavorites:(state,action)=>{
        const newstate = state.filter((item)=> item.id !== action.payload.id)
        localStorage.setItem('favorites', JSON.stringify(newstate))
        return newstate
    }
 }
})

export const{addToFavorites,removeFromFavorites}= likeSlice.actions;
export default likeSlice.reducer
