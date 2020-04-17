import React, { Component } from 'react'
//import your UI from react-native
import { ScrollView } from 'react-native'
import { Text } from 'react-native-elements'
import styled from 'styled-components/native'
import CardProperty from '../containers/CardProperty'
import Card from './utilities/CardProperty'
import MyLoaderListCard from './utilities/Loader'

const StyledViewContainer = styled.View`
    flex: 1;
    justify-content: space-around;
`

const StyledTextNoResult = styled(Text)`
    text-align: center;
    margin: 10px;
`

export default class DataList extends Component {
    componentDidMount() {
        this.props.getPeopleAxios()
    }

    render() {
        const { properties, loading } = this.props
        // console.log("COMPONENT ---> propertiesLIST")
        // console.log(this.props)

        return (
            <ScrollView>
                <StyledViewContainer>
                    {loading ?
                        <>
                            <MyLoaderListCard />
                            <MyLoaderListCard />
                            <MyLoaderListCard />
                            <MyLoaderListCard />
                            <MyLoaderListCard />
                            <MyLoaderListCard />
                            <MyLoaderListCard />
                        </>
                        :
                        properties.length !== 0 ? 
                        properties.map((property, i) => <CardProperty key={i} property={property} />)
                        : <StyledTextNoResult h4>Ups! No result</StyledTextNoResult>}
                </StyledViewContainer>
            </ScrollView>
        )
    }
}