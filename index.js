/**
 * @format
 */

import { AppRegistry } from 'react-native';
// import React from 'react'
// import App from './App';
// import SumExampleContainer  from './containers/SumExampleContainer'
//-----------> *** Try with AppExample *** <--------------
import AppExample from './AppExample'
//-----------> *** Try with AppExample *** <--------------
// import RootModalContainer from './containers/RootModalContainer'
import { name as appName } from './app.json';
//-----------------------------------------------------------------------------------------
//-----------> *** Try with <SumExampleContainer *** <--------------
// import { Provider } from 'react-redux' 
// import { createStore } from 'redux'
// import countReducer from './reducers/countReducer'

// const store = createStore(countReducer)

// const RNRedux = () => (
//     <Provider store={store}>
//         <SumExampleContainer/>
//     </Provider>
// )
//-----------> *** Try with <SumExampleContainer *** <--------------
//-----------------------------------------------------------------------------------------


AppRegistry.registerComponent(appName, () => AppExample);