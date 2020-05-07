import { FEATURES } from '../constants/features'
const { 
    BATHROOM, 
    BEDROOM, 
    HEATING, 
    CONDITIONED_AIR, 
    ORIENTATION, 
    PARKING, 
    POOL, 
    TERRACE, 
    GARDEN, 
    WARDROBES, 
    STORAGE, 
    EQUIPPED, 
    EQUIPPED_KITCHEN, 
    LIFT, 
    PENT_HOUSE, 
    DOORMAN 
} = FEATURES
export default class Main {
    constructor() {
    }
    //--------------------------------------------------------------------------
    /**
     * @param arrayList -> to iterate
     * @param wordToSearch1 -> parameter to find something
     * @param wordToSearch2 -> parameter to find something
     */
    newArrayDifferentValues = (arrayList, wordToSearch1, wordToSearch2) => {
        let result = []

        arrayList.forEach(element => {
            if (result.indexOf(element[wordToSearch1][wordToSearch2]) == -1)
                result.push(element[wordToSearch1][wordToSearch2])
        })

        return result
    }
    //--------------------------------------------------------------------------
    parserFeatureName = key => {
        switch (key) {
            case BATHROOM:
                return 'Bathroom'
            case BEDROOM:
                return 'Bedroom'
            case DOORMAN:
                return 'Doorman'
            case HEATING:
                return 'Heating'
            case CONDITIONED_AIR:
                return 'Conditioned air'
            case ORIENTATION.NORTH:
                return 'North orientation'
            case ORIENTATION.WEST:
                return 'West orientation'
            case ORIENTATION.EAST:
                return 'East orientation'
            case ORIENTATION.SOUTH:
                return 'South orientation'
            case PARKING:
                return 'Parking'
            case POOL:
                return 'Pool'
            case TERRACE:
                return 'Terrace'
            case GARDEN:
                return 'Garden'
            case WARDROBES:
                return 'Wardrobe'
            case STORAGE:
                return 'Warehouse'
            case EQUIPPED:
            case EQUIPPED_KITCHEN:
                return 'Equipped'
            case LIFT:
                return 'Lift'
            case PENT_HOUSE:
                return 'Pent house'
            default:
                //console.log("NOT FOUND feature", key)
                return key
        }
    }
    //--------------------------------------------------------------------------
    parserNameToIcon = key => {
        switch (key) {
            case BATHROOM:
                return 'bath'
            case BEDROOM:
                return 'bed'
            case DOORMAN:
                return 'person-booth'
            case HEATING:
                return 'gripfire'
            case CONDITIONED_AIR:
                return 'snowflake'
            case ORIENTATION.NORTH:
            case ORIENTATION.WEST:
                return 'circle'
            case ORIENTATION.EAST:
            case ORIENTATION.SOUTH:
                return 'circle'
            case PARKING:
                return 'car'
            case POOL:
                return 'swimmer'
            case TERRACE:
                return 'circle'
            case GARDEN:
                return 'tree'
            case WARDROBES:
                return 'circle'
            case STORAGE:
                return 'warehouse'
            case EQUIPPED:
                return 'circle'
            case LIFT:
                return 'circle'
            case PENT_HOUSE:
                return 'circle'
            default:
                //console.log("NOT FOUND ICON", key)
                return 'angry'
        }
    }
}