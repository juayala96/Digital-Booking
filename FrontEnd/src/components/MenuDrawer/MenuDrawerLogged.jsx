import React , {useContext} from "react";
import Facebook from "../../assets/img/facebook.png";
import LinkedIn from "../../assets/img/linkedin.png";
import Twitter from "../../assets/img/twitter.png";
import Instagram from "../../assets/img/instagram.png";
import styles from "./menuDrawerLogged.module.css";
import { userInfoContext } from "../../App";
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";

export default function MenuDrawerLogged ({handleLogOut, handleModalMenu}) {
const userInfo = useContext(userInfoContext)
const location = useLocation()
    
    return (
            <div className={styles.menu_drawer_logged}>
                    
                        <div className={styles.menu_drawer_body_container}>
                            <div className={styles.barra_menu_drawer_logged}>
                                        <button className={styles.cerrar_menu_drawer} onClick={handleModalMenu}>X</button>
                                        <div className={styles.greet_menu_drawer_container}>
                                                <div className={styles.avatar_menu_drawer}>
                                                    <p>{userInfo.avatar}</p>
                                                </div>
                                                <h3 className={styles.userGreet_menu_drawer}>Hola,</h3>
                                                <h3 className={styles.userName_menu_drawer}>{userInfo.name} {userInfo.lastName}</h3>                                            
                                        </div>
                            </div>    

                            <div className={styles.upper_body_container}>
                                {location.pathname!=='/my-products'&&(
                                <>
                                    {userInfo.idRole ===1 ? <Link to='/my-products'><button className={styles.btnMobile} onClick={handleModalMenu}>Mis Productos</button></Link> : <></>}
                                </>)}
                                {location.pathname!=='/my-bookings'&&(
                                <>    
                                {userInfo.idRole ===2 ? <Link to='/my-bookings'><button className={styles.btnMobile} onClick={handleModalMenu}>Mis Reservas</button></Link> : <></>}
                                </>)}
                                </div>
                        </div>
                        <div className={styles.footer_container}>
                            <div className={styles.log_out_menu_drawer}>
                                <span className={styles.log_out_text}>
                                    <p>¿deseas &nbsp;</p>
                                    <p className={styles.log_out_color_text_menu_drawer} onClick={handleLogOut}> cerrar sesión </p>
                                    <p>?</p>
                                </span>
                                <hr/>
                            </div>
                            <div className={styles.redes_menu_drawer}>
                                <img src={Facebook} alt="Facebook"/>
                                <img src={LinkedIn} alt="LinkedIn"/>
                                <img src={Twitter} alt="Twitter"/>
                                <img src={Instagram} alt="Instagram"/>
                            </div>
                        </div>
                    
            </div>
    )
}