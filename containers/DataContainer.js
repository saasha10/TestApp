import { connect } from 'react-redux'
import { getPeopleAxios } from '../actions/getData'
import DataList from '../components/dataList'
import { getProperties } from '../selectors/data'

//Map the redux state to your props.
const mapStateToProps = state => ({
  properties: getProperties(state),
  loading: state.dataReducer.loading
})

//Map your action creators to your props.
const mapDispatchToProps = {
  getPeopleAxios
}

export default connect(mapStateToProps, mapDispatchToProps)(DataList)