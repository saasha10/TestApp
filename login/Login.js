import React, { Component } from 'react'
import Icon from 'react-native-vector-icons/FontAwesome'
import { Text, Input } from 'react-native-elements'
import styled from 'styled-components'
import { UIColors } from '../constants/colors'

const StyledViewLogin = styled.View`
    flex: 1;
    align-items: center;
    justify-content: center;
    background-color: ${UIColors.grayAlmostWhite};
`

class Login extends Component {
    render() {
        return (
            <StyledViewLogin>
                <Text h1>Apple ID</Text>
                <Text>Manage your Apple account</Text>
                <Input
                    placeholder="Type your email"
                    leftIcon={
                        <Icon
                            name='user'
                            size={24}
                            color='black' />
                    }
                />
            </StyledViewLogin>
        )
    }
}

export default Login