import React, {useState, useEffect} from "react";
import { Routes, Route, useParams } from "react-router-dom";
import LoadingPage from "../LoadingPage/LoadingPage";
import ProductInformation from "./ProductInformation";
import BookingPage from "../BookingPage/BookingPage";
import BloqueHeader from "../BloqueHeader/BloqueHeader";

export default function ProductPage ({handleLogOut}) {
    const [product, setProduct] = useState(null)
    const { id } = useParams();
    const [images, setImages] = useState()
    const [checkin, setCheckin] = useState("")
    const [checkout, setCheckout] = useState("")
    const [daysBooked, setDaysBooked] = useState(null)

    const urlProductId = 'http://52.14.221.16:8080/productos/'+id
    const settings ={
                   method: 'GET',
                   headers: {
                          'Content-Type': 'application/json'
                   } 
                  }

    useEffect(() => {
            Promise.resolve().then(async function(){
              try{
                  const response = await fetch (urlProductId, settings)
                  const data = await response.json()
                  setProduct(data.producto) 
                  setImages(data.imagenes)
                  setDaysBooked(data.reservas)
              } catch (error){
                  console.error(error)
              }
            })
    }, [  ])

    if(!product){
        return (<LoadingPage/>)
    }

    const infoHeader = {
        upperHeader: product.categoria.titulo,
        title: product.titulo
    }

    return (
        <>
            <BloqueHeader header={infoHeader} />  
            <Routes>
                <Route path='/' element={<ProductInformation daysBooked={daysBooked} handleLogOut={handleLogOut} images={images} product={product} handleCheckIn = {setCheckin} handleCheckOut = {setCheckout} />}/>
                <Route path='/booking-detail' element={<BookingPage daysBooked={daysBooked} handleCheckIn = {setCheckin} handleCheckOut = {setCheckout} product={product} checkin={checkin} checkout={checkout}/>} /> 
            </Routes>
        </>
    )}
