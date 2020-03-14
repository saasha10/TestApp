/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react'
import styled from 'styled-components'
import { grayAlmostWhite } from './constants/colors'
import ModalWithHooks from './components/utilities/ModalWithHooks'

const StyledSafeAreaView = styled.SafeAreaView`
  flex: 1;
  margin: 1px;
`

const StyledScrollView = styled.ScrollView`
  background-color: ${grayAlmostWhite}; 
  marginHorizontal: 1px;
`

const App = () => {

  return (
    <StyledSafeAreaView>
      <StyledScrollView>
        <ModalWithHooks/>
      </StyledScrollView>
    </StyledSafeAreaView>

  )
}

export default App;
