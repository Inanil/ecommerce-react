import React from 'react'
import './style/productsPurchase.css'

const PruductsPurchases = ({product}) => {
  
    return (
   <section className='container_data-pruchase'>
    <h4 className='purchase_title'>{product.title}</h4>
    <p className='purchase_quantity'>{product.productsInCart.quantity}</p>
    <p className='purchase_price'>${product.price}</p>
   </section>
  )
}

export default PruductsPurchases