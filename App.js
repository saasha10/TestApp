import React, { useEffect } from 'react'
import { Platform, NativeModules } from 'react-native'
import { ThemeProvider } from 'react-native-elements'
//import provider to connect component to redux store.
import { Provider } from 'react-redux'
//import your store to connect your component.
import store from './store'
import 'react-native-gesture-handler'
import { seti18n } from './actions/locale'
import AppNavigator from './navigators/Navigator'

const App = () => {
  const deviceLanguage = Platform.OS === 'ios' ?
    NativeModules.SettingsManager.settings.AppleLocale || NativeModules.SettingsManager.settings.AppleLanguages[0]
    : NativeModules.I18nManager.localeIdentifier

  useEffect(() => { store.dispatch(seti18n(deviceLanguage)) })


  return (
    <Provider store={store}>
      <ThemeProvider>
        <AppNavigator />
      </ThemeProvider>
    </Provider>
  )
}

export default App