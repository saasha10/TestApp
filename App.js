import React from 'react'
import styled from 'styled-components'
import { ThemeProvider } from 'react-native-elements'
//import provider to connect component to redux store.
import { Provider } from 'react-redux';
//import your store to connect your component.
import store from './store'
import { UIColors } from './constants/colors'
import ModalWithHooksContainer from './containers/ModalWithHooksContainer'
import DataContainer from './containers/DataContainer'

const StyledSafeAreaView = styled.SafeAreaView`
  margin: 1px;
`

const StyledScrollView = styled.ScrollView`
  background-color: ${UIColors.grayAlmostWhite} ; 
  marginHorizontal: 1px;
`

const App = () => (
  <Provider store={store}>
    <ThemeProvider>
      <StyledSafeAreaView>
        <StyledScrollView>
          <ModalWithHooksContainer />
          <DataContainer />
        </StyledScrollView>
      </StyledSafeAreaView>
    </ThemeProvider>
  </Provider>
)

export default App;
