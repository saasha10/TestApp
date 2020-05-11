import { connect } from 'react-redux'
import { getLocale, getMessages } from '../../selectors/locale'

export const connectLocale = WrappedComponent => {
    const mapStateToProps = state => ({
        locale: getLocale(state),
        message: getMessages(state)
    })

    return connect(mapStateToProps)(WrappedComponent)
}