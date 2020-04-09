import get from 'lodash/fp/get'
import pipe from 'lodash/fp/pipe'

export const getFiltersReducer = get('filtersReducer')

export const getFilters = pipe(
    getFiltersReducer,
    get('filters')
)