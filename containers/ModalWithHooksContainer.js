import { connect } from 'react-redux'
import { compose } from 'redux'
import { connectLocale } from '../components/HOCC/connectLocale'
import ModalWithHooks from '../components/ModalWithHooks'
import { setFiltersSelected } from '../actions/filters'
import { getFilters } from '../selectors/filters'
import { getLoading } from '../selectors/data'

const mapStateToProps = state => ({
    filters: getFilters(state),
    loading: getLoading(state)
})

const mapDispatchToProps = dispatch => ({
    setFiltersSelected: state => dispatch(setFiltersSelected(state))
})

export default compose(
    connectLocale,
    connect(
        mapStateToProps, mapDispatchToProps))
    (ModalWithHooks)