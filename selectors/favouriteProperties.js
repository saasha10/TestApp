import pipe from 'lodash/fp/pipe'
import get from 'lodash/fp/get'
import includes from 'lodash/fp/includes'
import map from 'lodash/fp/map'
import { FAVOURITE_PROPERTIES } from '../constants/favouriteProperties'


export const getFavouriteProperties = get(FAVOURITE_PROPERTIES)

export const getFavouritePropertiesReferences = pipe(
    getFavouriteProperties,
    map('propertyReference')
)

export const isFavouriteProperty = (state, property) => 
    pipe(
        getFavouritePropertiesReferences,
        includes(property.propertyReference)
    )(state)