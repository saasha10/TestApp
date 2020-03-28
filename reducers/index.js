import { combineReducers } from 'redux'
import dataReducer from './dataReducer'
import filtersReducer from './filtersReducer'

const rootReducers = combineReducers({
    dataReducer, 
    filtersReducer
})

export default rootReducers