/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react'
import styled from 'styled-components'
import { ThemeProvider } from 'react-native-elements'
//import provider to connect component to redux store.
import { Provider } from 'react-redux';
//import your store to connect your component.
import store from './store'
import { UIColors } from './constants/colors'
import ModalWithHooks from './components/utilities/ModalWithHooks'
import DataContainer from './containers/DataContainer'
//---------------------------------------------------------------------------------------
// Dimensions to know exactly the width and height of devices 
// const screenWidth = Math.round(Dimensions.get('window').width)
// const screenHeight = Math.round(Dimensions.get('window').height)

const StyledSafeAreaView = styled.SafeAreaView`
  margin: 1px;
`

const StyledScrollView = styled.ScrollView`
  background-color: ${UIColors.grayAlmostWhite} ; 
  marginHorizontal: 1px;
`

const App = () => {
  return (<Provider store={store}>
    <ThemeProvider>
      <StyledSafeAreaView>
        <StyledScrollView>
          <ModalWithHooks />
        </StyledScrollView>
        <DataContainer />
      </StyledSafeAreaView>
    </ThemeProvider>
  </Provider>
  )
}

export default App;
