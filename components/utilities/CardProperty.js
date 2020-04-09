import React from 'react'
import { TouchableNativeFeedback } from 'react-native'
import { Card } from 'react-native-elements'
import styled from 'styled-components/native'
import { UIColors } from '../../constants/colors'
import get from 'lodash/get'

const StyledViewTitles = styled.View`
    flex: 1;
`

const StyledTextTitle = styled.Text`
    font-size: 15px;
    font-weight: bold;
    text-transform: capitalize;
`

const StyleViewSubtitle = styled.View`
    flex-direction: row;
`

const StyledTextTitle2 = styled.Text`
    font-size: 12px;
    text-transform: capitalize;
`

const StyledImage = styled.Image`
    height: 180px;
    width: 100%;
`

const StyledButtonContainer = styled.View`
    flex-direction: row-reverse;
    justify-content: space-between;
    align-items: flex-start;
    margin: 10px 0;
    margin-bottom: 20px;
`

const StyledButtonShow = styled.Button`
    margin: 5px;
    background: ${UIColors.green};
    border-radius: 15px;
    font-weight: bold !important;
    font-size: 24px;  
    box-shadow: 5px 10px ${UIColors.grayAlmostWhite};
`

export default ({ properties }) => {
    const operationType = get(properties, 'propertyOperation.operationType')
    const featuresType = get(properties, 'propertyFeatures.featuresType')
    const operationPrice = get(properties, 'propertyOperation.operationPrice').toLocaleString('de-DE')
    const addressTown = get(properties, 'propertyAddress.addressTown')
    return (
        <Card>
            <StyledImage source={{ uri: properties.propertyImages[0].imageUrl }} />
            <StyledButtonContainer>
                <StyledButtonShow title="View" />
                <StyledViewTitles>
                    <StyledTextTitle>{operationType}</StyledTextTitle>
                    <StyledTextTitle>{featuresType}</StyledTextTitle>
                    <StyleViewSubtitle>
                        {/* <StyledTextTitle2>{new Intl.NumberFormat("de-DE").format(parseInt(properties.propertyOperation.operationPrice))} €</StyledTextTitle2> */}
                        <StyledTextTitle2>{operationPrice} €</StyledTextTitle2>
                        <StyledTextTitle2> | {addressTown}</StyledTextTitle2>
                    </StyleViewSubtitle>
                </StyledViewTitles>
            </StyledButtonContainer>
        </Card>
    )
}