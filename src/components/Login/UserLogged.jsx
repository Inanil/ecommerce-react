import React from 'react'
import './style/userLogged.css'

const UserLogged = () => {
  return (
    <article className='container_user-login'>

       <div className='container_user'>  <i className="fa-solid fa-user-check"></i></div>
      <h2 className='user_name'>User Logged</h2>
    </article>
  )
}

export default UserLogged