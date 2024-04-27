import { createSlice } from '@reduxjs/toolkit'
import allProducts from "../../data"

const initialState = {
  products:allProducts,
  total:0,
  price:0,
}

export const productsSlice =createSlice({
  nam:"products",
  initialState,
  reducers:{},
})


export default productsSlice.reducer
