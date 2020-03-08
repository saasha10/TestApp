import {connect} from 'react-redux'
import RootModal from '../components/RootModal'

const mapStateToProps = state => {
    return {
        id: state.modal.id
    }
}

export default connect(mapStateToProps)(RootModal)