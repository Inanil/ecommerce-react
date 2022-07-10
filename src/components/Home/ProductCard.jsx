import React from 'react'
import {useNavigate} from 'react-router-dom'

const ProductCard = ({product}) => {

  const navigate=useNavigate()

  const goToProductId =()=>navigate(`/product/${product.id}`)

  return (
    <article onClick={goToProductId} className='card-product'>
      <header className='card-product_header'>
        <img 
          className='card-product_img-back' 
          src={product.productImgs[1]} 
          alt="" 
        />
        <img 
          className='card-product_img' 
          src={product.productImgs[0]} 
          alt="" 
        />
      </header>
      <div className='card-product_body'>
        <h2 className='card-product_title'>{product.title}</h2>
        <div className='card-product_price-container'>
          <h3 className='card-product_price-label'>Price</h3>
          <p className='card-product_price-number'>${product.price}</p>
        </div>
        <button className='card-product_btn'>
          <i className="fa-solid fa-cart-plus"></i> 
        </button>
      </div>
    </article>
  )
}

export default ProductCard