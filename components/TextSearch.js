import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome5'
import styled from 'styled-components'
import { UIColors } from '../constants/colors'

const StyledText = styled.Text`  
    margin: 5px;
    padding: 10px;
    height: 50px;
    font-size: 24px;
    font-style: italic;
    text-align: center;
    color: ${UIColors.greyStrong2};
    border-bottom-width: 1px;
    borderColor: ${UIColors.lightGray};
    borderStyle: solid;
`

export default function ({ openModal }) {
    return (
        <>
            <StyledText onPress={openModal}>
                Search here...
                <Icon name="search" size={20} style={{ color: UIColors.greyStrong1}} />
            </StyledText>
        </>
    )
}