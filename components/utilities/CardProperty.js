import React from 'react'
import { Card, Button } from 'react-native-elements'
import styled from 'styled-components'

const StyledText = styled.Text`
    font-size: 18px;
    color: red;
`

const StyledImage = styled.Image`
    height: 200px;
    width: 100%;
`

const StyledButtonContainer = styled.View`
    flex-direction: row;
    justify-content: space-between;
    margin: 10px 0;
`

export default ({ properties }) => (
    <Card>
        <StyledImage source={{ uri: properties.propertyImages[0].imageUrl }} />
        <StyledButtonContainer>
            <Button title="Contact" />
            <Button title="Call" />
        </StyledButtonContainer>
        <StyledText>{properties.propertyOperation.operationType}</StyledText>
    </Card>
)