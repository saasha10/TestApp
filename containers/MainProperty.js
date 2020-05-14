import { connect } from 'react-redux'
import { compose } from 'redux'
import { navigate } from '../actions/navigation'
import { connectLocale } from '../components/HOCC/connectLocale'
import MainProperty from '../components/utilities/MainProperty'
import { getPropertySelected } from '../selectors/propertySelected'

const mapStateToProps = state => ({
    property: getPropertySelected(state)
})

const mapDispatchToProps = dispatch => ({
    navigate: state => dispatch(navigate(state))
})

export default compose(
    connectLocale,
    connect(mapStateToProps, mapDispatchToProps))(MainProperty)