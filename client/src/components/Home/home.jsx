import React from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Country }  from "../Country/country";
import { Paginado } from "../Paginado/paginado";
// import { Menu } from "../Menu/menu"; COMPONENTE DE PRUEBA
import { filterCountryByContinent ,alphabeticalOrder, orderPopulation, getCountries, getActivity, filterCountryByActiviti, activateFilter} from "../../redux/actions";
import styles from "./home.module.css"

export const Home = () => {
    const dispatch = useDispatch();
    const allCountries = useSelector((state) => state.countries)
    const { activities } = useSelector((state => state))
    const [orderPage, setOrderPage] = useState("")
    const [currentPage, setCurrentPage] = useState(1); // este estado es el numero de paginas
    const [countriesPerPage, setCountriesPerPage] = useState(10);
    const indexOfLastCountrie = currentPage * countriesPerPage; // aca sacamos el ultimo pais
    const indexOfFirstCountrie = indexOfLastCountrie - countriesPerPage; // aca sacamos el primer pais
    const currentCountries = allCountries.slice(indexOfFirstCountrie, indexOfLastCountrie) // aca mostramos a los personajes por pag

    const paginado = (pageNumber) => { // esta funcion sirve para mostrar el numero de pag;
        setCurrentPage(pageNumber)
    }
    

    useEffect(()=>{
        dispatch(getCountries())
        dispatch(getActivity())
    },[dispatch])

    const handlerContinent = (event) =>{
        const continente = event.target.value;
        dispatch(filterCountryByContinent(continente))
        setCurrentPage(1)
        document.getElementById('actividades').value='sel'
    }

    const handlerAlphabetical = (event) =>{
        const order = event.target.value
        dispatch(alphabeticalOrder(order))
        setCurrentPage(1)
        setOrderPage(`Ordenado de manera alfabeticamnete ${order}`) 
        document.getElementById('poblacion').value="sel"
        }

    const handleActivities = (event) => {
        const activity = event.target.value
        dispatch(filterCountryByActiviti(activity))
        document.getElementById('continente').value='sel'
    } 

    const handlerPopulation = (event) => {
        const order = event.target.value
        dispatch(orderPopulation(order))
        setOrderPage(`Ordenado de manera poblacionalmente ${order}`)
        document.getElementById('alfabetico').value="sel";
    }
    const handleReload = () => {
        window.location.reload();
      };

return(
    <div className={styles.contenedor}>
        <div className={styles.contenedor_opciones}>
            <div className={styles.limpiar}><button onClick={handleReload}>Limpiar filtros y ordenamientos</button></div>

            <div className={styles.contenedor_Selection}>
            
            <select id="continente" onChange={handlerContinent}>
                <option hidden value="sel">filtrar por continente</option>
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
            {/* <Menu activities={activities} getCountries={getCountries}/> COMPONENTE DE PRUEBA */} 
            <select id='actividades' onChange={handleActivities}>
                <option hidden value='sel'>Filtrar por actividad turistica</option>
                {
                    activities.map((act)=>(
                        <option value={act.name}>{act.name}</option>
                    ))
                }
            </select>
            <div className={styles.contenedor_Selection}>
            <select id="alfabetico" onChange={handlerAlphabetical}>
                <option hidden value="sel">Ordena por orden alfabetico</option>
                <option value='asc'>A - B</option>
                <option value='des'>Z - A</option>
            </select>
            </div>
            <div className={styles.contenedor_Selection}>
            <select id="poblacion" onChange={handlerPopulation}>
                <option hidden value="sel">Ordenar por poblacion</option>
                <option value='asc'>Ascendente</option>
                <option value='desc'>Descendente</option>
            </select>
            </div>
            </div>
            <Paginado hidden={!currentCountries.length} paginado={paginado} allCountries={allCountries.length} countriesPerPage={countriesPerPage} currentPage={currentPage}/>
            {
                currentCountries.length ? 
                currentCountries.map((pais)=>{
                    return(
                        <div className={styles.countries}>
                    <Country name={pais.name} image={pais.image} continente={pais.continente} id={pais.id}/>
                    </div>
                    )
                }) : <h1>No se encontraron resultados</h1>
            }
       
        <footer id="contacto">
        <div className={styles.contenedor_footer}>
				<div className={styles.content_foo}>
					<h4>Phone</h4>
					<p>2914474389</p>
				</div>
				<div className={styles.content_foo}>
					<h4>Email</h4>
					<p>hhoraciocano@gmail.com</p>
				</div>
				<div className={styles.content_foo}>
					<h4>Localizacion</h4>
					<p>Bs as, Bahia Blanca</p>
				</div>
			</div>
			<h2 className={styles.titulo_final}>&copy; H.cano | Horacio Cano</h2>
            </footer>
    </div>
)

}