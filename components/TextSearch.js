import React from 'react'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import styled from 'styled-components'
import { UIColors } from '../constants/colors'

const StyledText = styled.Text`
    flex: 1;    
    margin: 5px;
    padding: 10px;
    height: 60px;
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
            <Icon name="account-search" size={25} style={{ color: UIColors.greyStrong1 }} />
                Search here...
        </StyledText>
        </>
    )
}