import React from 'react'
import styled from 'styled-components'
import { View, Text } from 'react-native'

const StyledText = styled(Text)`
    margin: 10px;
    padding: 10px;
    height: 60px;
    font-size: 24px;
    text-align: center;
    color: #bdbcbc;
    border-bottom-width: 1;
    borderColor: black;
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