import axios from 'axios'
import React, {useState} from 'react'
import {useDispatch } from 'react-redux'
import {getAllProductsCart} from '../../store/slices/cart.slice'
import getConfig from '../../utils/getConfig'

const ProductInfoId=({product}) =>{

  const [counter,setCounter]= useState(1)

  const dispatch =useDispatch()

  const addToCart =()=> {

    const URL='https://ecommerce-api-react.herokuapp.com/api/v1/cart'

    const addproduct= {
      id: product.id,
      quantity:counter
    }

    axios.post(URL,addproduct,getConfig())
      .then(res=>{
        console.log(res.data)
        dispatch(getAllProductsCart())
      })
      .catch(err=>console.log(err.data))
  }

  const minusOne=()=> {
    const minus = counter - 1
    if(minus>= 1){
      setCounter(minus)
    }
  }

  const plusOne =()=>setCounter(counter + 1)

  return (
    <article className='product-info'>
      <h2 className='product-info_title'>{product?.title}</h2>
      <p className='product-info_description'>{product?.description}</p>
      <div className='card-product_price-container'>
        <h3 className='l product-info_label'>Price</h3>
        <p className='card-product_price-number product-info_number'>$ {product?.price}</p>
      </div>
      <div className='product-info_quantity-container'>
        <div onClick={minusOne} className='product-info_minus'>-</div>
        <div className='product-info_counter'>{counter}</div>
        <div onClick={plusOne} className='product-info_plus'>+</div>
      </div>
      <button onClick={addToCart} className='product-info_btn'>
        Add to Cart <i className="fa-solid fa-cart-plus"></i>
      </button>
    </article>
  )
}

export default ProductInfoId