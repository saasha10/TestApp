import { SET_LOCALE, SET_LANG } from '../constants'

export const setLocale = (locale = 'es') => ({
    type: SET_LOCALE,
    locale
})

export const setLang = (lang = 'es_ES') => ({
    type: SET_LANG,
    lang
})

export const seti18n = (locale = 'es') => dispatch => {
    const messages = getPathLanguage(locale)

    dispatch(setLocale(locale))
    return dispatch(setLang(messages))
}

const getPathLanguage = locale => {
    switch (locale.substring(0, 2)) {
        case 'en': return require('../translations/en_GB.json')
        default:
            return require('../translations/es_ES.json')
    }
}