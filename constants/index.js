//DATA
export const DATA_REDUCER = 'dataReducer'
export const PROPERTIES = 'properties'
export const LOADING = 'loading'
export const COUNTER_CHANGE = 'COUNTER_CHANGE'
//Initiate the api call
export const GET_DATA = 'GET_DATA'
//Gets the players on api call is fullfilled
export const GET_DATA_FULFILLED = 'GET_DATA_FULFILLED'
//When there is a error return an errror action type. 
export const GET_DATA_REJECTED = 'GET_DATA_REJECTED'
//PROPERTIES
export const SET_PROPERTIES = 'SET_PROPERTIES'
export const PROPERTY_SELECTED = 'PROPERTY_SELECTED'
//URL
export const URL_HOME_BUSSINES_JSON = 'http://www.inmomallorcabusiness.com/panel/scripts/urlJSON.php'
export const URL_HOME_BUSSINES = 'http://www.mallorcabusinesslife.com/panel/scripts/urlXCP.php'
export const URL_STAR_WARS = 'https://swapi.co/api/people'
//FILTERS
export const GET_FILTERS = 'GET_FILTERS'
export const SET_FILTERS = 'SET_FILTERS'
export const SET_FILTERS_SELECTED = 'SET_FILTERS_SELECTED'
export const FILTERS_NAMES = {
    HOME_TYPE: "homeType",
    OPERATION_TYPE: "operationType",
    CITY: "city",
    FEATURES_BED_ROOM_NUMBER: "featuresBedRoomNumber",
    OPERATION_PRICE: "operationPrice"
}