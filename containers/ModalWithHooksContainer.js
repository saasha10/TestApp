import {connect} from 'react-redux'
import ModalWithHooks from '../components/utilities/ModalWithHooks'

const mapStateToProps = state => ({
    filters: state.filtersReducer.filters
})

const mapDispatchToProps = {
}

export default connect(mapStateToProps, mapDispatchToProps)(ModalWithHooks)