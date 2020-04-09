import get from 'lodash/fp/get'
import pipe from 'lodash/fp/pipe'

export const getDataReducer = get('dataReducer')

export const getProperties = pipe(
    getDataReducer,
    get('properties')
)
