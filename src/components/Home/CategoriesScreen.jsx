import axios from 'axios'
import React from 'react'
import { useEffect, useState } from 'react'
import getConfig from '../../utils/getConfig'
import {useNavigate} from 'react-router-dom'
import './style/categorieScreen.css'

const CategoriesScreen = () => {
   

   const navigate= useNavigate()
  // const [categories,setCategories ] = useState()

  // useEffect(() => {
  //   const URL = 'https://ecommerce-api-react.herokuapp.com/api/v1/products/categories'
  //   axios.get(URL, getConfig())
  //     .then(res=>setCategories(res.data))
  //     .catch(err=>console.log(err))
  // }, [])

  // console.log(setCategories)
   const clickName= e =>{
      const select= e.target.textContent
      navigate (`/category/${select}`)
   }

  return (
    <aside>
     <ul className='container_categories'>
        <li> Categories</li>
         <li onClick={clickName}>Smart TV</li>
         <li onClick={clickName}>Computers</li>
         <li onClick={clickName}>Smartphones</li>
         <li onClick={clickName}>Kitchen</li>


          {/* {
              categories?.map(categorie =>(
                <li key={categorie.name} onClick={clickName}>
                {categorie.name}
            </li>)) 
          }
     */}
     </ul>
  
    </aside>
  )
}

export default CategoriesScreen
