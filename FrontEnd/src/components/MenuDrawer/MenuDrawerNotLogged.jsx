import React from "react";
import Facebook from "../../assets/img/facebook.png";
import LinkedIn from "../../assets/img/linkedin.png";
import Twitter from "../../assets/img/twitter.png";
import Instagram from "../../assets/img/instagram.png";
import {Link, useLocation} from "react-router-dom";
import styles from "./MenuDrawerNotLogged.module.css";

export default function MenuDrawerNotLogged ({ handleModalMenu}) {
    const location = useLocation();
    
    return (
            <div className={styles.menu_drawer_not_logged}>
                <div className={styles.body_menu_drawer_not_logged}>
                    <div className={styles.barra_menu_drawer}>
                        <button className={styles.cerrar_menu_drawer} onClick={handleModalMenu}>X</button>
                        <p className={styles.tittle_menu_drawer}>MENÚ</p>
                    </div>
                    <div className={styles.login_register_section}>
                            {location.pathname!="/register" ? <Link to='/register'><button className={styles.btnMobile} onClick={handleModalMenu}>Crear cuenta</button></Link> : <></>}
                            {location.pathname=="/" ? <hr/> : <></>}
                            {location.pathname!="/login" ? <Link to='/login'><button className={styles.btnMobile} onClick={handleModalMenu}>Iniciar sesión</button></Link> : <></>}
                    </div>
                </div>
                <div className={styles.footer_menu_drawer}>
                    <img src={Facebook} alt="Facebook"/>
                    <img src={LinkedIn} alt="LinkedIn"/>
                    <img src={Twitter} alt="Twitter"/>
                    <img src={Instagram} alt="Instagram"/>
                </div>
            </div>
    )
}