import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCountryId } from "../../redux/actions";
import { useParams, useHistory } from "react-router-dom";
import styles from "./detail.module.css"

 export const Detail = () => {
    const {id} = useParams()
    const dispatch = useDispatch()
    const countryId = useSelector((state) => state.countryId)
    const history = useHistory()
    useEffect(()=>{
        dispatch(getCountryId(id))
    },[dispatch, id])
    
    return (
      <div className={styles.container}>
        <button onClick={()=>  history.go(-1)}>Atras</button>
        <div className={styles.contenedor_detalle}>
         <div className={styles.contenedor_image}>
          <img src={countryId.image} alt={countryId.name}/>
        </div>
        <div className={styles.detalles}>
          <h2>CODIGO: {countryId.id}</h2>
          <h2>NOMBRE: {countryId.name}</h2>
          <h2>CONTINENTE: {countryId.continente}</h2>
          <h2>SUBREGION: {countryId.subregion}</h2>
          <h2>AREA: {countryId.area}</h2>
          <h2>POBLACION: {countryId.poblacion}</h2>
        </div>
        </div>

        {
            Array.isArray(countryId.activities) && countryId.activities.length ?

            countryId.activities.map((act)=>(
                <div className={styles.contenedos_activities} key={act.id}>
                <span>FECHA DE CREACION: {act.activities_countries.updatedAt.slice(0,10)}</span>
                  <span>NOMBRE: {act.name}</span>
                  <span>DIFICULTAD: {act.dificultad}</span>
                  <span>DURACION: {act.duracion}hs</span>
                  <span>TEMPORADA: {act.temporada}</span>
                  </div>

            )) : <div className={styles.contenedos_activities}><span>Este pais no tiene actividades</span></div>
         }

   </div> )
}

