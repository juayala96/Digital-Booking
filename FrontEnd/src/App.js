import './App.css';
import react , { useState } from 'react';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Login from './components/Formularios/Login';
import CrearCuenta from './components/Formularios/CrearCuenta';
import {Routes, Route, useLocation, useNavigate}  from "react-router-dom";
import usuario from './mocks/api/usuario.json';
import MenuDrawer from './components/MenuDrawer/MenuDrawer';
import ProductPage from './components/ProductsPage/ProductPage'
import BodyHome from './components/HomPage/BodyHome';
import MyProductsPage from './components/MyProducts/MyProductsPage';
import useLogin from './hooks/useLogin';
import MyBookingPage from './components/MyBookings/MyBookingPage'

export const userInfoContext = react.createContext();

function App() {

    const user = useLogin()
    const location = useLocation()
    const navigate = useNavigate()
    const [userInfo, setUserInfo] = useState(user ?? {})
    
    const handleUserLogged = (userObj)=>{
      localStorage.setItem("userToken", userObj.tokenJWT)
      const avatar = (userObj.name.charAt(0)+userObj.lastName.charAt(0)).toUpperCase()
      userObj.avatar = avatar;
      setUserInfo(userObj)
      console.log("userOBJ", userObj)
    }

    const handleLogOut =()=>{
      localStorage.removeItem("userToken")
      setUserInfo({})
      if(location.pathname.includes('my-products') || location.pathname.includes('my-bookings') ){
        navigate('/')
      } else if(location.pathname.includes('booking-detail')){
        const productInfo = {
          id: localStorage.getItem("idProduct"),
          name: localStorage.getItem("nameProduct")
        }
        navigate(`/products/id=${productInfo.id}/${productInfo.name}`)
      }
    }

    const [showModal, setShowModal] = useState(false)
    const handleModalMenu = ()=>{
        setShowModal(!showModal);
    }

  return (
    <userInfoContext.Provider value = {userInfo}>
  
    <div className="App">
      {showModal && <MenuDrawer handleLogOut={handleLogOut} handleModalMenu={handleModalMenu}/>}  
      <Header handleLogOut={handleLogOut} handleModalMenu={handleModalMenu}/>
      <Routes>
        <Route path='/*' element={<BodyHome/>}/>
        <Route path='/login' element={<Login usuario={usuario} handleUserLogged={handleUserLogged}/>}/>
        <Route path='/register' element={<CrearCuenta/>}/>
        <Route path='/products/id=:id/:title/*' element={<ProductPage handleLogOut={handleLogOut}/>}/>
        <Route path='/my-products/*' element={<MyProductsPage/>}/>
        <Route path='/my-product/id=:id/:title/*' element={<ProductPage handleLogOut={handleLogOut}/>}/>
        <Route path='/my-bookings' element={<MyBookingPage/>}/>

      </Routes>
      <Footer/>
    </div> 
    </userInfoContext.Provider>
  );
}

export default App;
