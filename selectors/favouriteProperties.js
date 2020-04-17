import get from 'lodash/fp/get'
import { FAVOURITE_PROPERTIES } from '../constants/favouriteProperties'


export const getFavouriteProperties = get(FAVOURITE_PROPERTIES)