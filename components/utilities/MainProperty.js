import React from 'react'
import { FlatList, View } from 'react-native'
import { Card, Text, Badge, Divider } from 'react-native-elements'
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5'
import styled from 'styled-components'
import { UIColors } from '../../constants/colors'
import Main from '../../utilitiesJS/Main'
import { screenWidth } from '../ModalWithHooks'
import PanelCollapsible from './PanelCollapsible'
import get from 'lodash/get'

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
    font-size: 15px;
    text-transform: capitalize;
`

const FeatureName = styled.Text`
    font-size: 18px;
    margin: 2%;
    color: ${UIColors.greyStrong2};
`

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

function Feature({ feature }) {
    const key = Object.keys(feature)
    const value = Object.values(feature)
    const showValue = typeof value[0] !== "boolean"

    if (feature.empty) {
        return <View style={{ backgroundColor: 'transparent' }} />
    }

    return (
        <>
            <FontAwesome5Icon name={main.parserNameToIcon(key[0])}
                type='font-awesome'
                size={20}
            />
            <FeatureName>{main.parserFeatureName(key[0])}</FeatureName>
            {showValue && <Badge value={value[0]} textStyle={{ fontSize: 20, padding: 5 }} />}
        </>
    )
}

export default function MainProperty({ property }) {
    const address = get(property, 'propertyAddress')
    const contact = get(property, '`propertyContact')
    const descriptions = get(property, 'propertyDescriptions')
    const featuresObj = get(property, 'propertyFeatures')
    const featuresArray = createFeaturesArray(featuresObj)
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
                <Divider style={{ backgroundColor: UIColors.lightGray, paddingBottom: 4 }} />
                <FlatList
                    data={formatData(featuresArray, numColumns)}
                    renderItem={({ item }) => <Feature feature={item} />}
                    numColumns={numColumns}
                    columnWrapperStyle={{ flex: 1, alignItems: "center", alignContent: "center" }}
                    keyExtractor={(value, index) => index.toString()} />
                <PanelCollapsible title="Description">
                    <Text>{descriptions[0].descriptionText}</Text>
                </PanelCollapsible>
        </StyledScrollView>
    )
}
