import axios from 'axios';

//Aqui haremos nuestra conexión con el back
//Pasandole a axios el url del back correspondiente 

//getDogs deja de ser una función y se vuelve un generador de acciones
export function getDogs() {
    return async function (dispatch) {
        let json = await axios.get("/dogs");
        return dispatch({
            type: "GET_DOGS",
            payload: json.data
        })
    }
}
//El dispatch pasa la acción a la store que la maneja con ayuda de los reducers
export function getTemperaments() {
    return async function (dispatch) {
        let json = await axios.get("/temperaments");
        return dispatch({
            type: "GET_TEMPS",
            payload: json.data
        })
    }
}

export function postNewDog(payload) {
    return async function (dispatch) {
        const response = await axios.post("/dogs", payload);
        return {
            type: "POST_DOG"
        }
    }
}

export function deleteDog(id){
    return async function (dispatch) {
        const response = await axios.delete(`/dogs/${id}`);
        return {
            type: "DELETE_DOG"
        }
    }
}

export function filterDogsByTemperament(payload) {
    return {
        type: "FILTER_BY_TEMPERAMENT",
        payload
    }
}

export function filterDogsByCreation(payload) {
    return {
        type: "FILTER_BY_CREATION",
        payload
    }
}

export function orderDogsByWeight(payload) {
    return {
        type: "ORDER_BY_WEIGHT",
        payload
    }
}

export function orderDogsByAlphabetic(payload) {
    return {
        type: "ORDER_BY_ALPHABETIC",
        payload
    }
}

export function getDogName(name) {
    return async function (dispatch) {
        try {
            let json = await axios.get("/dogs?name=" + name);
            return dispatch({
                type: "GET_DOG_NAME",
                payload: json.data
            })
        } catch (err) {
            return dispatch({
                type: "GET_DOG_NAME",
                payload: []
            })
        }
    }
}

export function getDogId(id) {
    return async function (dispatch) {
        try {
            let json = await axios.get(`/dogs/${id}`);
            return dispatch({
                type: "GET_DOG_ID",
                payload: json.data
            })
        } catch (err) {
            return dispatch({
                type: "GET_DOG_ID",
                payload: []
            })
        }
    }
}