import React from 'react'
import CardProduct from './ProductCard/CardProduct'
import styles from "./listaProductos.module.css"
import NoProductsFound from '../NoProductsFound/NoProductsFound'

export default function ListaProductos({productInfo, title, userOwnsProduct, message, goBack}) {   

  return (
    <div className={styles.recomendation}>
    <h2 className={styles.title}>{title}</h2>
      <div className={styles.container}>
          {productInfo.map((p, index) => <CardProduct key={index} producto={p} userOwnsProduct={userOwnsProduct}></CardProduct>)}
          {(productInfo.lenght===0)&&(<NoProductsFound message={message} goBack={goBack}/>)}
      </div>
    </div>
  )
}