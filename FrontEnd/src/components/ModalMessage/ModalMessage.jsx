import React from 'react'
import { useNavigate } from 'react-router-dom'
import styles from './ModalMessage.module.css'
import succed from '../../assets/succed.png'
import failed from '../../assets/error.png'
import PrimaryButton from '../PrimaryButton/PrimaryButton'

/**
 * Descripcion
 * 
 * @param handleShowMessage a setState awating for a boolean
 * @param modalInfo an array of objects.
 * structure: {
    path:string(destination to navigate/empty to stay),
    title:string,
    body:string,
    text:string,
    succed:boolean(determines the icon to display)
}
 */

const ModalMessage = ({handleShowMessage, modalInfo }) => {
  const navigate = useNavigate()

  const handleButton = ()=>{
    handleShowMessage(false)
    if(modalInfo.path!==""){
      navigate(modalInfo.path)
    }
    
  }

  return (
    <div className={styles.modal}>
      
      <div className={styles.campo}>
      {modalInfo.succed&&(<img src={succed} alt="/" border="0" />)}
      {!modalInfo.succed&&(<img src={failed} alt="/" border="0" />)}
      <p className={styles.mensaje}>{modalInfo.title}</p>
      <span className={styles.text}>{modalInfo.body}</span>
      <span className={styles.text}>{modalInfo.text}</span>

      <div className={styles.btn_container}>
        <PrimaryButton onClickFunction={handleButton} text={"Aceptar"}/>
      </div>
      </div>
      
      </div>
  )
}

export default ModalMessage