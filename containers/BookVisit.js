import { connect } from 'react-redux'
import { compose } from 'redux'
// import { navigate } from '../actions/navigation'
import { connectLocale } from '../components/HOCC/connectLocale'
import BookVisit from '../components/BookVisit'
import { getpropertyReference } from '../selectors/propertySelected'

const mapStateToProps = state => ({
    propertyReference: getpropertyReference(state)
})

export default compose(
    connectLocale,
    connect(mapStateToProps)
)(BookVisit)