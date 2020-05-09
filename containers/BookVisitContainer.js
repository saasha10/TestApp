import { connect } from 'react-redux'
// import { navigate } from '../actions/navigation'
import BookVisit from '../components/BookVisit'
import { getpropertyReference } from '../selectors/propertySelected'

const mapStateToProps = state => ({
    propertyReference: getpropertyReference(state)
})

export default connect(mapStateToProps)(BookVisit)