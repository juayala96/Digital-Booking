import React, {useState, useEffect} from 'react'

/**
 * Descripcion
 * Receives a string date and displays it in detail => ej: 09 de Diciembre de 2022
 * @param date string of date(ej: 2022-12-09)
 *
 */

export default function DateDisplayer ({date}) {
  
    const [displayDates, setDisplayDates] = useState('-/-/-')

    useEffect(()=>{
        if(date!==""){
            let months = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"]
            let startYear = date.slice(0, -6)
            let startMonth = months[date.slice(5, -3)-1] 
            let startDay = date.slice(8)
            setDisplayDates(startDay+" de "+startMonth+" de "+startYear)
        }
    }, [date])
    
    console.log(displayDates)

    return (
        <>{displayDates}</>
  )
}
