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
  const [filterProduct, setFilterProduct] = useState()
  // const [categories, setCategories] = useState()
  // const [filterCategories, setFilterCategories] = useState()

  

  // useEffect(() => {
  //   if(filterCategories ==='All Categories'){
  //     products
  //   } else {
  //     const URL_CATEGORIES = `https://ecommerce-api-react.herokuapp.com/api/v1/products/categories/${filterProduct}` 
  //     axios.get(URL_CATEGORIES)
  //       .then(res =>{
  //        const arr=res.data.map(e => e.name)
  //        setProducts(arr)
  //       })
  //       .catch(err => console.log(err))
  //   }
    
  // }, [filterCategories])

  // useEffect(() => {
  //   const URL ='https://ecommerce-api-react.herokuapp.com/api/v1/products/categories'
     
  //   axios.get(URL)
  //     .then(res => setCategories(res.data))
  //     .catch(err => console.log(err))
  // }, [])
  
  useEffect(() => {
    setFilterProduct(products?.filter(e => e.title.includes(searchProduct?.toLowerCase())))
  }, [searchProduct])


  

  return (
    <div className='home'>
      
      <InputSearch
      setSearchProduct={setSearchProduct}/>

      <section className='products-container'>
        {
          filterProduct?
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