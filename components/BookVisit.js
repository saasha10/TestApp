import React, { useState } from 'react'
import { View, Platform } from 'react-native'
import styled from 'styled-components'
import { Input, Button } from 'react-native-elements'
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5'
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome'
import { WrapperTitle, Title } from './FavouritesProperties'
import { UIColors } from '../constants/colors'
import { ScrollView } from 'react-native-gesture-handler'
import DateTimePicker from '@react-native-community/datetimepicker'

const StyledWrapperTitle = styled(WrapperTitle)`
    margin-bottom: 10px;
`

const WrapperInputs = styled.View`
    flex: 1;
`

const StyledInput = {
    margin: 10
}

const StyledIcon = {
    marginRight: 10
}

const sizeIcon = 24

const formatValue = date => {

    const day = date.getDate().toString().length < 2 ? '0' + date.getDate().toString() : date.getDate().toString()
    const month = (date.getMonth() + 1).toString().length < 2 ? '0' + (date.getMonth() + 1).toString() : (date.getMonth() + 1).toString()
    const year = date.getFullYear().toString()
    const hours = date.getHours().toString()
    const minutes = date.getMinutes().toString().length < 2 ? '0' + date.getMinutes().toString() : date.getMinutes().toString()
    const valueDate = day + '/' + month + '/' + year
    const valueTime = hours + ':' + minutes

    return ({
        date: valueDate,
        time: valueTime
    })
}

export default function ({ propertyReference }) {
    const [date, setDate] = useState(new Date())
    const [mode, setMode] = useState('date')
    const [show, setShow] = useState(false)

    const valueDateAndTime = formatValue(date)

    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate || date
        setShow(Platform.OS === 'ios')
        setDate(currentDate)
    }

    const showMode = currentMode => {
        setShow(true)
        setMode(currentMode)
    }

    const showDatepicker = () => {
        showMode('date')
    }

    const showTimepicker = () => {
        showMode('time')
    }

    return (
        <>
            <StyledWrapperTitle>
                <Title>Book visit</Title>
            </StyledWrapperTitle>
            <View>
                {show && (
                    <DateTimePicker
                        testID="dateTimePicker"
                        timeZoneOffsetInMinutes={0}
                        value={date}
                        mode={mode}
                        is24Hour={true}
                        display="default"
                        onChange={onChange}
                    />
                )}
            </View>
            <ScrollView>
                <WrapperInputs>
                    <Input
                        placeholder='Name'
                        leftIcon={
                            <FontAwesome5Icon
                                name='user-tie'
                                size={sizeIcon}
                            />}
                        label='Your name'
                        containerStyle={StyledInput}
                        leftIconContainerStyle={StyledIcon}
                    />
                    <Input
                        placeholder='Phone'
                        leftIcon={
                            <FontAwesomeIcon
                                name='phone'
                                size={26}
                                color='green'
                            />}
                        label='Your phone'
                        containerStyle={StyledInput}
                        leftIconContainerStyle={StyledIcon}
                        keyboardType='numeric'
                    />
                    <Input
                        placeholder='example@someone.com'
                        leftIcon={
                            <FontAwesome5Icon
                                name='envelope'
                                size={sizeIcon}
                                color='red'
                            />}
                        label='Your email'
                        containerStyle={StyledInput}
                        leftIconContainerStyle={StyledIcon}
                    />

                    <Input
                        placeholder='16/09/1992'
                        leftIcon={
                            <FontAwesome5Icon
                                name='calendar-alt'
                                size={sizeIcon}
                            />}
                        label='Day of your visit'
                        containerStyle={StyledInput}
                        onFocus={showDatepicker}
                        value={valueDateAndTime.date}
                        leftIconContainerStyle={StyledIcon}
                    />
                    <Input
                        placeholder='09:00'
                        leftIcon={
                            <FontAwesome5Icon
                                size={sizeIcon}
                                name='user-clock'
                            />}
                        label='Time of your visit'
                        containerStyle={StyledInput}
                        onFocus={showTimepicker}
                        value={valueDateAndTime.time}
                        leftIconContainerStyle={StyledIcon}
                    />
                    <Input
                        defaultValue={propertyReference}
                        leftIcon={
                            <FontAwesome5Icon
                                name='home'
                                size={sizeIcon}
                                color={UIColors.violetOfficalColor}
                            />}
                        label='Home ID'
                        containerStyle={StyledInput}
                        disabled={true}
                        leftIconContainerStyle={StyledIcon}
                    />
                </WrapperInputs>
            </ScrollView>
            <Button
                icon={
                    <FontAwesome5Icon
                        name="check"
                        size={20}
                        color="white"
                    />
                }
                iconRight
                title="Book"
                onPress={() => console.log('BOOKED')}
                buttonStyle={{ borderRadius: 25, backgroundColor: UIColors.blue }}
                titleStyle={{ fontSize: 20, paddingRight: 4 }}
                containerStyle={{ position: "absolute", bottom: 10, right: 10 }}
            />
        </>
    )
}