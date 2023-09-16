import React from "react";
import styles from "./cardProduct.module.css"
import ubi from "../../../assets/ubication.png"
import { Link } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import DateDisplayer from "../../DateDisplayer/DateDisplayer";
import PrimaryButton from "../../PrimaryButton/PrimaryButton"
 
const CardProduct = ({producto, userOwnsProduct}) => {
  const productTitle = producto.titulo.replace(/ /g,'-')
  const [path, setPath] = useState()

  useEffect(()=>{
    if (!userOwnsProduct){
    setPath("/products/id="+producto.id+"/"+productTitle)
  }else{
    setPath("/my-product/id="+producto.id+"/"+productTitle)
  }
  },[producto])
  
    return (
      <div className={styles.card}>
        
        {/* image container */}
        <div className={styles.cardPicture}>
            <div className={styles.main_image_container}>
              <img className={styles.image} src={producto.imagenPrincipalURL} alt="imagen de un hospedaje"/>
            </div>
        </div>

        {/* body information */}
        <div className={styles.cardBody}>
            <div className={styles.title_container}>
              <div className={styles.category_container}>
                <p className={styles.category}>{producto.categoria.titulo}</p>
              </div>
              <h3 className={styles.title}>{producto.titulo}</h3>
            </div>

          <div className={styles.ubication}>
              <img className={styles.ubi} src={ubi} alt="icono ubicacion"/>
              <p className={styles.distance}>{producto.ciudad.ciudad}&nbsp; - &nbsp;{producto.ubicacion}</p>
          </div>
            
          <div className={styles.icons}>
            {producto.caracteristicasDelProducto.map((amenity, i)=>
                <div key={amenity.id} className={styles.amenity}>
                  <img src={amenity.iconoURL} alt={amenity.caracteristica} />
                </div>)}
          </div>

            <div className={styles.description}>
              <p>{producto.descripcion}</p>
            </div>

            {producto.checkin&&(
              <>
                <div className={styles.booking_date}>
                  <p>Check in:</p>
                  <DateDisplayer date={producto.checkin}/>
                </div>
                <div className={styles.booking_date}>
                  <p>Check out:</p>
                  <DateDisplayer date={producto.checkout}/>
                </div>
              </>
            )}
            <div className={styles.button_container}>
            <Link to={path} onClick={() => {window.scroll(0, 0); }}><PrimaryButton text={"Ver más"}/></Link>
            </div>
        </div>        
      </div>
    )
  }

  export default CardProduct;