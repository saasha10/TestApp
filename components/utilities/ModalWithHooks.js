import React, { useState } from 'react'
import styled from 'styled-components'
import { View, Modal } from 'react-native'
import { UIColors } from '../../constants/colors'
import TextInput from '../TextSearch'
//-----------------------------Styled MODAL HEADER-----------------------------------
const StyledHeaderTitle = styled.Text`
    font-weight: bold;
    font-size: 25px;
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
const StyledBodyText = styled.Text`
    text-align: center;
`
//-----------------------------Styled MODAL FOOTER-----------------------------------
const StyledContainerButtons = styled.View`
    flexDirection: row-reverse; 
    margin: 10px;
`
const StyledFooterButtons = styled.TouchableOpacity`
    borderRadius: 5px;
    marginHorizontal: 10px;
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
    flex: 6;
    background-color: ${UIColors.grayAlmostWhite};
    borderRadius: 5px;
`
//-----------------------------Styled MODAL-----------------------------------
const StyledModal = styled.View`
    background-color: ${UIColors.greyStrong1};
    align-items: center;
`
const StyledContainerModal = styled.View`
    background-color: ${UIColors.white};
`
//---------------------------------------------------------------------------------------
export default function () {
    const [modalVisible, setModalVisible] = useState(false)
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
            <StyledBodyText>Working in progress!</StyledBodyText>
        </StyledModalBody>
    )
    //-----------------------------MODAL FOOTER-----------------------------------
    const modalFooter = (
        <View>
            <StyledDivider />
            <StyledContainerButtons>
                <StyledFooterButtons isClose={true}
                    onPress={() => {
                        setModalVisible(!modalVisible);
                    }}>
                    <StyledButtonText>Close</StyledButtonText>
                </StyledFooterButtons>
                <StyledFooterButtons isClose={false}>
                    <StyledButtonText>Accept</StyledButtonText>
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
            transparent={true}
            animationType='slide'
            visible={modalVisible}
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
            <StyledContainerModal>
                {modal}
            </StyledContainerModal>
        </>
    );

}