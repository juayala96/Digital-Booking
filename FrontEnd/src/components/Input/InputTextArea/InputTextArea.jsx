import React from 'react'
import styles from '../Input.module.css'

/**
 * Descripcion
 * 
 * Input type text to save information entered by th user
 * 
 * @param handleValue a setState to save the value
 * @param label a string to display as label.
 * @param valueContent a string that contains the value of the input.
 * @param placeHolderContent a string to display in teh placeHolder.
 * @param rows number of rows to display
 * @param maxChar number. maximun length of characters
 */

export default function InputTextArea ({label, handleValue, valueContent, placeHolderContent, rows, maxChar, obligatory }) {
  return (
    <div className={styles.input_container}>
        <label htmlFor=''>{label}</label>
        <textarea maxLength={maxChar} rows={rows} onChange={(e) =>{handleValue(e.target.value)}} value={valueContent} placeholder={placeHolderContent}/>
        {obligatory&&(<span>Este campo es obligatorio</span>)}
    </div>
  )
}
