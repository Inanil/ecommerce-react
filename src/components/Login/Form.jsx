import axios from 'axios'
import React, {useState} from 'react'
import {useForm} from 'react-hook-form'
import {useNavigate} from 'react-router-dom'

const Form = () => {

  const [isErrorLogin, setIsErrorLogin] = useState(false)

  const {handleSubmit, reset, register} = useForm()

  const navigate = useNavigate()

  const submit = data => {
    const URL = 'https://ecommerce-api-react.herokuapp.com/api/v1/users/login'
    axios.post(URL, data)
      .then(res => {
        localStorage.setItem('token', res.data.data.token)
        navigate('/')
      })
      .catch(err => {
        localStorage.removeItem('token')
        setIsErrorLogin(true)
        setTimeout(() => {
          setIsErrorLogin(false)
        }, 5000)
      })
    reset({
      email: '',
      password: ''
    })
    
  }

  return (
    <form onSubmit={handleSubmit(submit)} className="login_form">
        <h2 className="login_title">Welcome!</h2>
        <p>Enter your email and password</p>
        <ul className="login_test">   
    
        <li className="flex-login">
          <span className="login-b"><i class="fa-solid fa-envelope"></i></span>   mason@gmail.com
        </li>
        <li className="flex-login">
          <span className="login-b"><i class="fa-solid fa-lock"></i></span>   mason1234
        </li>
      </ul>
   
      <ul className="login_list">
        <li className="login_item">
         <label htmlFor="login-email" className="login_label">Email</label>
        <input type="email"className="login_input" id="login-email" {...register('email')}/>
        </li>
        <li className="login__item">
          <label htmlFor="login-pass" className="login_label">Password</label>
          <input type="password"  className="login_input"  id="login-pass" {...register('password')}/>
        </li>
      </ul>
      <div>
        {
          isErrorLogin && 'Invalid credentials, try again...'
        }
      </div>
      <button className='login_btn'>Login</button>
    </form>
  )
}

export default Form