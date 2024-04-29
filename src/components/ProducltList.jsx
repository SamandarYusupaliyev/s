import {  useDispatch, useSelector } from "react-redux"

import { calulateTotal , decreaseAmount , increaseAmount , removeItem } from "../features/products/productsSlice"




  const ProductsList = () => {
    const dispatch = useDispatch()
    const {products} = useSelector((store) => store.products)
    
    const {price} = useSelector((store)=> store.products)
    return (
      <div>
        <ul className="grid lg:grid-cols-1 md:grid-cols-2 grid-cols-3  ">
          {products.map((product)=>(
            <li key={product.id} className="mb-10">
          <div className="card card-side bg-base-100 shadow-xl">
            <div className="w-60 h-60"><img className="w-full h-full rounded-2xl" src={product.images[0]} alt="Product"/></div>
            <div className="card-body flex flex-col items-center justify-center">
        <h2  className="card-title  text-xl mb-5">{product.title}</h2>
          <div className="flex items-center text-2xl gap-3 mb-4">
        <button className="btn text-xl" onClick={()=> {dispatch(increaseAmount(product.id))}}>+</button>
        <span className="btn">{product.amount}</span>
        <button className="btn text-" onClick={()=> {
          if(product.amount > 1) {
            dispatch(decreaseAmount(product.id))
          } else {
            dispatch(removeItem(product.id))
          }
        }}>-</button>
            </div>
        <div className="flex justify-center items-center gap-5 mb-5">
         <p className="ms-8">{product.price}$</p>
         <p className="line-through">899 $</p>
         <button className="bg-purple-950 text-white w-20 rounded">aksiya</button>
        </div>
        <div className="card-actions">
          <button onClick={()=> {dispatch(removeItem(product.id))}} className="btn btn-primary w-40 ">Remove</button>
        </div>
            </div>
          </div>
          </li>
          ))}
        
        </ul>
        <div className='flex items-center justify-center mt-3'>
        <span className='text-2xl text-center'>Total Price:</span>
        <p className='text-2xl ml-4'>{price}$</p>
      </div>
      </div>
      
    )
  }
 
 


export default ProductsList
