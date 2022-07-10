import axios from 'axios'
import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {setCartGlobal} from '../../store/slices/cart.slice'
import getConfig from '../../utils/getConfig'
import CartInfo from './CartInfo'



const CartScreen= () => {

   const dispatch= useDispatch ()

  const purchase=()=> {

    const URL = 'https://ecommerce-api-react.herokuapp.com/api/v1/purchases'

    const obj= {
      street: "Green St. 1456",
      colony: "Southwest",
      zipCode: 12345,
      city: "USA",
      references: "Some references"
    }

    axios.post(URL, obj, getConfig())
      .then(res => {
        console.log(res.data)
        dispatch(setCartGlobal(null))
      })
      .catch(err => console.log(err.data))
  }

  const cart = useSelector(state =>state.cart)

  let priceTotal=0
  if (cart){
    const cb =(acc,cv)=> {
      return acc + (cv.price*cv.productsInCart.quantity)
    }
    priceTotal= cart.reduce(cb,0)
  }


  return (
    <div className='container_cart'>
     <article className='cart'>
      <h2 className='cart_title'>My Cart</h2>
      {
          cart?.map(productCart => (
            <CartInfo
            key={productCart.id}
            productCart={productCart}
            />
            ))
        }
        {
        cart ?
          <h2 className='cart_total'>
            <span className='cart_total-label'>Total: $</span>
            <span >{priceTotal}</span>
          </h2>
        :
        
       <h4  className='cart_message'>The cart is empty </h4>
      }
      <button className='cart_btn' onClick={purchase} >Confirm Purchase</button>
    </article>
      
  
    </div>
  )
}

export default CartScreen