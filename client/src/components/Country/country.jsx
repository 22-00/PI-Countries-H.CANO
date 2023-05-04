import React from "react";
import { Link } from "react-router-dom";
import styles from "./country.module.css"

export const Country = ({name, image, continente, id}) => {
    return(
        <div value={id} className={styles.country}>
           <h3>{name}</h3>
            <h4>{continente}</h4>
            <Link to={`/detail/${id}`} >
            <img src={image} alt={name}/>
            </Link>
        </div>
    )
}