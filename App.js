import React from 'react'
import { ThemeProvider } from 'react-native-elements'
//import provider to connect component to redux store.
import { Provider } from 'react-redux'
//import your store to connect your component.
import store from './store'
import 'react-native-gesture-handler'
import AppNavigator from './navigators/Navigator'

const App = () => (
  <Provider store={store}>
    <ThemeProvider>
      <AppNavigator />
    </ThemeProvider>
  </Provider>
)

export default App