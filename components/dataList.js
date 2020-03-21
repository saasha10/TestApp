import React, { Component } from 'react'
//import your UI from react-native
import { ScrollView } from 'react-native';
import styled from 'styled-components/native'
import Card from './utilities/CardProperty'
import MyLoaderListCard from './utilities/Loader';

const StyledViewContainer = styled.View`
    flex: 1;
    justify-content: space-around;
`

export default class DataList extends Component {
    componentDidMount() {
        // this.props.getPeopleAwait()
        // this.props.getPeopleSuperAgent()
        this.props.getPeopleAxios()
    }

    render() {
        const { data, loading } = this.props
        console.log("COMPONENT ---> DATALIST")
        console.log(this.props)
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
                        data.customerProperties.length &&
                        data.customerProperties.map((property, i) => <Card key={i} properties={property} />)}
                </StyledViewContainer>
            </ScrollView>
        )
    }
}