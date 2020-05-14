import React, { useState } from 'react'
import styled from 'styled-components'
import { View, Dimensions, Picker, ScrollView } from 'react-native'
import { Text, Input } from 'react-native-elements'
import MultiSlider from '@ptomasroos/react-native-multi-slider'
import Icon from 'react-native-vector-icons/FontAwesome'
import Modal from 'react-native-modal'
import { UIColors } from '../constants/colors'
import TextInput from './TextSearch'
import get from 'lodash/get'

//----------------------------- Dimesions -----------------------------------
export const screenWidth = Math.round(Dimensions.get('window').width)
export const screenHeight = Math.round(Dimensions.get('window').height)
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
    flex: 1;
    background-color: ${UIColors.white};
    padding: 10px;
`

const StyledBodyView2 = styled.View`
    flex: 1;
`

const StyledPicker = styled.Picker`
    marginBottom: ${props => props.lastPicker ? '15px' : '10px'};
`

const StyledViewTextPrice = styled.View`
    flex-direction: row;
    justify-content: space-between;
`

const StyledParentText = styled.View`
    flex-direction: row;
    justify-content: center;
    margin: 5px;
`
const StyledBodyText = styled(Text)`
    text-align: center;
    marginVertical: 4px;
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
    background-color: ${props => props.isClose || UIColors.green};
`
const StyledButtonText = styled.Text`
    color: ${UIColors.white};
    font-weight: bold;
`
//----------------------------- Styled MODAL CONTAINER-----------------------------------
const StyledModalContainer = styled.View`
    width:${screenWidth}px;
    height:${screenHeight}px;
    background-color: ${UIColors.white};
    borderRadius: 5px;
    padding: 10px;
`
//-----------------------------Styled MODAL-----------------------------------
const StyledModal = styled.View`
    background-color: ${UIColors.greyStrong2};
    max-width:${screenWidth}px;
    height:${screenHeight}px;
    justifyContent: space-around;
    color: #00000047;
`
const StyledParentModal = styled.View`
    background-color: ${UIColors.white};
`
//---------------------------------------- Picker Item creator to use with filters options -----------------------------------------------
createPickerItem = (filtersType, message) => filtersType.map((element, key) => {
    const labelValue = message ? message[element] : element
    return <Picker.Item label={labelValue} value={element} key={key} />
})
//---------------------------------------- MAIN -----------------------------------------------
export default function ({ filters, setFiltersSelected, message }) {
    const [modalVisible, setModalVisible] = useState(false)
    const [homeType, setHomeType] = useState('')
    const [offer, setOffer] = useState('')
    const [city, setCity] = useState('')
    const [bedRoomNum, setBedRoomNum] = useState({
        min: 1,
        max: 5
    })

    const isSale = offer === 'sale'
    const priceRentMin = get(filters, 'operationPrice.priceRent.min')
    const priceRentMax = get(filters, 'operationPrice.priceRent.max')
    const priceSaleMin = get(filters, 'operationPrice.priceSale.min')
    const priceSaleMax = get(filters, 'operationPrice.priceSale.max')
    const [priceRent, setPriceRent] = useState({
        min: priceRentMin,
        max: priceRentMax
    })
    const [priceSale, setPriceSale] = useState({
        min: priceSaleMin,
        max: priceSaleMax
    })
    const stepPrice = !isSale ? 100 : 10000
    const price = isSale ? priceSale : priceRent
    //-----------------------------HOOKS UTILITIES-----------------------------------
    const updateBedRoomNum = value => {
        setBedRoomNum({
            ...bedRoomNum,
            min: value[0],
            max: value[1]
        })
    }
    const updatePrice = value => {
        if (isSale) {
            setPriceSale({
                ...priceSale,
                min: value[0],
                max: value[1]
            })
        } else {
            setPriceRent({
                ...priceRent,
                min: value[0],
                max: value[1]
            })
        }

    }
    const handleFiltersSelected = () => {
        const bedRoomNumMin = get(bedRoomNum, 'min')
        const bedRoomNumMax = get(bedRoomNum, 'max')
        const priceMin = get(price, 'min')
        const priceMax = get(price, 'max')
        filtersSelected = {
            homeType: homeType,
            operationType: offer,
            city: city,
            featuresBedRoomNumber: {
                min: bedRoomNumMin,
                max: bedRoomNumMax
            },
            operationPrice: {
                min: priceMin,
                max: priceMax
            }
        }
        setFiltersSelected(filtersSelected)
        setModalVisible(false)
    }
    //-----------------------------MODAL HEADER-----------------------------------
    const modalHeader = (
        <View>
            <StyledHeaderTitle>{message.Filters}</StyledHeaderTitle>
            <StyledDivider />
        </View>
    )
    //-----------------------------MODAL BODY-----------------------------------
    const modalBody = (
        <StyledModalBody>
            <Input
                placeholder={message['Type property reference...']}
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
                lastPicker={false}
                itemStyle={{ color: "red" }}
                itemTextStyle={{ textAlign: "center", fontSize: 20 }}
                selectedValue={homeType}
                onValueChange={itemValue => setHomeType(itemValue)}>
                <Picker.Item label={message["Select your type"]} value="" />
                {filters.homeType.length && createPickerItem(filters.homeType, message)}
            </StyledPicker>

            <StyledPicker
                lastPicker={false}
                selectedValue={offer}
                onValueChange={itemValue => setOffer(itemValue)}>
                <Picker.Item label={message["Select your offer"]} value="" />
                {filters.operationType.length && createPickerItem(filters.operationType, message)}
            </StyledPicker>

            <StyledPicker
                lastPicker={true}
                selectedValue={city}
                onValueChange={itemValue => setCity(itemValue)}>
                <Picker.Item label={message["Select your city"]} value="" />
                {filters.city.length && createPickerItem(filters.city)}
            </StyledPicker>

            <StyledBodyView2>
                <StyledBodyText h6>{message["Number bedroom"]}</StyledBodyText>
                <StyledParentText>
                    <Text>{bedRoomNum.min}</Text>
                    <MultiSlider
                        trackStyle={{ backgroundColor: '#bdc3c7' }}
                        selectedStyle={{ backgroundColor: "#5e5e5e" }}
                        values={[bedRoomNum.min, bedRoomNum.max]}
                        sliderLength={screenWidth - 120}
                        onValuesChange={updateBedRoomNum}
                        min={filters.featuresBedRoomNumber.min}
                        max={filters.featuresBedRoomNumber.max}
                        step={1}
                        allowOverlap={false}
                        snapped={true}
                    />
                    <Text>{bedRoomNum.max}</Text>
                </StyledParentText>
                <StyledBodyText h6>{message.Price}</StyledBodyText>
                <StyledViewTextPrice >
                    <Text style={{ marginLeft: 3 }}>{price.min.toLocaleString('de-DE')} €</Text>
                    <Text style={{ marginRight: 3 }}>{price.max.toLocaleString('de-DE')} €</Text>
                </StyledViewTextPrice>
                <StyledParentText>
                    <MultiSlider
                        trackStyle={{ backgroundColor: '#c00' }}
                        selectedStyle={{ backgroundColor: "#00cc5b" }}
                        values={[price.min, price.max]}
                        sliderLength={screenWidth - 120}
                        onValuesChange={updatePrice}
                        min={!isSale ? filters.operationPrice.priceRent.min : filters.operationPrice.priceSale.min}
                        max={!isSale ? filters.operationPrice.priceRent.max : filters.operationPrice.priceSale.max}
                        step={stepPrice}
                        allowOverlap={false}
                        snapped={true}
                    />
                </StyledParentText>
            </StyledBodyView2>
        </StyledModalBody>
    )
    //-----------------------------MODAL FOOTER-----------------------------------
    const modalFooter = (
        <View>
            <StyledDivider />
            <StyledContainerButtons>
                <StyledFooterButtons isClose={UIColors.red}
                    onPress={() => setModalVisible(!modalVisible)}>
                    <StyledButtonText>{message.Close}</StyledButtonText>
                </StyledFooterButtons>
                <StyledFooterButtons>
                    <StyledButtonText onPress={handleFiltersSelected}>{message.Accept}</StyledButtonText>
                </StyledFooterButtons>
            </StyledContainerButtons>
        </View>
    )
    //-----------------------------MODAL CONTAINER-----------------------------------
    const modalContainer = (
        <StyledModalContainer>
            {modalHeader}
            <ScrollView>
                {modalBody}
            </ScrollView>
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
        >
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
    )

}