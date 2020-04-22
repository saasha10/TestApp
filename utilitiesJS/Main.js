export default class Main {
    constructor(){
    }
    //--------------------------------------------------------------------------
    /**
     * @param arrayList -> to iterate
     * @param wordToSearch1 -> parameter to find something
     * @param wordToSearch2 -> parameter to find something
     */
    newArrayDifferentValues = (arrayList, wordToSearch1, wordToSearch2) => {
        // console.log(arrayList)
        // console.log(wordToSearch1)
        // console.log(wordToSearch2)
        let result = []

        arrayList.forEach(element => {            
            if (result.indexOf(element[wordToSearch1][wordToSearch2]) == -1)
                result.push(element[wordToSearch1][wordToSearch2])
        });
        //console.log(result)
        return result
    }
}