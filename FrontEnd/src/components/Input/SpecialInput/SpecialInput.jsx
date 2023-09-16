import React from 'react'
import styles from '../Input.module.css'

/**
 * Descripcion
 * 
 * Input type text to save information entered by th user
 * 
 * @param inputOnChange a function to handle the validation
 * @param label a string to display as label.
 * @param valueContent a string that contains the value of the input.
 * @param placeHolderContent a string to display in teh placeHolder.
 * @param inputType a string with the type of input.
 * @param obligatory a boolean to trigger a warning message to indicate this field is obligatory.
 * @param validation a boolean to trigger a warning message to indicate the validation went wrong.
 * @param messageValidation a string to indicatethe validation went wrong.
 * @param id identifier in case needed
 */

export default function SpecialInput ({label, inputOnChange, valueContent, placeHolderContent, obligatory, validation, messageValidation, inputType, inputId }) {
  return (
    <div className={styles.input_container}>
        <label htmlFor=''>{label}</label>
        <input type={inputType} onChange={inputOnChange} value={valueContent} placeholder={placeHolderContent} id={inputId}/>
        {obligatory&&(<span>Este campo es obligatorio</span>)}
        {validation&&(<span>{messageValidation}</span>)}
    </div>
  )
}