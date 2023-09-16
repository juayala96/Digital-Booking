import React from "react";
import MenuDrawerLogged from "./MenuDrawerLogged";
import MenuDrawerNotLogged from "./MenuDrawerNotLogged";
import styles from "./menuDrawer.module.css"
import { useContext } from "react";
import { userInfoContext } from "../../App";

export default function MenuDrawer ({ handleLogOut, handleModalMenu }) {
    const userInfo = useContext(userInfoContext)
    return (
        <div className={styles.modal} id='modalMenu'>
                    {userInfo.name&&(<MenuDrawerLogged handleLogOut={handleLogOut} handleModalMenu={handleModalMenu} />)}
                    {!userInfo.name&&(<MenuDrawerNotLogged  handleModalMenu={handleModalMenu} />)}
        </div>
    )
}