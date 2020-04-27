import React, { useState } from 'react'
import { StyleSheet, View, TouchableHighlight, Animated } from 'react-native'
import { Text, Icon } from 'react-native-elements'
import { UIColors } from '../../constants/colors'

export default function ({ title, children }) {
    const [expanded, setExpanded] = useState(true)
    const [minHeight, setMinHeight] = useState()
    const [maxHeight, setMaxHeight] = useState()
    const [animation, setAnimation] = useState(new Animated.Value(0))
    const iconName = expanded ? 'angle-double-down' : 'angle-double-up'

    toggle = () => {
        const initialValue = expanded ? maxHeight + minHeight : minHeight
        const finalValue = !expanded ? maxHeight + minHeight : minHeight
        
        setExpanded(!expanded)
        setAnimation(initialValue)

        Animated.spring(
            new Animated.Value(animation),
            {
                toValue: finalValue
            }
        ).start()
    }

    return (
        <Animated.View style={[styles.container, { height: isNaN(animation) ? minHeight : animation }]} >
            <View style={styles.titleContainer} onLayout={e => setMinHeight(e.nativeEvent.layout.height)}>
                <Text style={styles.title} h4>{title}</Text>
                <TouchableHighlight
                    onPress={toggle}
                    underlayColor="#f1f1f1">
                    <Icon
                        name={iconName}
                        type='font-awesome'
                        color={UIColors.blue}
                        containerStyle={{ padding: 5 }} />
                </TouchableHighlight>
            </View>

            <View style={styles.body} onLayout={e => setMaxHeight(e.nativeEvent.layout.height)}>
                {children}
            </View>

        </Animated.View>
    )
}

var styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        margin: 10,
        overflow: 'hidden'
    },
    titleContainer: {
        flexDirection: 'row'
    },
    title: {
        flex: 1,
        padding: 5,
        color: '#2a2f43',
        fontWeight: 'bold'
    },
    button: {

    },
    buttonImage: {
        width: 30,
        height: 25
    },
    body: {
        padding: 10,
        paddingTop: 0
    }
});