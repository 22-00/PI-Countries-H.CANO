import React from "react";
import styles from "./landing.module.css"

export const LandingPage = () => {
    return (
        <div className={styles.contenedor}  >
            <div className={styles.titulo} >
            <h1>Bienvenidos a la pagina paises</h1>
            </div>
            <div className={styles.contenedor_Button}>
            <a href="/home">
            <button>Ingresar</button>
            </a>
            </div>
        </div>
    )
}