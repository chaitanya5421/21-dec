import { createSlice } from "@reduxjs/toolkit";

const productsSlice = createSlice({
    name:'products',
    initialState:{
        data:[]
    },
    reducers:{
        setProducts(state, action){
            state.data = action.payload;
        }
    }
})

export const {setProducts} = productsSlice.actions
export default productsSlice.reducer


export function FetchProducts(){
    return async function fetchproductsThunk(dispatch, getstate){
        try{
            const res = await fetch('https://fakestoreapi.com/products')
            const data = await res.json()
            dispatch(setProducts(data))
        } catch (err){

        }
    }
}

