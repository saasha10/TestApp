import {connect} from 'react-redux'
import ModalWithHooks from '../components/ModalWithHooks'
import { setFiltersSelected } from '../actions/filters'
import { getFilters } from '../selectors/filters'

const mapStateToProps = state => ({
    filters: getFilters(state)
})

const mapDispatchToProps = dispatch => ({
    setFiltersSelected: state => dispatch(setFiltersSelected(state))
})

export default connect(mapStateToProps, mapDispatchToProps)(ModalWithHooks)