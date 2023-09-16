import React, {useState, useEffect} from "react";
import { useParams, useLocation} from "react-router-dom";
import ListaProductos from "../../../ProductList/ListaProductos"
import NoProductsFound from "../../../NoProductsFound/NoProductsFound";

export default function Reults() {

// fetch for filters

const location = useLocation()
const [productInfo, setProductInfo] = useState([])
const {id} = useParams()
const {startDate} = useParams()
const {endDate} = useParams()
const [urlProductos, setUrlProductos] = useState('')
const [title, setTitle] = useState('')
const [productsNotFound, setProductsNotFound] = useState(false)

const settings ={
                   method: 'GET',
                   headers: {
                          'Content-Type': 'application/json'
                   } 
                  }

useEffect(()=>{
if (location.pathname.includes('date') && location.pathname.includes('city')){
    setUrlProductos('http://52.14.221.16:8080/productos/filter?idCiudad='+id+'&fechaInicial='+startDate+'&fechaFinal='+endDate)
    setTitle("Resultados de la búsqueda")
} else if (location.pathname.includes('city')){
    setUrlProductos('http://52.14.221.16:8080/productos/byCiudad/'+id)
    setTitle("Resultados de la búsqueda")
} else if (location.pathname.includes('date')) {
    setUrlProductos('http://52.14.221.16:8080/productos/filter?fechaInicial='+startDate+'&fechaFinal='+endDate)
    setTitle("Resultados de la búsqueda")
} else if (location.pathname.includes('category')){
    setUrlProductos('http://52.14.221.16:8080/productos/byCategoria/'+id)
    setTitle("Resultados de la búsqueda")
} else {
  setUrlProductos('http://52.14.221.16:8080/productos/filter')
  setTitle("Recomendaciones")
}

}, [location, urlProductos])

    useEffect(() => {
            if (urlProductos==='') return
            Promise.resolve().then(async function(){
              try{
                  const response = await fetch (urlProductos, settings)
                  const data = await response.json()
                  setProductInfo(data)
                  if (data.length===0){
                    setProductsNotFound(true)
                  } else {
                    setProductsNotFound(false)
                  }
              } catch (error){
                console.error(error)
              }
            })
    }, [urlProductos])  
  
  if(!title&&!productInfo){
    return
  }

  console.log("PRODUCT INFO", productInfo)
  
  return(
      <>
        {!productsNotFound&&(<ListaProductos productInfo={productInfo} title={title}/>)}
        {productsNotFound&&(
        <NoProductsFound message={"No se han encontrado hospedajes"} goBack={false}/>)}
      </>
  )
}