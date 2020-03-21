import React from 'react'
import ContentLoader, { Rect } from 'react-content-loader/native'
import { Card } from 'react-native-elements'
import { UIColors } from '../../constants/colors'
/*** -----------> Here we can create any Loader what you need to use <-----------  ***/
const MyLoaderListCard = () => (
    <Card>
        <ContentLoader
            speed={1}
            width={400}
            height={200}
            viewBox="0 0 400 200"
            backgroundColor={UIColors.lightGray}
            foregroundColor="#ecebeb"
        >
            <Rect x="10" y="0" rx="2" ry="2" width="300" height="150" />
            <Rect x="10" y="160" rx="5" ry="5" width="50" height="10" />
            <Rect x="280" y="160" rx="5" ry="5" width="25" height="15" />
            <Rect x="10" y="175" rx="5" ry="5" width="50" height="10" />
            <Rect x="10" y="190" rx="5" ry="5" width="30" height="8" />
            <Rect x="45" y="190" rx="5" ry="5" width="30" height="8" />
        </ContentLoader>
    </Card>
)


export default MyLoaderListCard