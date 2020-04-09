import Main from '../utilitiesJS/Main'
import axios from 'axios'
import superagent from 'superagent'
import { fetchData, fetchDataFulfilled, fetchDataRejected } from './data'
import { getFilters } from './filters'
import { URL_HOME_BUSSINES, URL_HOME_BUSSINES_JSON } from '../constants'
import minBy from 'lodash/minBy'
import maxBy from 'lodash/maxBy'
import filter from 'lodash/filter'

export const getPeopleAxios = () => {
    return dispatch => {
        //Dispatch the fetchData action creator before retrieving to set our loading state to true.
        dispatch(fetchData(true));
        //Then get the data.
        axios.get(URL_HOME_BUSSINES_JSON).then(res => {
            //console.log('data----------->', res)
            const properties = res.data.customerProperties
            filters = this.createFilters(properties)
            dispatch(getFilters(filters))
            dispatch(fetchDataFulfilled(res.data))
            //Error handle the promise and set your errorMessage
        }).catch(err => dispatch(fetchDataRejected(err)))
    }
}

//Define your action creators that will be responsible for asynchronouse operatiosn 
export const getPeopleAwait = () => {
    //IN order to use await your callback must be asynchronous using async keyword.
    return async dispatch => {
        //Then perform your asynchronous operations.
        try {
            //Have it first fetch data from our starwars url.
            const starWarsPromise = await fetch(URL_HOME_BUSSINES);
            dispatch(fetchData(true));
            //Then use the json method to get json data from api/
            const people = await starWarsPromise.json();
            console.log('people-----------', people);
            //Now when the data is retrieved dispatch an action altering redux state.
            dispatch(fetchDataFulfilled(people.results))
        } catch (error) {
            console.log('Getting People Error---------', error);
            dispatch(fetchDataRejected(error))
        }
    }
}


export const getPeopleSuperAgent = () => {
    return dispatch => {
        //Dispatch the fetchData action creator before retrieving to set our loading state to true.
        dispatch(fetchData(true));
        //Then do a get request the get the err, and response callback, if there's an error dispatch the fetchDataRejected.
        superagent.get(URL_HOME_BUSSINES)
            //When the data is retrieved we will invoke the end method.
            .end((err, res) => {
                //if there is an error use our fetchDataReject
                if (err) dispatch(fetchDataRejected(err));
                //We will set our loading state when fetching data is successful.
                dispatch(fetchDataFulfilled(res.body.results));
            })
    }
}
//-----------------------------FILTERS CREATION-----------------------------------
createFilters = properties => {
    const main = new Main()

    const homeType = main.newArrayDifferentValues(properties, 'propertyFeatures', 'featuresType')
    const operationType = main.newArrayDifferentValues(properties, 'propertyOperation', 'operationType')
    const city = main.newArrayDifferentValues(properties, 'propertyAddress', 'addressTown')
    const minBedRoom = minBy(properties, 'propertyFeatures.featuresBedroomNumber')
    const maxBedRoom = maxBy(properties, 'propertyFeatures.featuresBedroomNumber')

    const propertiesRent = filter(properties, ['propertyOperation.operationType', 'rent'])
    const propertiesSale = filter(properties, ['propertyOperation.operationType', 'sale'])

    let minPriceRent = minBy(propertiesRent, 'propertyOperation.operationPrice')
    minPriceRent = minPriceRent.propertyOperation.operationPrice
    let maxPriceRent = maxBy(propertiesRent, 'propertyOperation.operationPrice')
    maxPriceRent = maxPriceRent.propertyOperation.operationPrice
    let minPriceSale = minBy(propertiesSale, 'propertyOperation.operationPrice')
    minPriceSale = minPriceSale.propertyOperation.operationPrice
    let maxPriceSale = maxBy(propertiesSale, 'propertyOperation.operationPrice')
    maxPriceSale = maxPriceSale.propertyOperation.operationPrice

    const featuresBedRoomNumber = {
        min: minBedRoom.propertyFeatures.featuresBedroomNumber,
        max: maxBedRoom.propertyFeatures.featuresBedroomNumber
    }

    const operationPrice = {
        priceRent: {
            min: minPriceRent,
            max: maxPriceRent
        },
        priceSale: {
            min: minPriceSale,
            max: maxPriceSale
        }
    }

    return ({ homeType, operationType, city, featuresBedRoomNumber, operationPrice })
}