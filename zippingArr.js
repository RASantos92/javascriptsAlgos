function zipArr(arr1,arr2){
    var newArr = [];
    var useArr = [];
    var sideArr = [];
    if(arr1.length > arr2.length){
        useArr = arr1;
        sideArr = arr2
    } else {
        useArr = arr2;
        sideArr = arr1
    }
    for(var i = 0; i< useArr.length; i++){
        newArr.push(useArr[i]);
        if(sideArr[i] != undefined)
            newArr.push(sideArr[i]);
    }
    return newArr
}

testArr1 = [1,2,3,4,54,5];
testArr2 = [5,4,3,2,1]
console.log(zipArr(testArr1,testArr2))