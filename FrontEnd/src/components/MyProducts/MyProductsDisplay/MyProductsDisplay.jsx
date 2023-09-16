import React, {useContext, useEffect, useState} from 'react'
import { userInfoContext } from "../../../App";
import styles from './MyProductsDisplay.module.css'
import { Link } from 'react-router-dom';
import ListaProductos from '../../ProductList/ListaProductos';
import NoProductsFound from '../../NoProductsFound/NoProductsFound';
import PrimaryButton from '../../PrimaryButton/PrimaryButton';

export default function MyProductsPage () {
    const userInfo = useContext(userInfoContext)
    const [myProducts, setMyProducts] = useState()
    const [productsNotFound, setProductsNotFound] = useState(false)

    const urlProductos = 'http://52.14.221.16:8080/productos/byUsuario/'+userInfo.id
    const settings ={
                   method: 'GET',
                   headers: {
                          'Content-Type': 'application/json'
                   } 
                  }

    useEffect(() => {
            Promise.resolve().then(async function(){
              try{
                  const response = await fetch (urlProductos, settings)
                  const data = await response.json()
                  setMyProducts(data)
                  if (data.length===0){
                    console.log("Hola", data)
                    setProductsNotFound(true)
                  } 
              } catch (error){
                console.error(error)
                setProductsNotFound(true)
              }
            })
            
    },[])  
    
    console.log(myProducts)
    if(!myProducts){
      return
    }
    return (
    <>
        <div className={styles.new_product}>
            <div className={styles.greet_container}>
              <h1>Hola, {userInfo.name}!</h1>
            </div>
            <div className={styles.btn_container}>
            <Link to='/my-products/my-new-product'><PrimaryButton text={"Crear nueva propiedad"}/></Link>
            </div>
        </div>
        <div className={styles.my_product_list}>
            {!productsNotFound&&(<ListaProductos productInfo={myProducts} title={"Mis productos"} userOwnsProduct={true}/>)}
            {productsNotFound&&(
              <NoProductsFound message={"Aún no has publicado productos!"} goBack={true}/>
            )}
        </div>
    </>
  )
}
