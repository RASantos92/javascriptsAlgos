const testArr1 = [1, 2, 33, 44, 56, 78, 94];
const testArr = [1, 2, 33, 44, 56, 78, 94];
function binarySearchFirst(arr, value) {
    if (arr[(arr.length -1) / 2] == value) {
        return true;
    }
    if (arr[(arr.length -1) / 2] > value) {
        for (var i = (arr.length -1) / 2; i <= 0; i--) {
            if (arr[i] == value) {
                return true;
            }
        }
    }
    if (arr[(arr.length -1) / 2] < value) {
        for (var i = (arr.length -1) / 2; i < arr.length; i++) {
            if (arr[i] == value) {
                return true;
            }
        }
        
    }
}

function binarySearch2(arr, value) {
    var start = arr[0];
    var end = arr[arr.length - 1];
    let mid = Math.floor((start + end) / 2);
    if (mid == value) {
        return false;
    }
    else if ( arr[mid] > value) {
        start = arr[arr.length / 2];
        end = arr[0];
        let i = arr[mid];
        while(i > 0){
            if(arr[i]  == value ){
                return true;
            }
            i--
        } 
    }
    else if ( arr[mid] < value) {
        start = arr[arr.length / 2];
        end = arr[arr.length-1];
        let i = arr[mid];
        while(i > end){
            if(arr[i]  == value ){
                
                return true;
            }
            i++
        } 
    }
}

function binarySearch3(arr, val) {
    var sta = 0;
    var end = arr.length-1;
    while(sta < end) {
        var mid = Math.floor((sta + end) / 2);
        if(arr[mid] === val) {
            return true;
        }
        if(val > arr[mid]) {
            sta = mid + 1;
        } else if(val < arr[mid]) {
            end = mid -1;
        }
    }
    if(arr[sta] === val) {
        return true;
    }
    
    return false;
}

function binarySearchRecursive(input, target){
    var center_index = Math.ceil((input.length/2)-1);
    if (target == input[center_index]){
        return true;
    }
    else if (target > input[center_index]){
        console.log(input)
        var newInput = input.slice(center_index+1);
        console.log(newInput)
        return binarySearchRecursive(newInput, target);
    }
    else if (target < input[center_index]){
        console.log("Here",input)
        var newInput = input.slice(0, center_index);
        console.log(newInput)
        return binarySearchRecursive(newInput, target);
    }
    return false;
}


