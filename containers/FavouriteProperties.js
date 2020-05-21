import { connect } from 'react-redux'
import { compose } from 'redux'
import { connectLocale } from '../components/HOCC/connectLocale'
import FavouritesProperties from '../components/FavouritesProperties'
import { getFavouriteProperties } from '../selectors/favouriteProperties'

const mapStateToProps = state => ({
    favouriteProperties: getFavouriteProperties(state)
}) 

export default compose(
    connectLocale,
    connect(mapStateToProps))
    (FavouritesProperties)