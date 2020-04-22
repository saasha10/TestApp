import { connect } from 'react-redux'
import MainProperty from '../components/utilities/MainProperty'

const mapStateToProps = state => ({
    property: state.propertySelected
})

export default connect(mapStateToProps)(MainProperty)