import React, { useContext } from "react";
import HeaderLogo from "./HeaderLogo";
import HeaderUserLogged from "./HeaderUserLogged";
import {Link, useLocation} from "react-router-dom"
import menu from "../../assets/img/menu.png"
import styles from "./Header.module.css"
import { userInfoContext } from "../../App";

export default function Header ({ handleLogOut, handleModalMenu} ) {
    const userInfoLogged = useContext(userInfoContext)
    const location = useLocation();
    
    return (
        <header>
            <HeaderLogo/>
            <div className={styles.userDisplay}>
                {userInfoLogged.name&&(<HeaderUserLogged handleLogOut={handleLogOut}/>)}
                {!userInfoLogged.name&&(
                   <>
                    {location.pathname!="/register" ? (<Link to='/register'><button className={styles.btnRegister}>Crear cuenta</button></Link>) :<></>}
                    {location.pathname!="/login" ? (<Link to='/login'><button className={styles.btnLogin}>Iniciar sesión</button></Link>):<></>}
                    </>
                )}

                <img className={styles.mobileMenu} src={menu} alt="menu" onClick={handleModalMenu} />
            </div>
        </header>
    )
}