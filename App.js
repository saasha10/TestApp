/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react'
import styled from 'styled-components'
import { UIColors } from './constants/colors'
import ModalWithHooks from './components/utilities/ModalWithHooks'
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
  return (
    <StyledSafeAreaView>
      <StyledScrollView>
        <ModalWithHooks/>
      </StyledScrollView>
    </StyledSafeAreaView>

  )
}

export default App;
