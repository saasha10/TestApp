import { GET_FILTERS, SET_FILTERS_SELECTED, FILTERS_NAMES } from '../constants'

initialState = {
    filters: {
        [FILTERS_NAMES.HOME_TYPE]: [],
        [FILTERS_NAMES.OPERATION_TYPE]: [],
        [FILTERS_NAMES.CITY]: [],
        [FILTERS_NAMES.FEATURES_BED_ROOM_NUMBER]: {
            min: 1,
            max: 5
        },
        [FILTERS_NAMES.OPERATION_PRICE]: {
            priceRent: {
                min: 500,
                max: 3200
            },
            priceSale: {
                min: 10000,
                max: 4900000
            }
        }
    },
    filtersSelected: {
        [FILTERS_NAMES.HOME_TYPE]: "",
        [FILTERS_NAMES.OPERATION_TYPE]: "",
        [FILTERS_NAMES.CITY]: "",
        [FILTERS_NAMES.FEATURES_BED_ROOM_NUMBER]: {
            min: 1,
            max: 5
        },
        [FILTERS_NAMES.OPERATION_PRICE]: {
            min: 200,
            max: 20000
        }
    }
}

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_FILTERS:
            return { ...state, filters: action.payload}
        case SET_FILTERS_SELECTED:
            return {...state, filtersSelected: action.payload}
        default:
            return state;
    }
}