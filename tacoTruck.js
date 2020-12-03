var testArr = [[10,0],[-1,-10],[2,4]];

function tacoTruck(arr){
    let n = 0;
    let s = 0;
    let e = 0;
    let w = 0;
    let x = 0;
    let y = 0;
    for(var i = 0; i<arr.length; i++){
        console.log(arr[i][0], ":", arr[i][1]);
        if (arr[i][0] < 0){
            e += arr[i][0];
            x += arr[i][0] * -1;
        }
        if (arr[i][1] < 0){
            s += arr[i][1];
            x += arr[i][1] * -1;
        } else {
            w += arr[i][0];
            n += arr[i][1];
            x += arr[i][0];
            y += arr[i][1];
        }
    }
    console.log("n = ", n, "s = ", s , "e = ", e , "w = ", w);
    console.log(x, y)
    return null;
}

console.log(tacoTruck(testArr)) 
