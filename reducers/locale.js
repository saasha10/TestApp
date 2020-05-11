import { SET_LOCALE, SET_LANG } from '../constants'

export const locale = (state = 'es', action) => {
    switch (action.type) {
        case SET_LOCALE:
            return action.locale
        default:
            return state
    }
}

export const messages = (state = {}, action) => {
    switch (action.type) {
        case SET_LANG:
            return action.lang
        default:
            return state
    }
}