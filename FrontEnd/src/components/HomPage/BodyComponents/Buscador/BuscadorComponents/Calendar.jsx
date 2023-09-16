import React, { useState, useEffect } from "react"
import DatePicker from "react-datepicker"
import { registerLocale } from "react-datepicker"
import es from "date-fns/locale/es"
import "react-datepicker/dist/react-datepicker.css"
import "./calendar.css"
import {useLocation} from "react-router-dom"

registerLocale("es", es)

export default function Calendar ({setNewDateSelected}) {
  const [selectedStartDate, setSelectedStartDate] = useState("")
  const [selectedEndDate, setSelectedEndDate] = useState("")
  const [dateRange, setDateRange] = useState([null, null])
  const [startDate, endDate] = dateRange
  const [width, setWidth] = useState(window.innerWidth)
  const handleResize = () => setWidth(window.innerWidth)

  const location = useLocation()
  useEffect(()=>{
    if (!location.pathname.includes("date")){
        setSelectedStartDate("")
        setSelectedEndDate("")
        setDateRange([null, null])
        setNewDateSelected(null)
    } 
  }, [location.pathname])

  useEffect(() => {
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  useEffect(() => {
    if (startDate && endDate) {
      let parsedStartDate = parseDates(startDate)
      let parsedEndDate = parseDates(endDate)

      setSelectedStartDate(parsedStartDate)
      setSelectedEndDate(parsedEndDate)
      let date = {
        fechaInicio: parsedStartDate,
        fechaFinal: parsedEndDate
      }
      setNewDateSelected(date)
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

  return (
    <DatePicker
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
        setDateRange(update)
      }}
      withPortal={width <= 768 ? true : false}
      //isClearable={true}
      //Disable automatic close:
      shouldCloseOnSelect={true}
      placeholderText="Check In - Check Out"
    ></DatePicker>
  )
}
