import { connect } from 'react-redux'
import { addFavouriteProperty, removeFavouriteProperty } from '../actions/properties'
import FavouritesProperties from '../components/FavouritesProperties'
import { getFavouriteProperties } from '../selectors/favouriteProperties'

const mapStateToProps = state => ({
    favouriteProperties: getFavouriteProperties(state)
})

export default connect(mapStateToProps)(FavouritesProperties)