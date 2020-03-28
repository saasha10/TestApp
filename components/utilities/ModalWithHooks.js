import React, { useState } from 'react'
import styled from 'styled-components'
import { View, Dimensions, Picker } from 'react-native'
import { Text, Input } from 'react-native-elements'
import Icon from 'react-native-vector-icons/FontAwesome';
import Modal from 'react-native-modal'
import { UIColors } from '../../constants/colors'
import TextInput from '../TextSearch'
//----------------------------- Dimesions -----------------------------------
const screenWidth = Math.round(Dimensions.get('window').width)
const screenHeight = Math.round(Dimensions.get('window').height)
//-----------------------------Styled MODAL HEADER-----------------------------------
const StyledHeaderTitle = styled.Text`
    font-family: Cochin;
    font-weight: bold;
    font-size: 30px;
    text-align: center;
    margin: 5px;
    padding: 10px;
    color: ${UIColors.violetOfficalColor};
`
const StyledDivider = styled.View`
    width: 100%;
    height: 1%;
    background-color: ${UIColors.lightGray};
`
//-----------------------------Styled MODAL BODY-----------------------------------
const StyledModalBody = styled.View`
    flex: 4;
    background-color: ${UIColors.white};
    paddingVertical: 20px;
    paddingHorizontal: 10px;
`

const StyledBodyView2 = styled.View`
    flex: 2;
`

const StyledPicker = styled.Picker`
    marginBottom: 40px;
`

const StyledParentText = styled.View`
    flex-direction: row;
    justify-content: center;
`
const StyledBodyText = styled(Text)`
    text-align: center;
    marginVertical: 10px;
    marginHorizontal: 50px; 
    font-size: 20px;
`
//-----------------------------Styled MODAL FOOTER-----------------------------------
const StyledContainerButtons = styled.View`
    flexDirection: row;
    justify-content: space-between;
    margin: 5px;
`
const StyledFooterButtons = styled.TouchableOpacity`
    borderRadius: 5px;
    margin: 10px; 
    paddingVertical: 10px;
    paddingHorizontal: 20px;
    background-color: ${props => props.isClose ? UIColors.red : UIColors.green};
`
const StyledButtonText = styled.Text`
    color: ${UIColors.white};
    font-weight: bold;
`
//----------------------------- Styled MODAL CONTAINER-----------------------------------
const StyledModalContainer = styled.View`
    width:${screenWidth}px;
    height:${screenHeight}px;
    background-color: ${UIColors.grayAlmostWhite};
    borderRadius: 5px;
    padding: 10px;
`
//-----------------------------Styled MODAL-----------------------------------
const StyledModal = styled.View`
    background-color: ${UIColors.greyStrong1};
    max-width:${screenWidth}px;
    height:${screenHeight}px;
    justifyContent: space-around;
    color: #00000047;
`
const StyledParentModal = styled.View`
    background-color: ${UIColors.white};
`
//---------------------------------------- Picker Item creator to use with filters options -----------------------------------------------
createPickerItem = filtersType => filtersType.map((element, key) => <Picker.Item label={element} value={key} key={key} />)
//---------------------------------------- MAIN -----------------------------------------------
export default function ({ filters }) {
    console.log("MODAL WITH HOOKS PROPS")
    console.log({ filters })

    const [modalVisible, setModalVisible] = useState(false)
    const [language, setLanguage] = useState('css')
    const [offer, setOffer] = useState('css')
    const [city, setCity] = useState('css')

    //-----------------------------MODAL HEADER-----------------------------------
    const modalHeader = (
        <View>
            <StyledHeaderTitle>Filters</StyledHeaderTitle>
            <StyledDivider />
        </View>
    )
    //-----------------------------MODAL BODY-----------------------------------
    const modalBody = (
        <StyledModalBody>
            <Input
                placeholder='Property reference...'
                errorStyle={{ color: 'red' }}
                errorMessage=''
                containerStyle={{ marginBottom: 40 }}
                leftIcon={
                    <Icon
                        name='home'
                        size={24}
                        color='black'
                    />
                }
            />

            <StyledPicker
                itemStyle={{ color: "red" }}
                itemTextStyle={{ textAlign: "center", fontSize: 20 }}
                selectedValue={language}
                onValueChange={itemValue => setLanguage(itemValue)}>
                <Picker.Item label="Select your type..." value="" />
                {filters.homeType.length && this.createPickerItem(filters.homeType)}
            </StyledPicker>

            <StyledPicker
                selectedValue={offer}
                onValueChange={itemValue => setOffer(itemValue)}>
                <Picker.Item label="Select yout offer" value="" />
                {filters.operationType.length && this.createPickerItem(filters.operationType)}
            </StyledPicker>

            <StyledPicker
                selectedValue={city}
                onValueChange={itemValue => setCity(itemValue)}>
                {filters.city.length && this.createPickerItem(filters.city)}
            </StyledPicker>

            <StyledBodyView2>
                <StyledParentText>
                    <StyledBodyText>Room min.</StyledBodyText>
                    <StyledBodyText>Room max.</StyledBodyText>
                </StyledParentText>
                <StyledParentText>
                    <StyledBodyText>Price min.</StyledBodyText>
                    <StyledBodyText>Price max.</StyledBodyText>
                </StyledParentText>
            </StyledBodyView2>
        </StyledModalBody>
    )
    //-----------------------------MODAL FOOTER-----------------------------------
    const modalFooter = (
        <View>
            <StyledDivider />
            <StyledContainerButtons>
                <StyledFooterButtons isClose={false}>
                    <StyledButtonText>Accept</StyledButtonText>
                </StyledFooterButtons>
                <StyledFooterButtons isClose={true}
                    onPress={() => {
                        setModalVisible(!modalVisible);
                    }}>
                    <StyledButtonText>Close</StyledButtonText>
                </StyledFooterButtons>
            </StyledContainerButtons>
        </View>
    )
    //-----------------------------MODAL CONTAINER-----------------------------------
    const modalContainer = (
        <StyledModalContainer>
            {modalHeader}
            {modalBody}
            {modalFooter}
        </StyledModalContainer>
    )
    //-----------------------------MODAL-----------------------------------
    const modal = (
        <Modal
            transparent={false}
            animationIn='slideInDown'
            backdropColor={'#00000047'}
            backdropOpacity={0.25}
            animationInTiming={1000}
            backdropTransitionInTiming={1000}
            animationOutTiming={1000}
            backdropTransitionOutTiming={1000}
            style={{ margin: 0 }}
            isVisible={modalVisible}
            onRequestClose={() => {
                Alert.alert('Modal has been closed.');
            }}>
            <StyledModal>
                <View>
                    {modalContainer}
                </View>
            </StyledModal>
        </Modal>
    )
    //----------------------------------------------------------------
    return (
        <>
            <TextInput openModal={() => setModalVisible(true)} />
            <StyledParentModal>
                {modal}
            </StyledParentModal>
        </>
    );

}