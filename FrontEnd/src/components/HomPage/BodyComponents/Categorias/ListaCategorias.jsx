import React, {useState, useEffect} from 'react'
import LoadingPage from '../../../LoadingPage/LoadingPage'
import CardCategories from './CardCategories/index'
import styles from "./listaCategorias.module.css"



export default function ListaCategorias() {

  const [categoryInfo, setCategoryInfo] = useState([])
  const urlCategorias = 'http://52.14.221.16:8080/categorias'
  const settings ={
                   method: 'GET',
                   headers: {
                          'Content-Type': 'application/json'
                   } 
                  }

    useEffect(() => { 
            Promise.resolve().then(async function(){
              try{
                  const response = await fetch (urlCategorias, settings)
                  const data = await response.json()
                  setCategoryInfo(data) 
              } catch (error){
                  console.error(error)
              }
            })
            }, [urlCategorias])


if (!categoryInfo) {
  return <LoadingPage/>
}

  return (
  <div className={styles.categories_container}>
    <h2 className={styles.title}>Buscar por tipo de alojamiento</h2>

      <div className={styles.container}>
          {categoryInfo.map((c, index) => <CardCategories  key={index} categoria={c}/>)}
      </div>
      
    </div>
  )
}