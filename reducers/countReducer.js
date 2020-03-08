import { COUNTER_CHANGE } from '../constants'

const initialState = {
    count: 0
}

const countReducer = (state = initialState, action) => {
    // console.log("Reducer")
    // console.log("state", state)
    // console.log("action", action)
    switch(action.type){
        case COUNTER_CHANGE:
            return{
                ...state,
                count: action.count
            }
        default: 
            return state
    }
}

export default countReducer