
import axios from 'axios'
import React from 'react'
import { useDispatch } from 'react-redux'
import { getAllProductsCart } from '../../store/slices/cart.slice'
import getConfig from '../../utils/getConfig'
import './style/cartInfo.css'

const CartInfo = ({productCart}) => {
    
  const dispatch=useDispatch()

  const deleteProduct=()=> {
    const URL=`https://ecommerce-api-react.herokuapp.com/api/v1/cart/${productCart.id}`

    axios.delete(URL,getConfig())
      .then(res=>{
        console.log(res.data)
        dispatch(getAllProductsCart())
      })
      .catch(err => console.log(err.data))
  }

  return (
    <section className='cart_product-data'>
        <p className='cart_brand'>{productCart.brand}</p>
        <h3 className='cart_title-product'>{productCart.title}</h3>
        <p className='cart_quantity'>{productCart.productsInCart.quantity}</p>
        <p>$ {productCart.price}</p>
        <div onClick={deleteProduct} className='cart_info-btn'>
        <i className="fa-solid fa-trash-can"></i>
      </div>
    </section>
  )
}

export default CartInfo