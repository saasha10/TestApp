import {connect} from 'react-redux'
import ModalWithHooks from '../components/utilities/ModalWithHooks'
import { setFiltersSelected } from '../actions/filters'

const mapStateToProps = state => ({
    filters: state.filtersReducer.filters
})

const mapDispatchToProps = dispatch => ({
    setFiltersSelected: state => dispatch(setFiltersSelected(state))
})

export default connect(mapStateToProps, mapDispatchToProps)(ModalWithHooks)