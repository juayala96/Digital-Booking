import React from 'react'
import styles from './DetailInformation.module.css'
import ubicationIcon from '../../../../assets/ubication.png'

export const DetailInformation = ({product}) => {
  return (
        <div className={styles.detail_information}>
            <h5 className={styles.categoria_bloque}>{product.categoria.titulo.toUpperCase()}</h5>
            <h4>{product.titulo}</h4>
            <div className={styles.location}>
                <img src={ubicationIcon} alt="ubication icon" className={styles.bloque_location_icon}/>
                <div className={styles.bloque_location_info}>
                    <p>{product.ciudad.ciudad}, Argentina</p>
                    <p>{product.ubicacion}</p>
                </div>
            </div>
        </div>
  )
}
