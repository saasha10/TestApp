import {connect} from 'react-redux'
import {getPeopleAwait, getPeopleAxios, getPeopleSuperAgent} from '../store'
import DataList from '../components/dataList'

//Map the redux state to your props.
const mapStateToProps = state => ({
    data: state.data,
    loading: state.loading,
  })

//Map your action creators to your props.
const mapDispatchToProps = {
    // getPeopleAwait,
    // getPeopleSuperAgent
    getPeopleAxios
}

export default connect(mapStateToProps, mapDispatchToProps)(DataList)