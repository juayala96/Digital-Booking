import React from 'react'
import PrimaryButton from '../../PrimaryButton/PrimaryButton'
import styles from './BloqueDetail.module.css'
import { DetailDate } from './DetailDate/DetailDate'
import { DetailInformation } from './DetailInformation/DetailInformation'

const BookingDetail = ({checkin, checkout, timeAlert, calendarAlert, handleBooking, product}) => {

  return (
            <div className={styles.bloque_detail}>
                <h3>Detalle de la reserva</h3>
                <div className={styles.bloque_detail_container}>
                    <div className={styles.bloque_detail_title}>
                        <div className={styles.detail_picture}>
                            <img src={product.imagenPrincipalURL} alt="imagen principal del alojamiento" />    
                        </div>
                    </div>
                    <div className={styles.bloque_detail_body}>
                        <DetailInformation product={product}/>
                        <DetailDate checkin={checkin} checkout={checkout}/>
                        <div className={styles.alert_container}>
                            {timeAlert&&(<p className={styles.alert}>Por favor, elija un horario aproximado de llegada</p>)}
                            {calendarAlert&&(<p className={styles.alert}>Por favor elija un rango de fechas para la reserva</p>)}                        
                        </div>
                        <div className={styles.button_container}>
                        <PrimaryButton onClickFunction={handleBooking} text={"Confirmar reserva"}/>
                        </div>
                    </div>
                </div>    
            </div>
  )
}

export default BookingDetail