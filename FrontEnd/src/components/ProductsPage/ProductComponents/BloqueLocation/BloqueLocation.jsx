import React from "react";
import ubicationIcon from "../../../../assets/ubication.png"
import styles from './bloqueLocation.module.css'



export default function BloqueHeader ({product}) {
    return (
            <div className={styles.bloque_location}>
                <img src={ubicationIcon} alt="ubication icon" className={styles.bloque_location_icon}/>
                
                <div className={styles.bloque_location_info}>
                    <p>{product.ciudad.ciudad}, Argentina</p>
                    <p>{product.ubicacion}</p>
                </div>
            </div>
    )}