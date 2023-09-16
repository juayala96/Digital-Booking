import React, { useState, useEffect } from "react";
import PlaceSelector from "./BuscadorComponents/PlaceSelector";
import DateSelector from "./BuscadorComponents/DateSelector";
import styles from "./Buscador.module.css"
import {useNavigate, useLocation} from "react-router-dom";
import PrimaryButton from '../../../PrimaryButton/PrimaryButton'

export default function Buscador () {
 
const navigate = useNavigate();

  const [cityList, setCityList] = useState();
  const urlCiudades = 'http://52.14.221.16:8080/ciudades'
  const settings ={
                   method: 'GET',
                   headers: {
                          'Content-Type': 'application/json'
                   } 
                  }

    useEffect(() => { 
            Promise.resolve().then(async function(){
              try{
                  const response = await fetch (urlCiudades, settings)
                  const data = await response.json()
                  setCityList(data) 
              } catch (error){
                  console.error(error)
              }
            })
            }, [urlCiudades])


const [citySelected, setCitySelected] = useState(null);
const [newDateSelected, setNewDateSelected] = useState(null)
const location = useLocation()

const handleBuscar = (event) => {
    event.preventDefault()
    
        if(citySelected!==null){
                if(newDateSelected!==null){
                    navigate(`/filter-by-city-and-date/id=${citySelected.id}/${citySelected.ciudad.replace(/ /g,'-')}/from=${newDateSelected.fechaInicio}/to=${newDateSelected.fechaFinal}`)
                } else {
                    navigate(`/filter-by-city/id=${citySelected.id}/${citySelected.ciudad.replace(/ /g,'-')}`)
                }
            } else if( newDateSelected!==null) {
            navigate(`/filter-by-date/from=${newDateSelected.fechaInicio}/to=${newDateSelected.fechaFinal}`)
        }
}

    return(
        <section className={styles.searchBar} aria-label="search">
                <h1 className={styles.searchTitle}>Busca ofertas en hoteles, casas y mucho más</h1>
            <form className={styles.searchBarForm} onSubmit={handleBuscar}>
                <PlaceSelector citySelected={citySelected} setCitySelected={setCitySelected} cityList={cityList}/>
                <DateSelector setNewDateSelected={setNewDateSelected}/>
                <div className={styles.search_button}>
                <PrimaryButton text={"Buscar"} buttonType={"submit"} />
                </div>
            </form>
        </section>
    )
}   