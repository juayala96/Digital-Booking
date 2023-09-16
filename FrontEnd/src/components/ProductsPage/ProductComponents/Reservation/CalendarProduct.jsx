import React, { useState, useEffect } from "react"
import DatePicker from "react-datepicker"
import { registerLocale } from "react-datepicker"
import es from "date-fns/locale/es"
import "react-datepicker/dist/react-datepicker.css"
import "./calendarProduct.css"
import styles from "./reservation.module.css"

registerLocale("es", es)

export default function CalendarProduct ({daysBooked, handleCheckIn, handleCheckOut}) {
  const [selectedStartDate, setSelectedStartDate] = useState("")
  const [selectedEndDate, setSelectedEndDate] = useState("")
  const [dateRange, setDateRange] = useState([null, null])
  const [startDate, endDate] = dateRange
  const [width, setWidth] = useState(window.innerWidth)
  const handleResize = () => setWidth(window.innerWidth)
  const [showError, setShowError] = useState(false)

  useEffect(() => {
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  useEffect(() => {
    if (startDate && endDate) {
      setSelectedStartDate(parseDates(startDate))
      setSelectedEndDate(parseDates(endDate))
      handleCheckIn(parseDates(startDate))
      handleCheckOut(parseDates(endDate))
    }
  }, dateRange)
  
  const parseDates = (date) => {
    return (
      date.getFullYear() +
      "-" +
      ("0" + (date.getMonth() + 1)).slice(-2) +
      "-" +
      ("0" + date.getDate()).slice(-2)
    )
  }

  const validateRange = (range) => {
    const [start, end] = range;

    const selectedDates = {
      "start": start,
      "end": end
    }

    setShowError(false)
    
    setDateRange(range)

    if (!range[0] || !range[1]) return
    
    let overlaps = false
    for (let i = 0; i < daysBooked.length && !overlaps; i++) {
      const reserva = daysBooked[i];

      reserva.start = new Date(reserva.start)
      reserva.end = new Date(reserva.end)

      overlaps = doesOverlap(selectedDates, reserva)

      if (overlaps) {
        setDateRange([null, null])
        // llamar a metodo que muestra error en la UI
        setShowError(true)
      }
    }
  }


  function doesOverlap(e1, e2) {
    var e1start = e1.start.getTime();
    var e1end = e1.end.getTime();
    var e2start = e2.start.getTime();
    var e2end = e2.end.getTime();

    return (e1start > e2start && e1start < e2end ||
      e2start > e1start && e2start < e1end)
  }

const disabledDateRanges = daysBooked.map(range => ({
    start: new Date(range.start),
    end: new Date(range.end)
}));




  return (
    <>
    <DatePicker 
      className={styles.date_picker}
      inline
      readOnly={true}
      selectsRange={true}
      //Language setting
      locale="es"
      dateFormat="dd 'de' MMM"
      //Show more than one month:
      monthsShown={width>767?2:1}
      //Disable previous dates:
      showDisabledMonthNavigation
      minDate={new Date()}
      startDate={startDate}
      endDate={endDate}
      onChange={(update) => {
        validateRange(update)
      }}
      //Disable dates already booked:
      excludeDateIntervals={disabledDateRanges}
    ></DatePicker>
    {showError&&<div className={styles.show_error}>- Por favor, elija solamente fechas disponibles -</div>}
    </>
  )
}
