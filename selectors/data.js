import get from 'lodash/fp/get'
import pipe from 'lodash/fp/pipe'
import { DATA_REDUCER, PROPERTIES, LOADING } from '../constants/index'

export const getDataReducer = get(DATA_REDUCER)

export const getProperties = pipe(
    getDataReducer,
    get(PROPERTIES)
)

export const getLoading = pipe(
    getDataReducer,
    get(LOADING)
)