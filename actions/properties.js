import { ADD_FAVOURITE_PROPERTY, REMOVE_FAVOURITE_PROPERTY } from '../constants/favouriteProperties'
import { PROPERTY_SELECTED } from '../constants'

export const addFavouriteProperty = property => ({
    type: ADD_FAVOURITE_PROPERTY,
    payload: property
})

export const removeFavouriteProperty = property => ({
    type: REMOVE_FAVOURITE_PROPERTY,
    payload: property
})

export const propertySelected = property => ({
    type: PROPERTY_SELECTED,
    payload: property
})