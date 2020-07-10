import { connect } from 'react-redux'
import { compose } from 'redux'
import { addFavouriteProperty, removeFavouriteProperty, propertySelected } from '../actions/properties'
import { navigate } from '../actions/navigation'
import { connectLocale } from '../components/HOCC/connectLocale'
import CardProperty from '../components/utilities/CardProperty'
import { isFavouriteProperty } from '../selectors/favouriteProperties'

const mapStateToProps = (state, ownProps) => ({
    isFavouriteProperty: isFavouriteProperty(state, ownProps.property)
})

const mapDispatchToProps = {
    addFavouriteProperty,
    removeFavouriteProperty,
    propertySelected,
    navigate
}

export default compose(
    connectLocale,
    connect(mapStateToProps, mapDispatchToProps))(CardProperty)