import Calendar from "./Calendar"
import { FaCalendarDay } from "react-icons/fa"
import "./calendar.css"
import styles from "./dateSelector.module.css"

export default function DateSelector({setNewDateSelected}) {
  return (
    <section className={styles.calendar}>
      <FaCalendarDay className={styles.calendarIcon} />
      <Calendar setNewDateSelected={setNewDateSelected} />
    </section>
  )
}
