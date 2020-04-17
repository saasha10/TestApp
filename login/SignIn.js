import React, { Component } from 'react'
import Icon from 'react-native-vector-icons/FontAwesome'
import { Text, Input } from 'react-native-elements'
import styled from 'styled-components'
import { UIColors } from '../constants/colors'

const StyledViewSignIn = styled.View`
    flex: 1;
    align-items: center;
    justify-content: center;
    background-color: ${UIColors.grayAlmostWhite};
`

export default function SignIn() {
    return (
        <StyledViewSignIn>
            <Text h1>Sign in</Text>
            <Text>This is just a test</Text>
            <Input
                placeholder="Type your email"
                leftIcon={
                    <Icon
                        name='user'
                        size={24}
                        color='black' />
                }
            />
        </StyledViewSignIn>
    )
}