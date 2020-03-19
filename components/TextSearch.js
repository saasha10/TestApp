import React from 'react'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import styled from 'styled-components'
import { UIColors } from '../constants/colors'

const StyledText = styled.Text`
    flex: 1;    
    margin: 5px;
    padding: 10px;
    height: 60px;
    font-size: 24px;
    font-style: italic;
    text-align: center;
    color: ${UIColors.greyStrong1};
    border-bottom-width: 1px;
    borderColor: ${UIColors.lightGray};
    borderStyle: solid;
`

export default function ({ openModal }) {
    return (
        <>
        <StyledText onPress={openModal}>
            <Icon name="account-search" size={25} style={{ color: '#505050' }} />
                Search here...
        </StyledText>
        </>
        // <TouchableOpacity onPress={(e) => {
        //     console.log(e)
        //     console.log()
        //     e.persist(openModal)
        //     console.log("working")
        //     }}>
        // <SearchBar
        //     // ref={search => this.search = search}
        //     lightTheme
        //     // onPress={openModal}
        //     // onChangeText={test => console.log(test)}
        //     // onClearText={test => console.log(test)}
        //     placeholder='Type here...'
        //     inputStyle={{ textAlign: 'center', fontSize: 24, fontStyle: "italic" }}
        //     placeholderTextColor='white'
        // />
        // </TouchableOpacity>
    )
}

/**
 * style={{
            paddingVertical: 15,
            paddingHorizontal: 5,
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center"
        }}
 */