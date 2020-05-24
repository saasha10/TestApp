import React from 'react'
import { View } from 'react-native'
import { AndroidFonts, IOSFonts } from './utilities/FontsTypes'

export default () => (
    <View style={{ flex: 1 }}>
        <AndroidFonts />
        <IOSFonts />
    </View>
)