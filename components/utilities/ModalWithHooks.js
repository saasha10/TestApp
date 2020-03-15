import React, { useState } from 'react'
import styled from 'styled-components'
import { View, Dimensions } from 'react-native'
import Modal from 'react-native-modal'
import { UIColors } from '../../constants/colors'
import TextInput from '../TextSearch'
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
const StyledBodyText = styled.Text`
    text-align: center;
`
//-----------------------------Styled MODAL FOOTER-----------------------------------
const StyledContainerButtons = styled.View`
    flexDirection: row;
    justify-content: space-between;
    margin: 10px;
`
const StyledFooterButtons = styled.TouchableOpacity`
    borderRadius: 5px;
    margin: 10px;
    marginHorizontal: 10px; 
    paddingVertical: 5px;
    paddingHorizontal: 10px;
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
            <StyledBodyText>Work in progress!</StyledBodyText>
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
            animationIn={!modalVisible ? 'slideInUp' : 'slideInDown'}
            backdropColor={'#00000047'}
            backdropOpacity={0.25}
            animationInTiming={10000}
            backdropTransitionInTiming={2000}
            animationOutTiming={1000}
            backdropTransitionOutTiming={10000}
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