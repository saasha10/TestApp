import { ADD_FAVOURITE_PROPERTY, REMOVE_FAVOURITE_PROPERTY } from '../constants/favouriteProperties'

export default function (state = [], action) {
    switch (action.type) {
        case ADD_FAVOURITE_PROPERTY:
            return [...state, action.payload]
        case REMOVE_FAVOURITE_PROPERTY:
            return state.filter(property => property.propertyReference != action.payload.propertyReference)
        default:
            return state;
    }
}