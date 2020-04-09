import React, { useState } from 'react'
import styled from 'styled-components'
import { View, Dimensions, Picker } from 'react-native'
import { Text, Input } from 'react-native-elements'
import MultiSlider from '@ptomasroos/react-native-multi-slider'
import Icon from 'react-native-vector-icons/FontAwesome'
import Modal from 'react-native-modal'
import { UIColors } from '../../constants/colors'
import TextInput from '../TextSearch'
import get from 'lodash/get'
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
    marginBottom: ${props => props.lastPicker ? '15px' : '10px'};
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
createPickerItem = filtersType => filtersType.map((element, key) => <Picker.Item label={element} value={element} key={key} />)
//---------------------------------------- MAIN -----------------------------------------------
export default function ({ filters, setFiltersSelected }) {
    // console.log("MODAL WITH HOOKS PROPS")
    // console.log({ filters })
    // console.log("setFiltersSelected", setFiltersSelected)

    const [modalVisible, setModalVisible] = useState(false)
    const [homeType, setHomeType] = useState('')
    const [offer, setOffer] = useState('')
    const [city, setCity] = useState('')
    const [bedRoomNum, setBedRoomNum] = useState({
        min: 1,
        max: 5
    })
    const priceMin = get(filters, 'operationPrice.priceRent.min')

    const [price, setPrice] = useState({
        min: priceMin,
        max: 5000
    })

    //-----------------------------HOOKS UTILITIES-----------------------------------
    const updateBedRoomNum = value => {
        setBedRoomNum({
            ...bedRoomNum,
            min: value[0],
            max: value[1]
        })
    }
    const updatePrice = value => {
        setPrice({
            ...price,
            min: value[0],
            max: value[1]
        })
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
            <StyledHeaderTitle>Filters</StyledHeaderTitle>
            <StyledDivider />
        </View>
    )
    //-----------------------------MODAL BODY-----------------------------------
    const modalBody = (
        <StyledModalBody>
            <Input
                placeholder='Type property reference...'
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
                <Picker.Item label="Select your type" value="" />
                {filters.homeType.length && this.createPickerItem(filters.homeType)}
            </StyledPicker>

            <StyledPicker
                lastPicker={false}
                selectedValue={offer}
                onValueChange={itemValue => setOffer(itemValue)}>
                <Picker.Item label="Select your offer" value="" />
                {filters.operationType.length && this.createPickerItem(filters.operationType)}
            </StyledPicker>

            <StyledPicker
                lastPicker={true}
                selectedValue={city}
                onValueChange={itemValue => setCity(itemValue)}>
                <Picker.Item label="Select your city" value="" />
                {filters.city.length && this.createPickerItem(filters.city)}
            </StyledPicker>

            <StyledBodyView2>
                <StyledBodyText h6>Number bedroom</StyledBodyText>
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
                <StyledBodyText h6>Price</StyledBodyText>
                <StyledParentText>
                    <Text>{price.min.toLocaleString('de-DE')} €</Text>
                    <MultiSlider
                        trackStyle={{ backgroundColor: '#c00' }}
                        selectedStyle={{ backgroundColor: "#00cc5b" }}
                        values={[price.min, price.max]}
                        sliderLength={screenWidth - 120}
                        onValuesChange={updatePrice}
                        min={offer === '' || offer === 'rent' ? filters.operationPrice.priceRent.min : filters.operationPrice.priceSale.min}
                        max={offer === '' || offer === 'rent' ? filters.operationPrice.priceRent.max : filters.operationPrice.priceSale.max}
                        step={50}
                        allowOverlap={false}
                        snapped={true}
                    />
                    <Text>{price.max.toLocaleString('de-DE')} €</Text>
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
                    <StyledButtonText onPress={handleFiltersSelected}>Accept</StyledButtonText>
                </StyledFooterButtons>
                <StyledFooterButtons isClose={true}
                    onPress={() => {
                        setModalVisible(!modalVisible)
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
    );

}