import { COUNTER_CHANGE } from '../constants'

export const changeCount = count => {
    console.log("ACTIONS", count)
    return {
        type: COUNTER_CHANGE,
        count
    }
}