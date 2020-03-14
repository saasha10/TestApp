import React from 'react'

import { View, Button, Text } from 'react-native'
import styled from 'styled-components'

const StyledViewContainer = styled.View``

const StyledText = styled.Text`
    font-size: 20px;
    text-align: center;
`

export default class SumExample extends React.Component {
    decrementCount() {
        let { count, changeCount } = this.props
        console.log("props in ", this.props)
        count--;
        console.log("props out ", count)
        changeCount(count)
    }
    incrementCount() {
        let { count, changeCount } = this.props
        console.log("props in ", this.props)
        count++;
        console.log("props out ", count)
        changeCount(count)
    }
    render() {
        const { count } = this.props
        console.log("Component", this.props)
        return (
            <StyledViewContainer>
                <Button title="Increment"
                    onPress={() => this.incrementCount()} />
               <StyledText>{count}</StyledText>
                <Button title="Decrement"
                    onPress={() => this.decrementCount()} />
            </StyledViewContainer>
        )
    }
}

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         justifyContent: 'center',
//         alignItems: 'center'
//     },
//     countText: {
//         fontWeight: 'bold',
//         fontSize: 18,
//         marginTop: 0,
//         width: 200,
//         backgroundColor: 'yellow',
//     }
// })