
import React, { useState } from "react"
import styles from "./timeSelector.module.css"
import time from "../../../mocks/time.json"

export default function TimeSelector({setTimeArrival}) {

  const [isOpen, setIsOpen] = useState(false)
  const [selectedOption, setSelectedOption] = useState(null)

  const toggling = () => {
    setIsOpen((prevState) => !prevState)
  }

  const handleClick = (time) => () => {
    setSelectedOption(time.value)
    setTimeArrival(time.value)
    setIsOpen(false)
  }

  return (
    <section className={styles.time}>
      <div className={styles.locationSelect}>
        <div
          onClick={toggling}
          className={`${styles.preselectedOption} ${
            selectedOption ? styles.selected : ""
          }`}
        >
          <>{selectedOption || "Elegí un horario estimado"}</>
        </div>

        {isOpen && (
          <div className={styles.listContainer}>
            <ul className={styles.locationSelect}>
              <div className={styles.space} />
              {time.map((time) => (
                <li
                  value={time.value}
                  key={time.key}
                  className={styles.locationSelect}
                  onClick={handleClick(time)}
                >
                  <div className={styles.listContent}>
                    <div className={styles.textContainer}>
                      <div className={styles.time_value}>
                        {time.value}
                        <br />
                      </div>
                    </div>
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