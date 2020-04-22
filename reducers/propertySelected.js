import { PROPERTY_SELECTED } from '../constants'

export default function (state = {}, action) {
    switch (action.type) {
        case PROPERTY_SELECTED:
            return action.payload
            default:
            return state
    }
}