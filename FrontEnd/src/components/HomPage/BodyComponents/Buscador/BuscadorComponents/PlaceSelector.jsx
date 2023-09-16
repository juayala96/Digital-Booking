import { FaMapMarkerAlt } from "react-icons/fa"
import { GoLocation } from "react-icons/go"
import React, { useState, useEffect } from "react"
import styles from "./placeSelector.module.css"
import { useLocation } from "react-router-dom"

export default function PlaceSelector({setCitySelected, cityList}) {

  const [isOpen, setIsOpen] = useState(false)
  const [selectedOption, setSelectedOption] = useState(null)

  const toggling = () => {
    if(cityList==null || cityList.length==0) return;
    setIsOpen((prevState) => !prevState)
  }

  const handleClick = (city) => () => {
    setSelectedOption(city.ciudad)
    setIsOpen(false)
    setCitySelected(city)
 
  }

  const location = useLocation()
  useEffect(()=>{
    if (!location.pathname.includes("city")){
        setSelectedOption(null)
        setCitySelected(null)
    } 
}, [location.pathname])

  const orderedCities = (cities) => {
    return cities.sort((c1, c2) => {
      if (c1.name > c2.name) {
        return 1
      }
      if (c1.name < c2.name) {
        return -1
      }
      return 0
    })
  }

  return (
    <section className={styles.location}>
      <div className={styles.locationSelect}>
        <div
          onClick={toggling}
          className={`${styles.preselectedOption} ${
            selectedOption ? styles.selected : ""
          }`}
        >                  
            <div className={styles.iconPreselected}>
              <FaMapMarkerAlt />
            </div>
            <>{selectedOption || "¿A dónde vamos?"}</>
          
        </div>

        {isOpen && (
          <div className={styles.listContainer}>
            <ul className={styles.locationSelect}>
              <div className={styles.space} />
              {orderedCities(cityList)?.map((city) => (
                <li
                  value={city.ciudad}
                  key={city.id}
                  className={styles.locationSelect}
                  onClick={handleClick(city)}
                >
                  <div className={styles.listContent}>
                    <div className={styles.textContainer}>
                      <div className={styles.icon}>
                        <GoLocation />
                      </div>
                      <div className={styles.cityName}>
                        {city.ciudad}
                        <br />
                      </div>
                    </div>
                    <hr className={styles.divider} />
                  </div>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </section>
  )
}

