import React from 'react'
import { View } from 'react-native'
import { Card } from 'react-native-elements'
import Icon from 'react-native-vector-icons/FontAwesome'
import styled from 'styled-components/native'
import { STACK_NAMES } from '../../constants/navigation'
import { UIColors } from '../../constants/colors'
import get from 'lodash/get'
import includes from 'lodash/includes'

const StyledViewTitles = styled.View`
    flex: 1;
`

const StyledTextTitle = styled.Text`
    font-size: 17px;
    font-weight: bold;
    text-transform: capitalize;
    margin: 1%;
`

const StyleViewSubtitle = styled.View`
    flex-direction: row;
    justify-content: space-between;
`

const PriceAndTitle = styled.View`
    flex-direction: row;
    margin: 1%;
`

const StyledTextTitle2 = styled.Text`
    font-size: 15px;
    text-transform: capitalize;
`

const WrapperIcon = styled.View`
    flex-direction: row;
    justify-content: center;
    margin-top: 4px;
`

const StyledImage = styled.Image`
    height: 180px;
    width: 100%;
`

const WrapperElements = styled.View`
    flex-direction: row-reverse;
    justify-content: space-between;
    margin: 5px 0;
`

const StyledButtonShow = styled.Button`
    margin: 3px;
    border-radius: 15px;
    font-weight: bold;
    font-size: 24px;  
    box-shadow: 5px 10px ${UIColors.grayAlmostWhite};
`

const { MAIN_PROPERTY } = STACK_NAMES

export default ({ property, isFavouriteProperty, addFavouriteProperty, removeFavouriteProperty, propertySelected, navigate, message }) => {
    const operationType = get(property, 'propertyOperation.operationType')
    const featuresType = get(property, 'propertyFeatures.featuresType')
    const operationPrice = get(property, 'propertyOperation.operationPrice').toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
    const addressTown = get(property, 'propertyAddress.addressTown')
    const iconName = isFavouriteProperty ? "heart" : "heart-o"
    const iconColor = isFavouriteProperty ? UIColors.red : UIColors.black

    return (
        <Card
            image={{ uri: property.propertyImages[0].imageUrl }}
            imageStyle={{ width: 100, height: 220 }}
            imageProps={{resizeMode: "cover", resizeMethod: "resize"}}
        >
            {/* <StyledImage source={{ uri: property.propertyImages[0].imageUrl }} /> */}
            <WrapperElements>
                <View style={{ justifyContent: "space-between" }}>
                    <StyledButtonShow
                        title={message.View}
                        onPress={() => {
                            navigate(MAIN_PROPERTY)
                            propertySelected(property)
                        }
                        }
                    />
                    <WrapperIcon>
                        <Icon
                            resied
                            name={iconName}
                            size={25}
                            color={iconColor}
                            onPress={() => isFavouriteProperty ? removeFavouriteProperty(property) : addFavouriteProperty(property)}
                        />
                    </WrapperIcon>
                </View>
                <StyledViewTitles>
                    <StyledTextTitle>{message[operationType]}</StyledTextTitle>
                    <StyledTextTitle>{message[featuresType]}</StyledTextTitle>
                    <StyleViewSubtitle>
                        {/* <StyledTextTitle2>{new Intl.NumberFormat("de-DE").format(parseInt(property.propertyOperation.operationPrice))} €</StyledTextTitle2> */}
                        <PriceAndTitle>
                            <StyledTextTitle2>{operationPrice} €</StyledTextTitle2>
                            <StyledTextTitle2> | {addressTown}</StyledTextTitle2>
                        </PriceAndTitle>

                    </StyleViewSubtitle>
                </StyledViewTitles>
            </WrapperElements>
        </Card>
    )
}