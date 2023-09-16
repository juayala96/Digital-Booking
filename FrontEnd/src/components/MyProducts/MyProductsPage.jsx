import React, {useContext} from 'react'
import BloqueHeader from '../BloqueHeader/BloqueHeader'
import { userInfoContext } from "../../App";
import { Route, Routes, useNavigate } from 'react-router-dom';
import MyProductsDisplay from './MyProductsDisplay/MyProductsDisplay';
import MyNewProduct from './MyNewProduct/MyNewProduct'
import { useEffect } from 'react';

export default function MyProductsPage () {
    const navigate = useNavigate()
    const userInfo = useContext(userInfoContext)
    
    useEffect(()=>{
        if(userInfo.idRole!==1){
            navigate('/')
        }
    }, [userInfo.idRole])
    
    const infoHeader = {
        title: "Administración de propiedades"
    }  
  
    return (
    <>
        <BloqueHeader header={infoHeader}/>
        <Routes>
            <Route path="/" element={<MyProductsDisplay/>}/>
            <Route path="/my-new-product" element={<MyNewProduct/>}/>
        </Routes>
    </>
  )
}
