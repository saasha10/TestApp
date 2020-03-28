import { GET_FILTERS } from '../constants'

initialState = {
    filters: {
        homeType: [],
        operationType: [],
        city: []
    }
}

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_FILTERS:
            return { ...state, filters: action.payload}
        default:
            return state;
    }
}

// export default filtersReducer