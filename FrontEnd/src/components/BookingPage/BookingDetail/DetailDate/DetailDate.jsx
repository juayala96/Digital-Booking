import React from 'react'
import styles from './DetailDate.module.css'
import DateDisplayer from '../../../DateDisplayer/DateDisplayer'

export const DetailDate = ({checkin, checkout}) => {

  return (
    <div className={styles.detail_date}>
        <hr />
        <div className={styles.check_in_out}>
        <p>Check-in</p>
        <p><DateDisplayer date={checkin}/></p>
        </div>
        <hr />
        <div className={styles.check_in_out}>
        <p>Check-out</p>
        <p><DateDisplayer date={checkout}/></p>
        </div>
        <hr />
    </div>
  )
}
