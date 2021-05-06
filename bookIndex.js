function bookIndex(arr){
    var preOutput = "";
    for(var i = 0 ; i<arr.length; i++){
        let tempIndex = i;
        while(arr[i]+1 === arr[i+1]){
            i++
        }
        if(tempIndex !== i){
            preOutput += arr[tempIndex] + "-" + arr[i] + "," + " "
        }else {
            preOutput += arr[i] + "," + " "
        }
    }
    return preOutput.slice(0,preOutput.length -2);
}
console.log(bookIndex([1,3,4,5,7,8,10]))