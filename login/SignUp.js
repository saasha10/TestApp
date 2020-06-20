import React, { useState } from 'react'
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5'
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome'
import { Input, Button } from 'react-native-elements'
import styled from 'styled-components'
import { UIColors } from '../constants/colors'
import { StyledInput, StyledIcon, sizeIcon } from '../components/BookVisit'
import { connectLocale } from '../components/HOCC/connectLocale'
import { ScrollView } from 'react-native-gesture-handler'

const StyledViewLogin = styled.View`
    flex: 1;
    align-items: center;
    justify-content: center;
    background-color: ${UIColors.grayAlmostWhite};
`

validateEmail = email => {
    const validate = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return validate.test(email.toLowerCase())
}

function SignUp({ message }) {

    const [name, setName] = useState('')
    const [surname, setSurname] = useState('')
    const [email, setEmail] = useState('')
    const [checkEmail, setCheckEmail] = useState(true)
    const [phone, setPhone] = useState('')
    const [pass, setPass] = useState('')
    const [pass2, setPass2] = useState('')
    const [checkPass, setCheckPass] = useState(false)

    return (
        <StyledViewLogin>
                <Input
                    placeholder={message['Name']}
                    leftIcon={
                        <FontAwesome5Icon
                            name='user-alt'
                            size={sizeIcon}
                        />}
                    containerStyle={StyledInput}
                    leftIconContainerStyle={StyledIcon}
                    value={name}
                    onChangeText={setName}
                />
                <Input
                    placeholder={message['Surname']}
                    leftIcon={
                        <FontAwesome5Icon
                            name='user-tie'
                            size={sizeIcon}
                        />}
                    containerStyle={StyledInput}
                    leftIconContainerStyle={StyledIcon}
                    value={surname}
                    onChangeText={setSurname}
                />
                <Input
                    placeholder={message.Phone}
                    leftIcon={
                        <FontAwesomeIcon
                            name='phone'
                            size={26}
                            color='green'
                        />}
                    containerStyle={StyledInput}
                    leftIconContainerStyle={StyledIcon}
                    keyboardType='numeric'
                    value={phone}
                    onChangeText={setPhone}
                />
                <Input
                    placeholder='someone@example.com'
                    leftIcon={
                        <FontAwesome5Icon
                            name='envelope'
                            size={sizeIcon}
                            color='red'
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
                    label={message['Your password']}
                    placeholder='· · · · · · ·'
                    secureTextEntry={true}
                    leftIcon={
                        <FontAwesome5Icon
                            name='lock'
                            size={sizeIcon}
                            color='grey'
                        />}
                    containerStyle={StyledInput}
                    leftIconContainerStyle={StyledIcon}
                    value={pass}
                    onChangeText={setPass}
                />
                <Input
                    label={message['Repeat password']}
                    placeholder='· · · · · · ·'
                    secureTextEntry={true}
                    leftIcon={
                        <FontAwesome5Icon
                            name='lock'
                            size={sizeIcon}
                            color='grey'
                        />}
                    containerStyle={StyledInput}
                    leftIconContainerStyle={StyledIcon}
                    onChangeText={setPass2}
                    value={pass2}
                    errorMessage={checkPass ? 'The passwords should be the same' : ''}
                    renderErrorMessage
                //onBlur={() => setCheckPass(pass !== pass2)}
                />
                <Button
                    title="Sign up"
                    titleStyle={{ fontSize: 26 }}
                    type="outline"
                    raised
                    containerStyle={{ margin: 10 }}
                    disabled={true}
                />
            
        </StyledViewLogin>
    )
}

export default connectLocale(SignUp) 