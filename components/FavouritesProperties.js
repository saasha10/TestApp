import React, { Component } from 'react'
import { ScrollView } from 'react-native'
import { Text } from 'react-native-elements'
import { StyledViewContainer } from './dataList'
import CardProperty from '../containers/CardProperty'
import { UIColors } from '../constants/colors'
import styled from 'styled-components'

const WrapperTitle = styled.View`
    align-items: center;
    justify-content: center;
    height: 50px;
    background-color: ${UIColors.blue};

`

const Title = styled.Text`
    margin: 5px;
    font-size: 24px;
    color: ${UIColors.white};
`

const NoPropertyText = styled(Text)`
    align-items: center;
    justify-content: center;
    font-size: 24px;
`

class FavouriteProperties extends Component {
    render() {
        const { favouriteProperties } = this.props

        return (
            <>
                <WrapperTitle>
                    <Title>My properties</Title>
                </WrapperTitle>
                <ScrollView>
                    <StyledViewContainer>
                        {favouriteProperties.length ? favouriteProperties.map((property, key) => <CardProperty key={key} property={property} />)
                            : <NoPropertyText h6>You don't have favourite properties added</NoPropertyText>}
                    </StyledViewContainer>
                </ScrollView>
            </>
        )
    }
}

export default FavouriteProperties