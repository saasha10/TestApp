import { GET_DATA, GET_DATA_FULFILLED, GET_DATA_REJECTED, SET_PROPERTIES } from '../constants'
//Define your action create that set your loading state.
export const fetchData = bool => {
    //return a action type and a loading state indicating it is getting data. 
    return {
        type: GET_DATA,
        payload: bool,
    }
}

//Define an action creator to set your loading state to false, and return the data when the promise is resolved
export const fetchDataFulfilled = data => {
    //Return a action type and a loading to false, and the data.
    return {
        type: GET_DATA_FULFILLED,
        payload: data,
        properties: data.customerProperties,
        loading: false,
    }
}

//Define an action creator that catches a error and sets an errorMessage
export const fetchDataRejected = error => {
    //Return a action type and a payload with a error
    return {
        type: GET_DATA_REJECTED,
        payload: error,
        loading: false,
    }
}

//Define an action to set properties after filter 
export const setProperties = properties => {
    return {
        type: SET_PROPERTIES,
        payload: properties
    }
}