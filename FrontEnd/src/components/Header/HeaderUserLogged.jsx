import React, {useContext} from "react";
import styles from "./headerUserLogged.module.css";
import { userInfoContext } from "../../App";
import { Link, useLocation } from "react-router-dom";

export default function HeaderUserLogged ({handleLogOut}) {
const userInfo = useContext(userInfoContext)
const location = useLocation()

    return (
        <div className={styles.header_user_logged}>
            
            <div className={styles.user_profile}>
            {location.pathname!=='/my-products'&&(
                <>
                    {userInfo.idRole ===1 ? <Link to='/my-products'><button >Mis Productos</button></Link> : <></>}
                </>)}
            {location.pathname!=='/my-bookings'&&(
                <>
                {userInfo.idRole ===2 ? <Link to='/my-bookings'><button >Mis Reservas</button></Link> : <></>}
                </>)}
            </div>
            <div className={styles.userInformation}>
                <div className={styles.avatar_header}>
                    <p>{userInfo.avatar}</p>
                </div>
                
                <div className={styles.userInfo_header}>
                    <p className={styles.userGreet_header}>Hola,</p>
                    <p className={styles.userName_header}>{userInfo.name} {userInfo.lastName}</p>
                </div>
                <div className={styles.cerrar_header}>
                <p onClick={handleLogOut}>X</p>
                </div>
            </div>
        </div>
    )
}