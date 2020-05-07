import { connect } from 'react-redux'
import { navigate } from '../actions/navigation'
import BookVisit from '../components/BookVisit'
import { getPropertySelected } from '../selectors/propertySelected'

const mapStateToProps = state => ({
    property: getPropertySelected(state)
})

export default connect(mapStateToProps)(BookVisit)