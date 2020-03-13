/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {useState} from 'react';
import {View, Text, SafeAreaView, ScrollView, TouchableOpacity} from 'react-native'
import styled from 'styled-components'
import ModalWithHooks from './components/utilities/ModalWithHooks'
const StyledSafeAreaView = styled(SafeAreaView)`
  flex: 1;
  margin: 1px;
`

const StyledScrollView = styled(ScrollView)`
  background-color: 'rgba(179, 100, 255, 0.15)'; 
  marginHorizontal: 1;
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
