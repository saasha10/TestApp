import { connect } from 'react-redux'
import { addFavouriteProperty, removeFavouriteProperty } from '../actions/properties'
import CardProperty from '../components/utilities/CardProperty'
import { getFavouriteProperties } from '../selectors/favouriteProperties'

const mapStateToProps = state => ({
    favouriteProperties: getFavouriteProperties(state)
})

const mapDispatchToProps = dispatch => ({
    addFavouriteProperty: state => dispatch(addFavouriteProperty(state)),
    removeFavouriteProperty: state => dispatch(removeFavouriteProperty(state))
})

export default connect(mapStateToProps, mapDispatchToProps)(CardProperty)