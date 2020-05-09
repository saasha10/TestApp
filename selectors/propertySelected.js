import get from 'lodash/fp/get'
import pipe from 'lodash/fp/pipe'
import { PROPERTY_REFERENCE } from '../constants'

export const getPropertySelected = get('propertySelected')

export const getpropertyReference = pipe(
    getPropertySelected,
    get(PROPERTY_REFERENCE)
)