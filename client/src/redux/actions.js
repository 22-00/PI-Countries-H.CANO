import axios from "axios"


export const GET_COUNTRIES = "GET_COUNTRIES";
export const FILTER_BY_CONTINENT = "FILTER_BY_CONTINENT";
export const ALPHABETICAL_ORDER_ASC = "ALPHABETICAL_ORDER";
export const ALPHABETICAL_ORDER_DESC = "ALPHABETICAL_ORDER_DESC";
export const ORDER_POPULATION_ASC = "ORDER_POPULATION_ASC";
export const ORDER_POPULATION_DESC = "ORDER_POPULATION_DESC";
export const GET_NAME_COUNTRY = "GET_NAME_COUNTRY";
export const GET_COUNTRY_ID = "GET_COUNTRY_ID";
export const POST_CREATE_ACTIVITY = "CREATE_ACTIVITY";
export const GET_ACTIVITIES = "GET_ACTIVITIES";
export const SET_SEARCH_QUERY = "SET_SEARCH_QUERY"
export const FILTER_BY_ACTIVITY = "FILTER_BY_ACTIVITY";
export const ACTIVATE_FILTER = "ACTIVATE_FILTER";
export const DOUBLE_FILTER = "DOUBLE_FILTER";


export const getCountries = () => {
    return async function(distpach){
        var countries = await axios("http://localhost:3001/countries")
        return distpach({type: GET_COUNTRIES , payload: countries.data})
    }
}

export const filterCountryByContinent = (continent) => {
    return { type: FILTER_BY_CONTINENT, payload: continent}
}

export const alphabeticalOrder = (order) => {
    return { type: order === "asc" ? ALPHABETICAL_ORDER_ASC : ALPHABETICAL_ORDER_DESC }
}

export const orderPopulation = (order) =>{
    return {type: order === "asc" ? ORDER_POPULATION_ASC : ORDER_POPULATION_DESC }
}

export const getNameCountrie = (name) => {
    return async function(distpach){
        try {
            const countries = await axios(`http://localhost:3001/countries?name=${name}`)
            return distpach({type: GET_NAME_COUNTRY, payload: countries.data})
        } catch (error) {
            console.log(error)
        }
    }
}

export const getCountryId = (idPais) => {
    return async function(distpach){
        try {
            const cuontryId = await axios(`http://localhost:3001/countries/${idPais}`)
            return distpach({type: GET_COUNTRY_ID, payload: cuontryId.data})
        } catch (error) {
            console.log(error)
        }
    }
}

export const postActivity = (activity) =>{
    return async function(distpach){
        try {
            const newActivity = await axios.post('http://localhost:3001/activities', activity)
            return newActivity;
        } catch (error) {
            console.log(error)
        }
    }
}

export const getActivity = () =>{
    return async function(distpach){
        try {
            const activities = await axios('http://localhost:3001/activities')
            return distpach({ type: GET_ACTIVITIES, payload: activities.data })
        } catch (error) {
            console.log(error)
        }
    }
}

export const setSearchQuery = (query) => {
    return {type: SET_SEARCH_QUERY, payload: query }
}

export const filterCountryByActiviti = (nameActivity) =>{
    return {type: FILTER_BY_ACTIVITY, payload: nameActivity}
}


export const activateFilter = (boolean) =>{
    return {type: ACTIVATE_FILTER, payload: boolean }
}

export const doubleFilter = (obj) => {
    return { type:DOUBLE_FILTER, payload: obj }
}
