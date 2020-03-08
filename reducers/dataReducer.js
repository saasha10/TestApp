import { GET_PEOPLE, GET_PEOPLE_FULFILLED, GET_PEOPLE_REJECTED } from '../constants'

const initialState = {
    //Have a people array responsible for getting the data and setting to the array.
    people: [],
    //Have the loading state indicate if it's done getting data.
    loading: true,
    //Have state for error message for recieving an error.
    errorMessage: '',
}

//Define your reducer that will return the initialState by default
const dataReducer = (state = initialState, action) => {
    console.log("dataReducer ")
    console.log("state ---> ", state)
    console.log("action ---> ", action)
    switch (action.type) {
        case GET_PEOPLE:
            return { ...state, loading: action.payload }
        case GET_PEOPLE_FULFILLED:
            return { ...state, people: action.payload, loading: action.loading }
        case GET_PEOPLE_REJECTED:
            return { ...state, errorMessage: action.payload, loading: action.loading }
        default:
            return state;
    }
}

export default dataReducer