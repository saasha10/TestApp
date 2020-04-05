import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
// Logger with default options
import logger from 'redux-logger'
import rootReducers from '../reducers/index'

export default createStore(rootReducers, applyMiddleware(thunk, logger))