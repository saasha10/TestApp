import { GET_FILTERS, SET_FILTERS, SET_FILTERS_SELECTED } from '../constants'
import { setProperties } from './data'
import store from '../store/index'
import forEach from 'lodash/forEach'
import filter from 'lodash/filter'

export const getFilters = filters => {
    return {
        type: GET_FILTERS,
        payload: filters,
    }
}

export const setFilters = filters => {
    return {
        type: SET_FILTERS,
        payload: filters,
    }
}

export const setFiltersSelected = filtersSelected => {
    const state = store.getState()

    let propertiesFiltered = state.dataReducer.data.customerProperties

    forEach(filtersSelected, (value, key) => {
        propertiesFiltered = filter(propertiesFiltered, property => {
            if (value !== "") {
                switch (key) {
                    case "homeType":
                        return property.propertyFeatures.featuresType === value
                    case "operationType":
                        return property.propertyOperation.operationType === value
                    case "city":
                        return property.propertyAddress.addressTown === value
                    default:
                        break;
                }
            }
            return propertiesFiltered
        })
        // console.log("result1", propertiesFiltered)
    })
    // console.log("result2", propertiesFiltered)
    store.dispatch(setProperties(propertiesFiltered))
    return {
        type: SET_FILTERS_SELECTED,
        payload: filtersSelected
    }
}