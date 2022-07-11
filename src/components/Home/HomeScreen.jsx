import React from 'react'
import { useSelector } from 'react-redux'
import InputSearch from './InputSearch'
import ProductCard from './ProductCard'
import './style/homeScreen.css'
import { useEffect, useState } from 'react'
import CategoriesScreen from './CategoriesScreen'

const HomeScreen=()=> {


  const products=useSelector(state=>state.products)
   
  
  const [searchProduct, setSearchProduct] = useState()
  const [filterProduct, setFilterProduct] = useState([])

  useEffect(() => {
    setFilterProduct(products?.filter(e => e.title.includes(searchProduct?.toLowerCase())))
  }, [searchProduct])


  console.log(filterProduct)

  return (
    <div className='home'>
      
      <InputSearch
      setSearchProduct={setSearchProduct}/>

      <section className='products-container'>
        {
          filterProduct.length?
          filterProduct?.map(product =>(
            <ProductCard
            key={product.id}
            product={product}
          />
          ))
          :
         products.map(product => (
            <ProductCard 
              key={product.id}
              product={product}
            />
          ))
        }
      </section>
    </div>
  )
}

export default HomeScreen