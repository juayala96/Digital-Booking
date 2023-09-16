import React from 'react'
import Selector from '../Selector/Selector'
import styles from '../Input.module.css'

/**
 * Descripcion
 * 
 * Input type text to save information entered by th user
 * 
 * @param handleSelected a setState to save the id selected from the list
 * @param label a string to display as label.
 * @param infoList an array of objects to select from. structure:{id:number,value:string}
 * 
 */

export default function InputSelect({label, handleSelected, infoList, obligatory}) {
  return (
    <div className={styles.input_container}>
        <label htmlFor=''>{label}</label>
        <Selector handleSelected={handleSelected} infoList={infoList} />
        {obligatory&&(<span>Este campo es obligatorio</span>)}
    </div>
  )
}
