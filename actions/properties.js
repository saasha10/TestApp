import { ADD_FAVOURITE_PROPERTY, REMOVE_FAVOURITE_PROPERTY} from '../constants/favouriteProperties'

export const addFavouriteProperty = property => ({
    type: ADD_FAVOURITE_PROPERTY,
    payload: property
})

export const removeFavouriteProperty = property => ({
    type: REMOVE_FAVOURITE_PROPERTY,
    payload: property
})