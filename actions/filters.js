import { GET_FILTERS, SET_FILTERS } from '../constants'

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