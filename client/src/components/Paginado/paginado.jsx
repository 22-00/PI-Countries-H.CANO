import React from "react";
import styles from "./paginado.module.css"

export const Paginado = ({countriesPerPage, allCountries, paginado, currentPage}) => {
    const pageNumber = []; // numero de paginas
    
    for(let i = 1; i <= Math.ceil(allCountries/countriesPerPage); i++){
        pageNumber.push(i)
    }

    return(
    <div className={styles.container_ship} >
        <ul className={styles.paginated}>
            {
                pageNumber.map((number)=> (
                    <li className={styles.items} key={number}>
                        <a onClick={()=> paginado(number)} className={styles.pageLink}>
                            <div className={currentPage === number ? styles.select : styles.pageNumber}>
                                {number}
                            </div>
                        </a>
                    </li>
                ))
            }
        </ul>
    </div>
    )
}



//         <nav className={styles.contenedor_nav}>
//             <ul className={styles.paginado}>
//                 { pageNumber.map((number) =>(
//                     <li key={number}>
//                         <a className={ styles.fondo} onClick={()=> paginado(number)}>
//                             <div className={currentPage === number ? styles.select : styles.pageNumber} >{number}</div>
//                             </a>
//                     </li>
//                 ))}
//             </ul>
//         </nav>
//     )
// }