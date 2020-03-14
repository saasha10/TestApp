import React from 'react'
import styled from 'styled-components'
import { View } from 'react-native'
import { greyStrong1, lightGray } from '../constants/colors'

const StyledText = styled.Text`
    flex: 1;
    margin: 5px;
    padding: 10px;
    height: 60px;
    font-size: 24px;
    text-align: center;
    color: ${greyStrong1};
    border-bottom-width: 1px;
    borderColor: ${lightGray};
    borderStyle: solid;
`

export default function({openModal}){
    return(
        <View>
            <StyledText onPress={openModal}>
                Search here...
            </StyledText>
        </View>
    )
}