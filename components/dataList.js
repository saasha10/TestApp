import React, { Component } from 'react'
//import your UI from react-native
import { View, Text } from 'react-native';
import styled from 'styled-components'

const StyledText = styled.Text`
    font-size: 20px;
    text-align: center;
    margin: 10px;
`


export default class DataList extends Component {
    componentDidMount() {
        // this.props.getPeopleAwait()
        this.props.getPeopleAxios()
        // this.props.getPeopleSuperAgent()
    }

    render() {
        const { people, loading } = this.props
        console.log("COMPONENT ---> DATALIST")
        console.log(this.props)
        return (
            <View>
                {!loading ? people.length ? people.map((person, i) => <StyledText key={i}>{person.name}</StyledText>) : <StyledText>No People</StyledText>
                    :
                    <StyledText>Loading...........</StyledText>}
            </View>
        )
    }
}