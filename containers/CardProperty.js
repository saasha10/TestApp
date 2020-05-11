import { connect } from 'react-redux'
import { compose } from 'redux'
import { addFavouriteProperty, removeFavouriteProperty, propertySelected } from '../actions/properties'
import { navigate } from '../actions/navigation'
import { connectLocale } from '../components/HOCC/connectLocale'
import CardProperty from '../components/utilities/CardProperty'
import { getFavouriteProperties } from '../selectors/favouriteProperties'

const mapStateToProps = state => ({
    favouriteProperties: getFavouriteProperties(state)
})

const mapDispatchToProps = dispatch => ({
    addFavouriteProperty: state => dispatch(addFavouriteProperty(state)),
    removeFavouriteProperty: state => dispatch(removeFavouriteProperty(state)),
    propertySelected: state => dispatch(propertySelected(state)),
    navigate: state => dispatch(navigate(state))
})

export default compose(
    connectLocale,
    connect(mapStateToProps, mapDispatchToProps))(CardProperty)