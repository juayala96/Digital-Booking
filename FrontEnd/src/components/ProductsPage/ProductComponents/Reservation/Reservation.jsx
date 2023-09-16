import React, { useContext } from "react";
import CalendarProduct from "./CalendarProduct";
import styles from './reservation.module.css';
import{useNavigate } from 'react-router-dom'
import { userInfoContext } from "../../../../App";
import { useState } from "react";
import { useEffect } from "react";
import PrimaryButton from "../../../PrimaryButton/PrimaryButton";

export default function Reservation ({daysBooked, handleLogOut, handleCheckIn, handleCheckOut, product}) {
    const userLogged = useContext(userInfoContext)
    const navigate = useNavigate();
    const productTitle = product.titulo.replace(/ /g,'-')
    const [bookingText, setBookingText] = useState("")
    const [buttonTitle, setButtonTitle] = useState("")

    useEffect(()=>{
        if(userLogged.idRole===2){
            setBookingText("Agregá tus fechas de viaje para obtener precios exactos")
            setButtonTitle("Iniciar reserva")
        } else if(userLogged.id===product.usuario.id){
            setBookingText("Así se ve tu producto")
            setButtonTitle("Volver a Mis Productos")
        } else if (userLogged.idRole===1){
            setBookingText("No podes realizar reservas siendo un Administrador de propiedades. Te recomendamos cerrar sesion y cambiar de usuario")
            setButtonTitle("Cambiar de usuario")
        } else {
            setBookingText("Iniciá sesión para poder realizar la reserva")
            setButtonTitle("Iniciar sesión")
        }
    })

    const HandleNavigate = ()=>{
        if (userLogged.idRole===2) {
            navigate("/products/id="+product.id+"/"+productTitle+"/booking-detail", window.scroll(0, 0)); 
        } else if(userLogged.idRole===1 && userLogged.id===product.usuario.id){
            navigate("/my-products", window.scroll(0, 0));
        }else if (userLogged.idRole===1){ 
            localStorage.setItem("idProduct", product.id);
            localStorage.setItem("nameProduct", productTitle);
            handleLogOut()
            navigate("/login", window.scroll(0, 0));
        } else {
            localStorage.setItem("idProduct", product.id);
            localStorage.setItem("nameProduct", productTitle);
            navigate("/login", window.scroll(0, 0));
        }
    }

    return (
        <div className={styles.reservation}>
            <h2>Fechas Disponibles</h2>
            <div className={styles.reservation_container}>
                <div className={styles.calendar_product}>
                <CalendarProduct daysBooked={daysBooked} handleCheckIn = {handleCheckIn} handleCheckOut = {handleCheckOut}/>
                </div>
                <div className={styles.reservation_start}>
                    <p>{bookingText}</p>
                    <PrimaryButton onClickFunction={HandleNavigate} text={buttonTitle}/>
                </div>
            </div>
        </div>
    )}