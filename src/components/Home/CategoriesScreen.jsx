import React from 'react'
import './style/categorieScreen.css'

const CategoriesScreen = () => {
  return (
    <aside>
     <ul className='container_categories'>
        <li className='container_categorie'>Price</li>
          <form action="">
            <input type="number" />
            <input type="number" />
            <button> Filter price</button>
          </form>
        
        <li> Categories</li>
        <ul className='container_categorie-name'>

        </ul>
    
     </ul>
  
    </aside>
  )
}

export default CategoriesScreen