import React, {useState, useEffect} from "react"
import { useDispatch, useSelector } from "react-redux"
import { postActivity } from "../../redux/actions";
import { validateForm } from "./valiadate";
import { getCountries} from "../../redux/actions";
import { useHistory } from "react-router-dom";
import styles from "./form.module.css"



export const Form = () => {
    const history = useHistory()
    const dispatch = useDispatch();
    const  allCountries = useSelector((state)=> state.allCountries) // aca tenemos nuestro estado global
    const [actividad, setActividad] = useState({ // este es el objeto que vamos a despachar
        name: '',
        dificultad: 'seleccionar',
        duracion: '',
        temporada: 'seleccionar',
        id: []
    },)

    const [errors, setErrors] = useState({
        name: '',
        dificultad: 'seleccionar',
        duracion: '',
        temporada: '',
    })

    useEffect(()=>{
        dispatch(getCountries())
    },[dispatch])

    const hanleChange = (event) =>{
        const {value, name} = event.target
        setErrors(validateForm({...actividad, [name]: value}))
        setActividad({...actividad, [name]: value})
    }
    console.log(errors)

    const hanleChangeId = (event) => {
        const {value} = event.target;
        if(value === 'sel') return
        if(actividad.id.some((pais)=> pais === value)){
            return alert("Este pais ya fue seleccionado") 
        } else {
           setActividad({...actividad, id:[...actividad.id, value]})
        } 
        
    }
    const handleSubmit = (event) => {
        if(Object.keys(errors).length > 0 || actividad.id.length === 0){
            event.preventDefault()
            return alert('Complete los campos correctamente')
        } 
        event.preventDefault()
        dispatch(postActivity(actividad))
        setActividad({
            name: '',
            dificultad: '',
            duracion: '',
            temporada: 'seleccionar',
            id: []})
            document.getElementById("country").value='sel'
            alert("La actividad se creo con exito")
    }

    const deleteIdPais = (event) => {
        document.getElementById('country').value='sel'
        const {value} = event.target
        setActividad({...actividad, id:[...actividad.id].filter((idPais)=> idPais != value)
        })
    }

    
    return(
        <div className={styles.contenedor}>
            <button onClick={()=>  history.go(-1)}>Atras</button>
            <form className={styles.formulario} onSubmit={handleSubmit}>
                <label  htmlFor="name">Nombre de la actividad: </label>
                <input type='text' name='name' value={actividad.name} onChange={hanleChange} placeholder='Nombre de la actividad'></input>
                {errors.name ? <span className={styles.errores}>{errors.name}</span> : null} 

                <label htmlFor="dificultad">Dificultad: </label>
               <select name='dificultad' value={actividad.dificultad} onChange={hanleChange}>
               <option value='seleccionar'>Seleccionar</option>
                <option value={1}>1</option>
                <option value={2}>2</option>
                <option value={3}>3</option>
                <option value={4}>4</option>
                <option value={5}>5</option>
               </select>
               {errors.dificultad ? <span className={styles.errores}>{errors.dificultad}</span> : null}

                <label htmlFor='duracion'>Duracion - hs: </label>
                <input type='number' name="duracion" value={actividad.duracion} placeholder='ingrese la duracion' onChange={hanleChange}></input>
                {errors.duracion ? <span className={styles.errores}>{errors.duracion}</span> : null} 

                <label htmlFor="temporada">Temporada</label>
                <select name='temporada' value={actividad.temporada} onChange={hanleChange}>
                    <option value='seleccionar'>Seleccionar</option>
                    <option value='Todas'>Todas</option>
                    <option value='Verano'>Verano</option>
                    <option value='Invierno'>Invierno</option>
                    <option value='Otoño'>Otoño</option>
                    <option value='Primavera'>Primavera</option>
                </select>
                {errors.temporada ? <span className={styles.errores}>{errors.temporada}</span> : null} 

                <div className={styles.searchCountry}>
                <label htmlFor="idPais">¿ A que pais le agregamos la actividad ?</label>
                <select name="idPais" id='country' onChange={hanleChangeId}>
                    <option value="sel">Seleccione</option>
                    {
                        allCountries.map((pais)=>(
                            <option key={pais.id} value={pais.id}>{pais.name}</option>
                        ))
                    }    
                </select>    
                <button type="submit">Crear actividad</button>
                </div>
            </form>
            <div className={styles.seleccionContainer}>
            {
                actividad.id.length ?
                actividad.id.map((pais)=>{
                    return(
                        <div key={pais} className={styles.seleccion}>
                        {pais}
                        <button value={pais} onClick={deleteIdPais}>x</button>
                        </div>
                        
                    )
                }) : <span className={styles.errores}>Selecciona los paises</span>
            }
            </div>
        </div>
    )
}


{/* <ul className={styles.lista}>
                            <li className={styles.elemento}>{pais}</li> <button value={pais} onClick={deleteIdPais}>x</button>
                        </ul> */}





// const handleSubmit = (event) => {
//     if(!actividad.length) alert('Selecciona a que pais le vas a agregar la actividad');
//     if(Object.keys(errors).length > 0) alert('Complete los campos correctamente')
//     console.log('Se creo correctamente la actividad')
// }
// event.preventDefault()
// const mostrar = (e) =>{
//         e.preventDefault()
//     console.log(actividad)
//     }

// let arrFiltrado = arr.filter((pais)=> pais.toLocaleLowerCase().includes(letra.toLocaleLowerCase()))


// export const Form = () => {
//     const history = useHistory()
//     const dispatch = useDispatch();
//     const  allCountries = useSelector((state)=> state.allCountries) // aca tenemos nuestro estado global
    
//     const [actividad, setActividad] = useState({ // este es el objeto que vamos a despachar
//         name: '',
//         dificultad: 1,
//         duracion: 1,
//         temporada: 'Seleccionar',
//         id: []
//     },)

//     const [country, setCountry] = useState('');
//     const [search, setSearch] = useState([])
//     useEffect(()=>{
//         dispatch(getCountries())
//     },[dispatch])

//     const hanleChange = (event) =>{
//         const {value, name} = event.target
//         setActividad({...actividad, [name]: value})
//     }

//     const handleInputChange = (event) => {
//         setCountry(event.target.value);
//         if (event.target.value === "") {
//           setSearch([]);
//         } else {
//           const countrySearch = allCountries.filter((pais) => pais.name.toLowerCase().includes(event.target.value.toLowerCase()));
//           setSearch(countrySearch);
//         }
//       };

//       return(
//         <label htmlFor="idPais">¿ A que pais le agregamos la actividad ?</label>
//                 <input 
//                  type='search'
//                  name='idPais'
//                  placeholder="Nombre del pais"
//                  value={country}
//                  onChange={handleInputChange}
//                  list="options"
//                 />
//                 <datalist id="options">
//                     {
//                         search.map((pais)=>(
//                             <option key={pais.id} onClick={(e)=>handlePush(e, pais.id)}>{pais.name}</option>
//                         ))
//                     }
//                 </datalist>
//       )


{/* <option key={pais.id} onClick={(e)=>handlePush(e, pais.id)}>{pais.name}</option> */}


{/* <input 
                 type='search'
                 name='idPais'
                 placeholder="Nombre del pais"
                 value={country}
                 onChange={handleInputChange}
                 list="options"
                />
                <datalist id="options">
                    { search.map((pais)=>(
                            <option key={pais.id}>{pais.name}</option>
                        ))}
                </datalist>
                <button onClick={(e)=>handlePush(e, search[0].id)} disabled={search.length === 0}>agregar</button> */}