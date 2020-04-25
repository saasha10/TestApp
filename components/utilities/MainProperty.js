import React from 'react'
import { FlatList, SafeAreaView } from 'react-native'
import { Card, Text, Badge } from 'react-native-elements'
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5'
import styled from 'styled-components'
import { UIColors } from '../../constants/colors'
import Main from '../../utilitiesJS/Main'
import get from 'lodash/get'
import { screenWidth } from '../ModalWithHooks'

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
    font-size: 15px;
    text-transform: capitalize;
`

const WrapperFeature = styled.View`
    flex-direction: row;
    justify-content: space-around;
    margin: 1px;
`

const FeatureName = styled.Text`
    font-size: 18px;
    margin: 2%;
`

function Feature({ feature }) {
    const key = Object.keys(feature)
    const value = Object.values(feature)
    const showValue = typeof value[0] !== "boolean"

    return (
        <WrapperFeature>
            <FontAwesome5Icon name={main.parserNameToIcon(key[0])}
                type='font-awesome'
                size={20}
            />
            <FeatureName>{main.parserFeatureName(key[0])}</FeatureName>
            {showValue && <Badge value={value[0]} textStyle={{fontSize: 20, padding: 5}}/>}
        </WrapperFeature>
    )
}

export default function MainProperty({ property }) {
    const address = get(property, 'propertyAddress')
    const contact = get(property, '`propertyContact')
    const descriptions = get(property, 'propertyDescriptions')
    const featuresObj = get(property, 'propertyFeatures')
    let featuresArray = []
    Object.entries(featuresObj).forEach(([key, value]) => {
        const showFeature = key !== 'featuresAreaConstructed' && key !== 'featuresAreaPlot' && key !== 'featuresAreaUsable' &&
            key !== 'featuresEnergyCertificateRating' && key !== 'featuresConservation' && key !== 'featuresTypeflat' && key !== 'featuresType' 
            && key !== 'featuresBuiltYear' && key !== 'featuresConditionedAirType' && key !== 'featuresHeatingType'
        if (showFeature) featuresArray.push({ [key]: value })
    })

    const featuresType = get(featuresObj, 'featuresType')
    const images = get(property, 'propertyImages')
    const operation = get(property, 'propertyOperation')
    const price = get(operation, 'operationPrice')
    const city = get(address, 'addressTown')


    return (
        <StyledScrollView>
            <Card
                image={{ uri: images[0].imageUrl }}
                imageStyle={{ height: 300 }}
                containerStyle={{ margin: 0 }}
            >
                <TypeHouse h3>{featuresType}</TypeHouse>
                <PriceAndTown>
                    <TextPriceAndTown>{(price).toLocaleString('de-DE')} €</TextPriceAndTown>
                    <TextPriceAndTown>{city}</TextPriceAndTown>
                </PriceAndTown>
            </Card>
            <Card style={{ marginTop: 1, width: screenWidth}}>
                <SafeAreaView style={{flex: 1}}>
                    <FlatList
                        data={featuresArray}
                        renderItem={({ item }) => <Feature feature={item} />}
                        numColumns={2}
                        columnWrapperStyle={{flex: 1, justifyContent: "space-around", alignItems: "center"}}
                        keyExtractor={(value, index) => index.toString()} />
                </SafeAreaView>
            </Card>
        </StyledScrollView>
    )
}
