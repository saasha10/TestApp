import React, { Component } from 'react'
import { View } from 'react-native'
import { Text } from 'react-native-elements'

export default class FavouriteProperties extends Component {


    render() {

        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text h2 >Favourite Properties</Text>
            </View>
        )
    }
}