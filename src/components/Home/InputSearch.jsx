import React from 'react'
import './style/inputSearch.css'

const InputSearch = ({setSearchProduct}) => {

  const findProduct = e => {

    e.preventDefault() 
    setSearchProduct(e.target.value)
}

// const filCategories = e => {
//   setFilterCategories(e.target.value)
// }

  return (
    <form   className='input_container'>
      <input  className='input_search'type="text" onChange={findProduct}  placeholder='What are you lookin for &#63;'/>
    </form>
  )
}

export default InputSearch