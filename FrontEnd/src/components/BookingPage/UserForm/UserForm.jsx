import React, { useContext } from "react";
import styles from './userForm.module.css'
import { userInfoContext } from "../../../App";
import Input from "../../Input/InputText/Input";

const UserForm = ({userCity, handleUserCity}) => {
  const userInfo = useContext(userInfoContext)
  
  return (
    <div className={styles.user_data}>
        <h3> Confirmá tus datos</h3>
        <div className={styles.body_form}>    
            <form>
              <div className={styles.form_component}>
                <Input label={"Nombre"} placeHolderContent={userInfo.name} readonly={true}/>
                <Input label={"Apellido"} placeHolderContent={userInfo.lastName} readonly={true}/>
              </div>
              <div className={styles.form_component}>
                <Input label={"Correo electrónico"} placeHolderContent={userInfo.sub} readonly={true}/>
                <Input label={"Ciudad"} placeHolderContent={"Ciudad en la que estás"} handleValue={handleUserCity} valueContent={userCity}/>
              </div>
              {/* <div className={styles.form_component}>
                <div className={styles.form_component_i} id="name">
                  <label htmlFor=''>Nombre</label>
                  <input type="text" name="name" id="name" placeholder={userInfo.name} readOnly/>
                </div>
                <div className={styles.form_component_i} id="lastname">
                  <label htmlFor=''>Apellido</label>
                  <input type="text" name="lastname" id="lastname" placeholder={userInfo.lastName} readOnly />
                </div>
              </div>
              <div className={styles.form_component}>
                <div className={styles.form_component_i} >
                  <label htmlFor=''>Correo electrónico</label>
                  <input type="email" name="email" id="email" placeholder={userInfo.sub} readOnly={true} />
                </div>
                <div className={styles.form_component_i}>
                  <label htmlFor="">Ciudad</label>
                  <input type="text" onChange={(e)=>{handleUserCity(e.target.value)}} name="city" id="city" placeholder="Ciudad en la que estás" />
                </div>
              </div> */}
            </form>
        </div>

    </div>
)}

export default UserForm
