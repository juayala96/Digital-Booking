import React from "react";
import styles from './policyAndRules.module.css'


export default function PolicyAndRules ({info}) {
    return (
        <div className={styles.info_policy}>
            <h2>Qué tenés que saber?</h2>
            <hr />
            
            <div className={styles.policy_container}>
            <div className={styles.container_responsive}>
                    <div className={styles.normas}>
                        <h3>Normas de la casa</h3>
                        <p>{info.normas}</p>

                    </div>
                    <div className={styles.seguridad}>
                        <h3>Salud y Seguridad</h3>
                        <p>{info.seguridad}</p>
                    </div>
                </div>
                <div className={styles.container_responsive}>
                <div className={styles.cancelacion}>
                    <h3>Políticas de cancelación</h3>
                    <p>{info.cancelacion}</p>              
                </div>
                </div>
            </div>
        </div>
    )}