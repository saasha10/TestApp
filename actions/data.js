import { GET_PEOPLE, GET_PEOPLE_FULFILLED, GET_PEOPLE_REJECTED } from '../constants'
//Define your action create that set your loading state.
export const fetchData = bool => {
    //return a action type and a loading state indicating it is getting data. 
    return {
        type: GET_PEOPLE,
        payload: bool,
    }
}

//Define a action creator to set your loading state to false, and return the data when the promise is resolved
export const fetchDataFulfilled = data => {
    //Return a action type and a loading to false, and the data.
    return {
        type: GET_PEOPLE_FULFILLED,
        payload: data,
        loading: false,
    }
}

//Define a action creator that catches a error and sets an errorMessage
export const fetchDataRejected = error => {
    //Return a action type and a payload with a error
    return {
        type: GET_PEOPLE_REJECTED,
        payload: error,
        loading: false,
    }
}