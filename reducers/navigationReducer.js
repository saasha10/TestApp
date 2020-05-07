import { NAVIGATE, GO_BACK_NAVIGATE, RESET_NAVIGATE, TAB_NAVIGATE, TOGGLE_DRAWER } from '../constants/navigation'

const initialState = {
    isDrawerOpen: false,
    stackView: "Main",
    tabView: "Home"
}

export default (state = initialState, action) => {
    switch (action.type) {
        case NAVIGATE:
            return {
                ...state,
                stackView: action.route
            }
        case GO_BACK_NAVIGATE:
            return {
                ...state,
                stackView: state.stackView.pop
            }
        case RESET_NAVIGATE:
            return initialState

        case TAB_NAVIGATE:
            return {
                ...state,
                tabView: state.tabView.concat([action.tab])
            }
        case TOGGLE_DRAWER:
            return {
                ...state,
                isDrawerOpen: !state.isDrawerOpen
            }
        default:
            return state
    }
}