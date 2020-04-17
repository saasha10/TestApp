import { combineReducers } from 'redux'
import dataReducer from './dataReducer'
import filtersReducer from './filtersReducer'
import navigationReducer from './navigationReducer'
import favouriteProperties from './favouriteProperties'

const rootReducers = combineReducers({
    dataReducer, 
    filtersReducer,
    navigationReducer,
    favouriteProperties
})

export default rootReducers