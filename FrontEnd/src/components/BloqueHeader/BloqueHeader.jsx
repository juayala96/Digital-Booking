import React from "react";
import { useLocation, useNavigate  } from "react-router-dom";
import pathBackButton from "../../assets/pathBack.png"
import styles from './bloqueHeader.module.css';

/**
 * Descripcion
 * 
 * @param header an object.
 * structure: {
    upperHeader:string (upper header to render in upper case)
    title:string (main title to render)
}
 */

export default function BloqueHeader ({header}) {
    const location = useLocation();

    const navigate = useNavigate();
    const HandleGoBack = ()=>{
        if (location.pathname.includes('/booking-detail')){
            navigate(location.pathname.slice(0, -15))
        } else if (location.pathname.includes('/my-new-product') || location.pathname.includes('/my-product')){
            navigate('/my-products')
        } else {
            navigate('/')
        }
    }

    

    return (
            <div className={styles.bloque_header}>
                <div className={styles.info_container}>
                    {header.upperHeader&&(<div className={styles.title_category}>
                        {header.upperHeader.toUpperCase()} 
                    </div>)}
                    <div className={styles.title_product}>
                        { header.title} 
                    </div>
                </div>
                <img src={pathBackButton} alt="Back" className={styles.bloque_header_back} onClick={HandleGoBack}/>
            </div>
)}