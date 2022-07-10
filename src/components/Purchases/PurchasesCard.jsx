import React from 'react'
import ProductsPurchases from'./ProductsPurchases'
import './style/productsPurchase.css'

const PurchasesCard = ({purchase}) => {

  return (
    <article className='purchase_card'>
      <h3 className='purchase_day'>{purchase.updatedAt}</h3>
      {
        purchase.cart.products.map(product => (
          <ProductsPurchases 
            key={product.id}
            product={product}
          />
        ))
      }
    </article>
  )
}
export default PurchasesCard
