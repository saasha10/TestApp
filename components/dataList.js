import React, { Component } from 'react'
//import your UI from react-native
import { ScrollView } from 'react-native';
import styled from 'styled-components'
import Card from './utilities/CardProperty'

const StyledViewContainer = styled.View`
    flex: 1;
    justify-content: space-around;
`

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
            <ScrollView>
                <StyledViewContainer>
                    {!loading ? people.customerProperties.length && people.customerProperties.map((property, i) => <Card key={i} properties={property}/>)
                        :
                        <StyledText>Loading...........</StyledText>}
                </StyledViewContainer>
            </ScrollView>
        )
    }
}