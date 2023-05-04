import { GET_COUNTRIES } from "./actions";
import { FILTER_BY_CONTINENT } from "./actions";
import { ALPHABETICAL_ORDER_ASC } from "./actions";
import { ALPHABETICAL_ORDER_DESC } from "./actions";
import { ORDER_POPULATION_ASC } from "./actions";
import { ORDER_POPULATION_DESC } from "./actions";
import { GET_NAME_COUNTRY } from "./actions";
import { GET_COUNTRY_ID } from "./actions";
import { POST_CREATE_ACTIVITY } from "./actions";
import { GET_ACTIVITIES } from "./actions";
import { SET_SEARCH_QUERY } from "./actions";
import { FILTER_BY_ACTIVITY } from "./actions";
import { ACTIVATE_FILTER } from "./actions";
import { DOUBLE_FILTER } from './actions'


const initialState = {
    countries: [],
    allCountries: [],
    countryId: {},
    activities: [],
    seachQuery: "",
    filteredOn: false
}

const rootReducer = (state = initialState, action) => {
    switch(action.type){

        case GET_COUNTRIES:
            return {...state, countries: action.payload, allCountries: action.payload}

        case GET_ACTIVITIES: 
        return {...state, activities: action.payload }

        case GET_NAME_COUNTRY:
            return {...state, countries: action.payload }

        case FILTER_BY_CONTINENT: 
        const filterContinent = action.payload === "allCountries" ? state.allCountries : state.allCountries.filter((pais)=> pais.continente === action.payload)
            return {...state, countries: filterContinent }

        case ALPHABETICAL_ORDER_ASC:
            const orderAsc = state.countries.sort((a,b)=>{
                if(a.name < b.name) return -1;  
                if(b.name < a.name) return 1
                return 0;
            })
            return {...state, countries: orderAsc }

        case ALPHABETICAL_ORDER_DESC:
            const orderDesc = state.countries.sort((a,b)=> {
                if(a.name > b.name) return -1;
                if(b.name > a.name) return 1;
                return 0
            })
            return {...state, countries: orderDesc}

        case ORDER_POPULATION_ASC:
            const populationAsc = state.countries.sort((a,b)=>{
                if(Number(a.poblacion) < Number(b.poblacion)) return -1
                if(Number(b.poblacion) < Number(a.poblacion)) return 1;
                return 0;
            })
            return {...state, countries: populationAsc};

        case ORDER_POPULATION_DESC:
            const populationDesc = state.countries.sort((a,b)=>{
                if(Number(a.poblacion) > Number(b.poblacion)) return -1;
                if(Number(b.poblacion) > Number(a.poblacion)) return 1;
                return 0;
            })
            return {...state, countries: populationDesc };

        case GET_COUNTRY_ID:
            return {...state, countryId: action.payload[0] };

        case POST_CREATE_ACTIVITY:
            return {...state};

        case SET_SEARCH_QUERY:
            return {...state, seachQuery: action.payload}

        case FILTER_BY_ACTIVITY:
            const countriesFilterActivity = state.filteredOn ?
            state.countries.filter((pais)=> pais.activities.find((act)=> act.name === action.payload)) :
            state.allCountries.filter((pais)=> pais.activities.find((act)=> act.name === action.payload))
            return {...state, countries: countriesFilterActivity }    

        case ACTIVATE_FILTER:
            return {...state, filteredOn: action.payload}

        case DOUBLE_FILTER:
            const { continente, actividad } = action.payload
            const filterActivityAndContinent = state.allCountries.filter((pais)=> pais.continente === continente && pais.activities.find((act)=> act.name === actividad))
            return {...state, countries: filterActivityAndContinent }
    
        default:
            return {...state}
    }
}

export default rootReducer;

// state.countries.filter((pais)=> pais.activities.find((act)=> act.name === action.payload))
// const countriesFilterActivity = filteredOn === true ?  state.allCountries.filter((pais)=> pais.activities.find((act)=> act.name === action.payload))