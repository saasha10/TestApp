import React from 'react'
import styled from 'styled-components'
import { StyleSheet, View } from 'react-native'
import ModalWithHooksContainer from '../containers/ModalWithHooksContainer'
import DataContainer from '../containers/DataContainer'
import { UIColors } from '../constants/colors'
import MapView, { PROVIDER_GOOGLE, Circle } from 'react-native-maps'

const StyledSafeAreaView = styled.SafeAreaView`
  margin: 1px;
`

const StyledScrollView = styled.ScrollView`
  background-color: ${UIColors.grayAlmostWhite} ; 
  marginHorizontal: 1px;
`

const LatLng = {
  latitude: 41.390290,
  longitude: 2.155351,
  latitudeDelta: 0.015,
  longitudeDelta: 0.0121,
}

export default () => (
  <>
    {/* <ModalWithHooksContainer /> */}
    {/* <View style={styles.container}> */}
    <MapView
      provider={PROVIDER_GOOGLE} // remove if not using Google Maps
      style={styles.map}
      region={LatLng}
    >
      <Circle
        center={LatLng}
        radius={200} 
        strokeColor='#f9fafb'
        fillColor='rgba(183, 183, 183, 0.5)'/>
    </MapView>

    {/* </View> */}
    {/* <StyledSafeAreaView>
      <StyledScrollView>
        <DataContainer />
      </StyledScrollView>
    </StyledSafeAreaView> */}
  </>
)

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    height: 400,
    width: 400,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});