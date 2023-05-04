import React,{ useState, useEffect }  from "react";
import { useDispatch, useSelector} from "react-redux";
import { getNameCountrie, getCountries, setSearchQuery } from "../../redux/actions";
import styles from "./searchBar.module.css";
import { Link, useHistory } from "react-router-dom";



export const SearchBar = () => {
    const dispatch = useDispatch()
    const history = useHistory()
    const allCountries = useSelector((state)=> state.allCountries)
    const { seachQuery } = useSelector((state)=> state)
    const [search, setSearch] = useState([])

    useEffect(()=>{
        dispatch(getCountries())
    },[dispatch])

const handlerSubmit = (event) => {
    event.preventDefault()
    if(seachQuery) dispatch(getNameCountrie(seachQuery));
    dispatch(setSearchQuery(''))
}


const handleSearch = (event) => {
    dispatch(setSearchQuery(event.target.value)) 
    if(event.target.value === ""){
       setSearch([]) 
    } else {
        const countrySearch = allCountries.filter((pais) => pais.name.toLowerCase().includes(event.target.value.toLowerCase()));
        setSearch(countrySearch)
    }

} 
    return(
        <nav className={styles.contenedor}>
            <div className={styles.contenedor_logo}>
            <a href="/home" className={styles.logo} >Countries</a>
            </div>
            <form onSubmit={handlerSubmit} className={styles._form}>
            <input list="options" type="search" placeholder="Buscar" value={seachQuery}  onChange={handleSearch}></input>
            <datalist id="options">
                {
                    search.map((pais)=>(
                        <option key={pais.id} >{pais.name}</option>
                    ))}   
            </datalist>
            <button type="submit" onClick={()=> history.location.pathname !== "/home" ? history.push("/home") : null } >Buscar</button>
            </form>
            <div className={styles.contenedor_actividad}>
                <a href="#contacto" onClick={()=> history.location.pathname != '/home'? history.push('/home') : null }>Contacto</a>
           <Link to = '/countries/create'>Crear Actividad</Link>
            </div>
        </nav>
    )
}
