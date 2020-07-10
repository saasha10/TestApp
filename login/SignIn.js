import React, { useState } from 'react'
import { Image } from 'react-native'
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5'
import { Input, Button } from 'react-native-elements'
import styled from 'styled-components/native'
import { UIColors } from '../constants/colors'
import { connectLocale } from '../components/HOCC/connectLocale'
import { StyledInput, StyledIcon, sizeIcon } from '../components/BookVisit'

const StyledViewSignIn = styled.View`
    flex: 1;
    align-items: center;
    justify-content: center;
    background-color: ${UIColors.grayAlmostWhite};
`

validateEmail = email => {
    const validate = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return validate.test(email.toLowerCase())
}

function SignIn({ message }) {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [checkEmail, setCheckEmail] = useState(true)


    return (
        <StyledViewSignIn>
            <Image source={require('../img/LogoHomeBusinessLife.png')}
                style={{ width: 250, height: 250 }}
            />
            <Input
                placeholder={message['Type your email']}
                leftIcon={
                    <FontAwesome5Icon
                        name='user-alt'
                        size={24}
                        color={UIColors.greyStrong2}
                    />}
                containerStyle={StyledInput}
                leftIconContainerStyle={StyledIcon}
                value={email}
                onChangeText={setEmail}
                errorMessage={checkEmail ? '' : 'Enter a correct email'}
                renderErrorMessage
                onBlur={() => {
                    const validEmail = validateEmail(email)
                    setCheckEmail(validEmail)
                }}
            />
            <Input
                placeholder={message['Your password']}
                secureTextEntry={true}
                leftIcon={
                    <FontAwesome5Icon
                        name='lock'
                        size={sizeIcon}
                        color={UIColors.greyStrong2}
                    />}
                containerStyle={StyledInput}
                leftIconContainerStyle={StyledIcon}
                value={password}
                onChangeText={setPassword}
            />
            <Button
                title="Sign in"
                titleStyle={{ fontSize: 26 }}
                type="outline"
                raised
                containerStyle={{ marginTop: 30 }}
            />
        </StyledViewSignIn>
    )
}

export default connectLocale(SignIn)