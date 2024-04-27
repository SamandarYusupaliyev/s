import { createSlice } from '@reduxjs/toolkit'
import allProducts from "../../data"

const initialState = {
  products:allProducts,
  total:0,
  price:0,
}

export const productsSlice =createSlice({
  name:"products",
  initialState,
  reducers:{
    increaseAmount:(state,{payload})=>{
      const item = state.products.find((product)=>{
        return product.id == payload;
      });
      item.amount +=1;
    },
    decreaseAmount:(state,{payload})=>{
      const item = state.products.find((product)=>{
        return product.id == payload;
      });
      item.amount -=1;
    },
    removeItem:(state,{payload})=>{},
    calulateTotal:(state)=>{
      let price =0;
      let total =0;
      state.products.forEach((product)=>{
        total= total+product.amount;
        price = price+product.amount*product.price;
      })
      state .price =price;
      state.total =total;
    },
  },
})


export default productsSlice.reducer
