import { GET_DATA, GET_DATA_FULFILLED, GET_DATA_REJECTED } from '../constants'

const initialState = {
    //Have a people array responsible for getting the data and setting to the array.
    data: [],
    //Have the loading state indicate if it's done getting data.
    loading: true,
    //Have state for error message for recieving an error.
    errorMessage: '',
}

//Define your reducer that will return the initialState by default
const dataReducer = (state = initialState, action) => {
    // console.log("dataReducer ")
    // console.log("state ---> ", state)
    // console.log("action ---> ", action)
    switch (action.type) {
        case GET_DATA:
            return { ...state, loading: action.payload }
        case GET_DATA_FULFILLED:
            return { ...state, data: action.payload, loading: action.loading }
        case GET_DATA_REJECTED:
            return { ...state, errorMessage: action.payload, loading: action.loading }
        default:
            return state;
    }
}

export default dataReducer