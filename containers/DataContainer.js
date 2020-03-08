import {connect} from 'react-redux'
import {getPeopleAwait, getPeopleAxios, getPeopleSuperAgent} from '../store'
import dataList from '../components/dataList'

//Map the redux state to your props.
const mapStateToProps = state => ({
    people: state.people,
    loading: state.loading,
  })

//Map your action creators to your props.
const mapDispatchToProps = {
    // getPeopleAwait,
    getPeopleAxios
    // getPeopleSuperAgent
}

export default connect(mapStateToProps, mapDispatchToProps)(dataList)