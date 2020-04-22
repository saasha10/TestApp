import { combineReducers } from 'redux'
import dataReducer from './dataReducer'
import filtersReducer from './filtersReducer'
import navigationReducer from './navigationReducer'
import favouriteProperties from './favouriteProperties'
import propertySelected from './propertySelected'

const rootReducers = combineReducers({
    dataReducer, 
    filtersReducer,
    navigationReducer,
    favouriteProperties,
    propertySelected
})

export default rootReducers