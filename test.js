var test = "there's no free lunch - gotta pay yer way";

function acr(str){
    let testArr = test.split(" ")
    let output = ""
    console.log(testArr)
    for(var i = 0 ; i<testArr.length; i++){

    output += testArr[i][0].toUpperCase()

    }
    return output
}

console.log(acr(test))


function bookIndex(arr){
    //your code here
    //iterate through the string
    for(var i = 0; i < arr.length; i++){
        //search for consecutive numbers
        if(arr[i]+1 == arr[i+1]){
            var j = 1 // marker to increase during the while loop
            while(arr[i]+j == arr[i+1]){
                //if consecutive numbers find starting and ending indexes. 
                var temp = arr[i+1]
                //erase indexes no longer needed
                arr.splice(i+1, 1)
                //Combine values with a '-' in between
                j++
            }
            arr[i] = `${arr[i]}-${temp}`
        }
    }
    return arr
}

console.log(bookIndex([1,3,4,5,7,8,10,12]))