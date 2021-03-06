import { GET_FILTERS, SET_FILTERS, SET_FILTERS_SELECTED, FILTERS_NAMES } from '../constants'
import { setProperties } from './data'
import store from '../store/index'
import { getCustomerProperties } from '../selectors/data'
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

export const setFiltersSelected = filtersSelected => (dispatch, getState) => {
    const state = getState()

    let propertiesFiltered = getCustomerProperties(state)

    forEach(filtersSelected, (value, key) => {
        const isEmpty = value === ""
        propertiesFiltered = filter(propertiesFiltered, property => {
            if (!isEmpty) {
                switch (key) {
                    case FILTERS_NAMES.HOME_TYPE:
                        return property.propertyFeatures.featuresType === value
                    case FILTERS_NAMES.OPERATION_TYPE:
                        return property.propertyOperation.operationType === value
                    case FILTERS_NAMES.CITY:
                        return property.propertyAddress.addressTown === value
                    case FILTERS_NAMES.FEATURES_BED_ROOM_NUMBER:
                        return property.propertyFeatures.featuresBedroomNumber >= value.min && property.propertyFeatures.featuresBedroomNumber <= value.max
                    case FILTERS_NAMES.OPERATION_PRICE:
                        return property.propertyOperation.operationPrice >= value.min && property.propertyOperation.operationPrice <= value.max
                    default:
                        break;
                }
            }
            return propertiesFiltered
        })
    })

    dispatch(setProperties(propertiesFiltered))

    return dispatch({
        type: SET_FILTERS_SELECTED,
        payload: filtersSelected
    })
}