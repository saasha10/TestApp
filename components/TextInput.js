import React from 'react'
import styled from 'styled-components'
import { View, TextInput } from 'react-native'

const StyledInput = styled(TextInput)`
    margin: 10px;
    padding: 10px;
    height: 60px;
    font-size: 24px;
    text-align: center;
    border-bottom-width: 1;
    borderColor: ${props => props.blueColor ? props.blueColor : 'red'};
    borderStyle: solid;
`

export default function(){
    return(
        <View>
            <StyledInput
                blueColor="blue"
                placeholder="Type here..."
            />
        </View>
    )
}