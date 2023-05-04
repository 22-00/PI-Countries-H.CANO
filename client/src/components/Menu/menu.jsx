import React, {useState} from "react";
import styles from "./menu.module.css"
import { useDispatch } from "react-redux";
import { doubleFilter } from "../../redux/actions";
import { getCountries } from "../../redux/actions";

// COMPONENTE DE PRUEBA 


export const Menu = ({activities}) => {  // Este es un ejemplo que hice de un menu desplegable
    
    const dispatch = useDispatch()

    const [menu, setMenu] = useState(false)
    const [filter, setFilter] = useState({continente: "", actividad: ""})

    const toggleMenu = () => {
        setMenu(!menu)
    }

    const handleChange = (event) => {
        const { name, value } = event.target
        setFilter({...filter, [name]: value})
    }

    const handleLimpiar = () => {
        setFilter({continente: "", actividad: ""})
        document.getElementById("continet").value="sel";
        document.getElementById("activity").value="sel";
        dispatch(getCountries())
    }

    const handleDispatch = (event) =>{
        event.preventDefault()
        dispatch(doubleFilter(filter))
    }

    return (
        <div className={styles.contenedor}> 
            <div className={styles.masFiltrod} onClick={toggleMenu}>Mas filtros<div className={styles.container_img}><img src="https://img10.naventcdn.com/listado/RPLISv8.13.0-RC1/images/chevron-down-black2.svg"/></div></div>
                {
                    menu && (
                        <div className={styles.contenedor_menu}>
                            <div><h5>Continente</h5></div>
                            <div>
                            <select id='continet' name='continente' onChange={handleChange}>
                                <option hidden value='sel'>Seleccione</option>
                                <option value='allCountries'>Todos los contienentes</option>
                                <option value="Asia">Asia</option>
                                <option value="Africa">Africa</option>
                                <option value="Americas">Americas</option>
                                <option value="Europe">Europe</option>
                                <option value="Oceania">Oceania</option>
                                <option value="Antarctic" >Antarctic</option>
                                <option value="sudamerica">sudamerica</option>
                            </select>
                            </div>
                            <div><h5>Actividad</h5></div>
                            <div>
                                <select id='activity' name='actividad' onChange={handleChange}>
                                    <option hidden value='sel'>Seleccione</option>
                                    {
                                        activities.map((act)=>(
                                          <option value={act.name}>{act.name}</option>  
                                        ))
                                    }
                                </select>
                            </div>
                            <div><button onClick={handleLimpiar}>Limpiar</button></div>
                            <div><button onClick={handleDispatch}>Aplicar filtros</button></div>
                        </div>
                    )
                }
        </div>
    )
}