import getDogValidator from "./getDogValidator";
import sortValidator from "./sortValidator";
import filterValidator from "./filterValidator";

const initialState = {
    dogs: [],
    allDogs: [],
    detail: [],
    temps: []
}

export default function rootReducer(state = initialState, action) {
    const allDogs = state.allDogs;
    switch (action.type) {
        case "GET_DOGS":
            return {
                ...state,
                dogs: action.payload,
                allDogs: getDogValidator(action.payload)
            }
        case "GET_TEMPS":
            return {
                ...state,
                temps: sortValidator({type:"name", order: "asce", allDogs:action.payload}).filter(el=>el.name!=="undefined")
            }
        case "GET_DOG_NAME":
            return {
                ...state,
                dogs: action.payload.length ? getDogValidator(action.payload) : []
            }
        case "GET_DOG_ID":
            return {
                ...state,
                detail: action.payload.length ? getDogValidator(action.payload) : []
            }
        case "POST_DOG":
            return {
                ...state
            }
        case "DELETE_DOG":
            return {
                ...state,
                detail: []
            }
        case "FILTER_BY_TEMPERAMENT":
            return {
                ...state,
                dogs: filterValidator({type:"temps", allDogs:getDogValidator(allDogs), value: action.payload})
            }
        case "FILTER_BY_CREATION":
            return {
                ...state,
                dogs: filterValidator({type:"creation", allDogs:getDogValidator(allDogs), value: action.payload})
            }
        case "ORDER_BY_WEIGHT":
            return {
                ...state,
                dogs: sortValidator({type:"weight", order:action.payload.toLowerCase(), allDogs:allDogs})
            }
        case "ORDER_BY_ALPHABETIC":
            return {
                ...state,
                dogs: sortValidator({type:"name", order:action.payload.toLowerCase(), allDogs:allDogs})
            }
        default:
            return state
    }
}
