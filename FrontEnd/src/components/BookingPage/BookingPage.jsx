import React, {useState, useEffect, useContext} from "react";
import styles from "./BookingPage.module.css"
import UserForm from "./UserForm/UserForm";
import BookingDateSelector from "./Calendar/BookingDateSelector";
import BookingTimeSelector from "./TimeSelector/BookingTimeSelector";
import BookingDetail from "./BookingDetail/BookingDetail";
import PolicyAndRules from "../ProductsPage/ProductComponents/Policy/PolicyAndRules";
import { userInfoContext } from "../../App";
import { useLocation, useNavigate } from "react-router-dom";
import ModalMessage from "../ModalMessage/ModalMessage";


export default function ProductPage ({daysBooked, handleCheckIn, handleCheckOut, checkin, checkout, product}) {

const navigate = useNavigate()
const [showModalFailedBooking, setShowModalFailedBooking] = useState(false)
const [showModalBooking, setShowModalBooking] = useState(false)
const [timeArrival, setTimeArrival] = useState("")
const [calendarAlert, setCalendarAlert] =useState(false)
const [timeAlert, setTimeAlert] =useState(false)
const userInfo = useContext(userInfoContext)
const [userCity, setUserCity] = useState("")
const location = useLocation()

const succedMessage = {
    path:"/",
    title:"¡Muchas Gracias!",
    body: "Su reserva se ha realizado con éxito",
    text: "",
    succed: true
}
const failedMessage = {
    path:"",
    title:"¡Lo sentimos!",
    body: "Su reserva NO se ha realizado con éxito",
    text: "Por favor, intente más tarde",
    succed: false
}

    useEffect(()=>{
        if(userInfo.idRole!==2){
            if(localStorage.getItem("idProduct")){
                navigate("/login")
            }
            navigate(location.pathname.slice(0, -15))
        }
    }, [userInfo.idRole])





const handleAcceptFailed = () => {
    setShowModalFailedBooking(false)
}

const handleBooking = ()=>{
    setCalendarAlert(false)
    setTimeAlert(false)
    let calendarOk = true;
    let timeOk = true;

    if (!checkin) {
        setCalendarAlert(true)
        calendarOk = false;
    } 
        
        if (!timeArrival) { 
        setTimeAlert(true)
        timeOk = false;
        }
        
        if(calendarOk && timeOk)
        {
            //info for the fetchs
            const data = { 
                fechaInicial : checkin,
                fechaFinal : checkout,
                idProducto : product.id,
                idUsuario : userInfo.id,
                horaLlegada : timeArrival
            }

            const usuarioCiudad = {          
                id: userInfo.id,
                ciudad: userCity
            }
            
            const settings = {
                    method: 'POST',
                    headers: {
                        'Authorization': `Bearer ${userInfo.tokenJWT}`,
                        'Content-Type': 'application/json'
                        },
                    body: JSON.stringify(data)
                            }
                
                //fetch to book a place
                            
                fetch('http://52.14.221.16:8080/reservas', settings)
                    .then(response => {
                        if (response.status!=200){
                            throw new Error(response)
                        } 
                            return response.json()
                        })
                        .then(data => {
                            console.log(data)
                            setShowModalBooking(true)
                            localStorage.removeItem("idProducto")
                            navigate(window.scrollTo(0, 0))
                            })
                        .catch((error) => {
                                console.error('Error:', error);
                                setShowModalFailedBooking(true)
                                navigate(window.scrollTo(0, 0))
                            });
                
                //fetch to update the user           

                fetch('http://52.14.221.16:8080/usuarios', {
                    method: 'PUT',
                    headers: {
                        'Authorization': `Bearer ${userInfo.tokenJWT}`,
                        'Content-Type': 'application/json'
                        },
                    body: JSON.stringify(usuarioCiudad)
                    })
                        .then(response => {
                            if (response.status!=200){
                                throw new Error(response.error)
                            } 
                                return response.json()
                            })
                        .then(usuarioCiudad => {
                            console.log("se cambio con exito ciudad " + usuarioCiudad.ciudad)
                            
                            })
                        .catch((error) => {
                                console.error('Error:', error);
                                
                            });
        } 

    }

    return(
        <>
            <div className={styles.main_container}> 
                <div className={styles.container}>   
                    <div className={styles.first_column}>
                        <UserForm handleUserCity={setUserCity} userCity={userCity}/>
                        <BookingDateSelector daysBooked={daysBooked} handleCheckIn={handleCheckIn} handleCheckOut={handleCheckOut}/>
                        <BookingTimeSelector setTimeArrival={setTimeArrival}/>
                    </div>
                    <div className={styles.second_column}>
                        <BookingDetail timeAlert={timeAlert} calendarAlert={calendarAlert} handleBooking={handleBooking} checkin={checkin} checkout={checkout} product={product} />
                    </div>
                </div>
                <PolicyAndRules info={product.politica}/>
                {showModalBooking&&(<ModalMessage handleShowMessage={setShowModalBooking} modalInfo={succedMessage}/>)}
                {showModalFailedBooking&&(<ModalMessage handleShowMessage={handleAcceptFailed} modalInfo={failedMessage}/>)}
            </div>
        </>
    )
}
