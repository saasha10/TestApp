import { connect } from 'react-redux'
import { navigate } from '../actions/navigation'
import MainProperty from '../components/utilities/MainProperty'
import { getPropertySelected } from '../selectors/propertySelected'

const mapStateToProps = state => ({
    property: getPropertySelected(state)
})

const mapDispatchToProps = dispatch => ({
    navigate: state => dispatch(navigate(state))
})

export default connect(mapStateToProps, mapDispatchToProps)(MainProperty)