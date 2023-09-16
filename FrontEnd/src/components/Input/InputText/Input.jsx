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
 * @param obligatory a boolean to trigger a warning message to indicate this field is obligatory
 * @param readonly a boolean to set if the input has the property "readOnly"
 */

export default function Input ({label, handleValue, valueContent, placeHolderContent, obligatory, readonly }) {
  return (
    <div className={styles.input_container}>
        <label htmlFor=''>{label}</label>
        <input type="text" onChange={(e) =>{handleValue(e.target.value)}} value={valueContent} placeholder={placeHolderContent} readOnly={readonly}/>
        {obligatory&&(<span>Este campo es obligatorio</span>)}
    </div>
  )
}
