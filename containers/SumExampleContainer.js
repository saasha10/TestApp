import { connect } from 'react-redux'
import SumExample from '../components/SumExample'
import { changeCount } from '../actions/counts'

const mapStateToProps = state => {
    console.log("state")
    console.log(state)
    return ({
            count: state.count
        })
}

const mapDispatchToProps = dispatch => ({
    changeCount: state => dispatch(changeCount(state))
})

export default connect(mapStateToProps, mapDispatchToProps)(SumExample)