import { combineReducers } from 'redux'
import dataReducer from './dataReducer'
import filtersReducer from './filtersReducer'
import navigationReducer from './navigationReducer'
import favouriteProperties from './favouriteProperties'
import propertySelected from './propertySelected'
import { locale, messages } from './locale'

const rootReducers = combineReducers({
    dataReducer,
    filtersReducer,
    navigationReducer,
    favouriteProperties,
    propertySelected,
    locale,
    messages
})

export default rootReducers