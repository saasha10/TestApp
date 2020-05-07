import React from 'react'
import styled from 'styled-components'
import ModalWithHooksContainer from '../containers/ModalWithHooksContainer'
import DataContainer from '../containers/DataContainer'
import { UIColors } from '../constants/colors'

const StyledSafeAreaView = styled.SafeAreaView`
  margin: 1px;
`

const StyledScrollView = styled.ScrollView`
  background-color: ${UIColors.grayAlmostWhite} ; 
  marginHorizontal: 1px;
`

export default () => (
  <>
    <ModalWithHooksContainer />
    <StyledSafeAreaView>
      <StyledScrollView>
        <DataContainer />
      </StyledScrollView>
    </StyledSafeAreaView>
  </>
)
