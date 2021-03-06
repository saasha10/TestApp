import React from 'react'
import { Platform, Linking, FlatList, View } from 'react-native'
import { Card, Text, Badge, Divider, Button } from 'react-native-elements'
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5'
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome'
import styled from 'styled-components/native'
import get from 'lodash/get'
import filter from 'lodash/filter'
import MapView, { PROVIDER_GOOGLE, Circle } from 'react-native-maps'
import { STACK_NAMES } from '../../constants/navigation'
import { UIColors } from '../../constants/colors'
import Main from '../../utilitiesJS/Main'
import { screenWidth, screenHeight } from '../ModalWithHooks'
import PanelCollapsible from './PanelCollapsible'

const { BOOK_VISIT } = STACK_NAMES

const heightMap = Math.floor(screenHeight / 2)

const numColumns = 2

const main = new Main()

const StyledScrollView = styled.ScrollView`
  background-color: ${UIColors.grayAlmostWhite};
`

const TypeHouse = styled(Text)`
    text-transform: capitalize;
`

const PriceAndTown = styled.View`
    flex-direction: row;
    justify-content: space-between;
    margin: 1%;
`

const TextPriceAndTown = styled.Text`
    font-size: 17px;
    text-transform: capitalize;
`

const StyledDetailsWrapper = styled.View`
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    align-content: flex-start;
    flex: 1;
    border-bottom-width: 1px;
    borderColor: ${UIColors.lightGray};
`

const FeatureName = styled.Text`
    font-size: 18px;
    margin: 2%;
    color: ${UIColors.greyStrong2};
`

const StyledMapWrapper = styled.View`
    height: ${heightMap};
    width: ${screenWidth};
    align-items: center;
`

const StyledMapView = styled(MapView)`
    height: ${heightMap};
    width: ${screenWidth};
`

makeCall = phone => {
    let phoneNumber = `telprompt:${phone}`

    if (Platform.OS === 'android') {
        phoneNumber = `tel:${phone}`
    }
    Linking.openURL(phoneNumber)
}

createFeaturesArray = features => {
    let result = []

    Object.entries(features).forEach(([key, value]) => {
        const showFeature = key !== 'featuresAreaConstructed' && key !== 'featuresAreaPlot' && key !== 'featuresAreaUsable' &&
            key !== 'featuresEnergyCertificateRating' && key !== 'featuresConservation' && key !== 'featuresTypeflat' && key !== 'featuresType'
            && key !== 'featuresBuiltYear' && key !== 'featuresConditionedAirType' && key !== 'featuresHeatingType'
        if (showFeature) result.push({ [key]: value })
    })

    return result
}

formatData = (dataList, numColumns) => {
    const totalRows = Math.floor(dataList.length / numColumns)
    let totalLastRow = dataList.length - (totalRows * numColumns)

    while (totalLastRow !== 0 && totalLastRow !== numColumns) {
        dataList.push({ key: 'blank', empty: true })
        totalLastRow++
    }
    return dataList
}

function Feature({ feature, message }) {
    const key = Object.keys(feature)
    const value = Object.values(feature)
    const showValue = typeof value[0] !== "boolean"

    if (feature.empty) {
        return <StyledDetailsWrapper style={{ backgroundColor: 'transparent' }} />
    }

    return (
        <StyledDetailsWrapper>
            <FontAwesome5Icon name={main.parserNameToIcon(key[0])}
                size={20}
            />
            <FeatureName>{message[main.parserFeatureName(key[0])]}</FeatureName>
            <View>{showValue && <Badge value={value[0]} status="primary" />}</View>
        </StyledDetailsWrapper>
    )
}

export default function MainProperty({ property, navigate, locale, message }) {
    const address = get(property, 'propertyAddress')
    const latLng = {
        latitude: get(address, 'addressCoordinatesLatitude'),
        longitude: get(address, 'addressCoordinatesLongitude'),
        latitudeDelta: 0.015,
        longitudeDelta: 0.0121,
    }
    const contact = get(property, 'propertyContact')
    const phoneNumber = get(contact, 'contactPrimaryPhoneNumber')
    const descriptions = get(property, 'propertyDescriptions')
    const language = main.parserLocaleToLanguage(locale.substring(0, 2))
    const descriptionValue = filter(descriptions, ['descriptionLanguage', language])
    const featuresObj = get(property, 'propertyFeatures')
    const featuresArray = createFeaturesArray(featuresObj)
    const featuresType = get(featuresObj, 'featuresType')
    const images = get(property, 'propertyImages')
    const operation = get(property, 'propertyOperation')
    const price = get(operation, 'operationPrice').toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
    const city = get(address, 'addressTown')


    return (
        <>
            <StyledScrollView>
                <Card
                    image={{ uri: images[0].imageUrl }}
                    imageStyle={{ height: 300 }}
                    containerStyle={{ margin: 0 }}
                >
                    <TypeHouse h3>{message[featuresType]}</TypeHouse>
                    <PriceAndTown>
                        <TextPriceAndTown>{price} €</TextPriceAndTown>
                        <TextPriceAndTown>{city}</TextPriceAndTown>
                    </PriceAndTown>
                </Card>
                <Divider style={{ backgroundColor: UIColors.lightGray, paddingBottom: 4 }} />
                <FlatList
                    data={formatData(featuresArray, numColumns)}
                    style={{ flex: 1 }}
                    renderItem={({ item }) => <Feature feature={item} message={message}/>}
                    numColumns={numColumns}
                    keyExtractor={(value, index) => index.toString()} />
                <PanelCollapsible title={message.Description}>
                    <Text>{descriptionValue.length > 0 ? descriptionValue[0].descriptionText : descriptions[0].descriptionText}</Text>
                </PanelCollapsible>
                <StyledMapWrapper>
                    <StyledMapView
                        provider={PROVIDER_GOOGLE} // remove if not using Google Maps
                        region={latLng}
                    >
                        <Circle
                            center={latLng}
                            radius={200}
                            strokeColor='#f9fafb'
                            fillColor='rgba(183, 183, 183, 0.5)' />
                    </StyledMapView>
                </StyledMapWrapper>
            </StyledScrollView>
            <Button
                icon={
                    <FontAwesomeIcon
                        name="phone"
                        size={25}
                        color="white"
                    />
                }
                onPress={() => makeCall(phoneNumber)}
                buttonStyle={{ borderRadius: 25, backgroundColor: 'green' }}
                containerStyle={{ position: "absolute", bottom: 10, right: 100 }}
            />
            <Button
                icon={
                    <FontAwesome5Icon
                        name="calendar-check"
                        size={25}
                        color="white"
                    />
                }
                iconRight
                title={message.Visit}
                onPress={() => navigate(BOOK_VISIT)}
                buttonStyle={{ borderRadius: 25, backgroundColor: UIColors.blue }}
                titleStyle={{ fontSize: 18, paddingRight: 4 }}
                containerStyle={{ position: "absolute", bottom: 10, right: 10 }}
            />
        </>
    )
}
