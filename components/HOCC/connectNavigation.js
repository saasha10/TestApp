import { connect } from 'react-redux'
import { navigate, goBack, reset, toggleDrawer, navigateInTabs } from '../../actions/navigation'

export const connectNavigation = WrappedComponent => {
    const mapStateToProps = state => ({
        currentScreen: state.navigationReducer.stackView,
        currentTab: state.navigationReducer.tabView,
        isDrawerOpen: state.navigationReducer.isDrawerOpen
    })

    const mapDispatchToProps = {
        navigate,
        goBack,
        reset,
        toggleDrawer,
        navigateInTabs
    }

    return connect(
        mapStateToProps,
        mapDispatchToProps
    )(WrappedComponent)
}