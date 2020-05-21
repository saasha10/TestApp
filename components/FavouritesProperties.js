import React, { Component } from 'react'
import { ScrollView, Image } from 'react-native'
import { Text } from 'react-native-elements'
import { StyledViewContainer } from './dataList'
import CardProperty from '../containers/CardProperty'
import { UIColors } from '../constants/colors'
import styled from 'styled-components/native'

export const WrapperTitle = styled.View`
    align-items: center;
    justify-content: center;
    height: 50px;
    background-color: ${UIColors.blue};
`

export const Title = styled.Text`
    margin: 5px;
    font-size: 24px;
    color: ${UIColors.white};
`

const WrapperNoProperty = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
    background-color: ${UIColors.white};
`

const NoPropertyText = styled(Text)`
    align-items: center;
    justify-content: center;
    font-size: 18px;
    font-family: serif;
`

class FavouriteProperties extends Component {
    render() {
        const { favouriteProperties, message } = this.props

        return (
            <>
                <WrapperTitle>
                    <Title>{message['My properties']}</Title>
                </WrapperTitle>
                {favouriteProperties.length ?
                    <ScrollView>
                        <StyledViewContainer>
                            {favouriteProperties.map((property, key) => <CardProperty key={key} property={property} />)}
                        </StyledViewContainer>
                    </ScrollView>
                    :
                    <WrapperNoProperty>
                        <Image source={require('../img/LogoHomeBusinessLife.png')}
                            style={{ width: 250, height: 250 }}
                            resizeMethod='resize'
                            resizeMode='center'
                        />
                        <NoPropertyText>{message['Any property added']}</NoPropertyText>
                    </WrapperNoProperty>
                }
            </>
        )
    }
}

export default FavouriteProperties