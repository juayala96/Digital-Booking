import React from 'react'
import TimeSelector from './TimeSelector'
import styles from './BookingTimeSelector.module.css'
import tilde from '../../../assets/tilde.png'

const BookingTimeSelector = ({setTimeArrival}) => {
  return (
        <div className={styles.time_selector}>
            <h3> Confirmá tu hora de llegada</h3>
            <div className={styles.time_container}>
                <div className={styles.time_title}><img src={tilde}/> <p>Tu habitación estará lista a partir del horario de Check-In</p></div>
                <span>Indicá tu horario estimado de llegada</span>
                <TimeSelector setTimeArrival={setTimeArrival}/>
            </div>                       
        </div>
  )
}

export default BookingTimeSelector