import axios from "axios"
import {useEffect} from "react"
import {useDispatch} from "react-redux"
import {Route, Routes} from "react-router-dom"
import CartScreen from "./components/Cart/CartScreen"
import HomeScreen from "./components/Home/HomeScreen"
import LoginScreen from "./components/Login/LoginScreen"
import ProductScreen from "./components/Products/ProductScreen"
import ProtectedRoutes from "./components/ProtectedRoutes"
import PurchasesScreen from "./components/Purchases/PurchasesScreen"
import FooterScreen from "./components/Shared/FooterScreen"
import HeaderScreen from "./components/Shared/HeaderScreen"
import {getAllproducts} from "./store/slices/products.slice"



function App() {
  
  //  useEffect(() => {
    
  //   const URL = 'https://ecommerce-api-react.herokuapp.com/api/v1/users'

  //   const newUser = {
  //     firstName: "Constancita",
  //     lastName: "Morales",
  //     email: "constacitamor236@gmail.com",
  //     password: "pass236",
  //     phone: "4294537879",
  //     role: "admin"
  //   }
    
  //   axios.post(URL, newUser)
  //     .then(res => console.log(res.data))
  //     .catch(err => console.log(err.data))
  // }, [])




  const dispatch=useDispatch()

  useEffect(() =>{
    dispatch(getAllproducts())
  },[]) 

  return (
    <div className="App">
      <HeaderScreen/>
      <main className="main">
        <Routes>
          <Route path='/' element={<HomeScreen/>}/>
          <Route path='/login' element={<LoginScreen/>}/>

          <Route element={<ProtectedRoutes/>}>
            <Route path="/cart" element={<CartScreen/>}/>
            <Route path="/purchases" element={<PurchasesScreen/>}/>
          </Route>
          <Route path="/product/:id" element={<ProductScreen/>}/>
        </Routes>

      </main>
      <FooterScreen />
    </div>
  )
}

export default App
