import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import axios from 'axios'
import superagent from 'superagent'
//import XMLParser from 'react-xml-parser'
import dataReducer from '../reducers/dataReducer'
import { fetchData, fetchDataFulfilled, fetchDataRejected } from '../actions/data'
import { URL_HOME_BUSSINES, URL_STAR_WARS } from '../constants'

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
          } catch(error) {
            console.log('Getting People Error---------', error);
            dispatch(fetchDataRejected(error))
          }
    }
}

//********
//***WORKING IN PROGRESS***
//********
export const getPeopleAxios = () => {
    return dispatch => {
        //Dispatch the fetchData action creator before retrieving to set our loading state to true.
        dispatch(fetchData(true));
        //Then get the data.
        axios.get(URL_STAR_WARS).then(res => {
            console.log('people-----------', res)
            //Set the results to the people array.
            // let dataParsed = new XMLParser().parseFromString(res.data)
            // console.log("DATA -----> ", dataParsed)
            // const properties = dataParsed.getElementsByTagName('listaPropiedades')
            // console.log("properties", properties)
            dispatch(fetchDataFulfilled(res.data.results))
            //Error handle the promise and set your errorMessage
        }).catch(err => dispatch(fetchDataRejected(err)))
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
            if(err) dispatch(fetchDataRejected(err));
            //We will set our loading state when fetching data is successful.
            dispatch(fetchDataFulfilled(res.body.results));
        })
    }
}

export default createStore(dataReducer, applyMiddleware(thunk))