import { connect } from 'react-redux'
import { getPeopleAxios } from '../actions/getData'
import DataList from '../components/dataList'

//Map the redux state to your props.
const mapStateToProps = state => ({
  properties: state.dataReducer.properties,
  loading: state.dataReducer.loading
})

//Map your action creators to your props.
const mapDispatchToProps = {
  getPeopleAxios
}

export default connect(mapStateToProps, mapDispatchToProps)(DataList)