import React from 'react'
import styles from './PrimaryButton.module.css' 

export default function PrimaryButton ({onClickFunction, text, buttonType}){
  return (
    <button onClick={onClickFunction} className={styles.button} type={buttonType}>{text}</button>
  )
}
