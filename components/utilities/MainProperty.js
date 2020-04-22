import React from 'react'
import { View } from 'react-native'
import { Card, Text, Icon } from 'react-native-elements'
import IconFontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import styled from 'styled-components'
import { UIColors } from '../../constants/colors'
import get from 'lodash/get'
import map from 'lodash/map'



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

createFeature = features => map(features, (el, key) => {
    console.log({ key, el })
    const showFeature = key !== 'featuresAreaConstructed' && key !== 'featuresAreaPlot' && key !== 'featuresAreaUsable' && key !== 'featuresEnergyCertificateRating' && key !== 'featuresConservation'
    if (showFeature) {
        if (typeof el !== "boolean") {
            return (
                <React.Fragment key={key}>
                    <Icon name='bath'
                        type='font-awesome'
                        size={20}
                        color='blue'
                    />
                    <Text>{key}</Text>
                    <Text>{el}</Text>
                </React.Fragment>
            )
        }
        return (
            <React.Fragment key={key}>
                <Icon name='bath'
                    type='font-awesome'
                    size={20}
                    color='blue'
                />
                <Text>{key}</Text>
            </React.Fragment>
        )
    }
})

export default function MainProperty({ property }) {
    const address = get(property, 'propertyAddress')
    const contact = get(property, '`propertyContact')
    const descriptions = get(property, 'propertyDescriptions')
    const features = get(property, 'propertyFeatures')
    const featuresType = get(features, 'featuresType')
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
            <Card style={{ marginTop: 1, marginHorizontal: 0 }}>
                <View style={{ justifyContent: "space-between" }}>
                    <StyledScrollView>
                        {this.createFeature(features)}
                    </StyledScrollView>
                </View>
                {/* <View>
                    <Icon
                        name='bath'
                        type='font-awesome'
                        size={20}
                        color='blue'
                    />
                    <Icon
                        name='bed'
                        type='font-awesome'
                        size={20}
                        color='red'
                    />
                    <Icon
                        name='check'
                        type='font-awesome'
                        size={20}
                        color='grey'
                    />
                    <Icon
                        name='tree'
                        type='font-awesome'
                        size={20}
                        color='green'
                    />
                    <IconFontAwesome5
                        name='parking'
                        size={20}
                        color='black'
                    />
                    <IconFontAwesome5
                        name='swimmer'
                        size={20}
                        color='blue'
                    />
                    <IconFontAwesome5
                        name='warehouse'
                        size={20}
                        color='black'
                    />
                </View> */}
            </Card>
        </StyledScrollView>
    )
}