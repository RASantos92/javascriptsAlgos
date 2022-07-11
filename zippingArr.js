function zipArr(arr1,arr2){
    var newArr = [];
    var largerArr, sideArr;
    if(arr1.length > arr2.length) largerArr = arr1, sideArr = arr2
    else largerArr = arr2, sideArr = arr1
    for(var i = 0; i< largerArr.length; i++){
        if(arr1[i]) newArr.push(arr1[i]);
        if(arr2[i]) newArr.push(arr2[i])
    }
    return newArr
}

testArr1 = [1,2,3,4,54,5];
testArr2 = [5,4,3,2,1]
console.log(zipArr(testArr1,testArr2))