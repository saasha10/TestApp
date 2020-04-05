import Main from '../utilitiesJS/Main'
import axios from 'axios'
import { fetchData, fetchDataFulfilled, fetchDataRejected } from './data'
import { getFilters } from './filters'
import { URL_HOME_BUSSINES_JSON } from '../constants'
import minBy from 'lodash/minBy'
import maxBy from 'lodash/maxBy'

export const getPeopleAxios = () => {
    return dispatch => {
        //Dispatch the fetchData action creator before retrieving to set our loading state to true.
        dispatch(fetchData(true));
        //Then get the data.
        axios.get(URL_HOME_BUSSINES_JSON).then(res => {
            //console.log('data----------->', res)
            //-----------------------------FILTERS CREATION-----------------------------------
            let main = new Main()
            const properties = res.data.customerProperties
            const homeType = main.newArrayDifferentValues(properties, 'propertyFeatures', 'featuresType')
            const operationType = main.newArrayDifferentValues(properties, 'propertyOperation', 'operationType')
            const city = main.newArrayDifferentValues(properties, 'propertyAddress', 'addressTown')
            const minBedRoom = minBy(properties, 'propertyFeatures.featuresBedroomNumber')
            const maxBedRoom = maxBy(properties, 'propertyFeatures.featuresBedroomNumber')
            const minPrice = minBy(properties, 'propertyOperation.operationPrice')
            const maxPrice = maxBy(properties, 'propertyOperation.operationPrice')
            const featuresBedRoomNumber = {
                min: minBedRoom.propertyFeatures.featuresBedroomNumber,
                max: maxBedRoom.propertyFeatures.featuresBedroomNumber
            }
            const operationPrice = {
                min: minPrice.propertyOperation.operationPrice,
                max: maxPrice.propertyOperation.operationPrice
            }
            
            dispatch(getFilters({ homeType, operationType, city, featuresBedRoomNumber, operationPrice }))
            //-----------------------------FILTERS CREATION-----------------------------------
            dispatch(fetchDataFulfilled(res.data))
            //Error handle the promise and set your errorMessage
        }).catch(err => dispatch(fetchDataRejected(err)))
    }
}