testString="Boris Godunov"

function rotateString(str,num){
    let newStr= "";
    let newStr1= "";
    if(num<0) num = num *-1
    let divide = str.length-num;
    for(let i=0; i<divide; i++ ) newStr += str[i];
    for(let j=divide; j<str.length; j++) newStr1 += str[j];
    return newStr1 += newStr;
}
function isRotation (str1,str2){
    if (str1.length != str2.length) return false;
    for(let i=0; i<str2.length; i++){
        test = rotateString(str1,i);
        if(test == str2) return true;
    }
    return false;
}

x  = rotateString(testString,-1);
console.log(x);

t = isRotation(x,testString);
console.log(t);
sum = -1
console.log(testString.length,testString.length-sum)
//Create the function isRotation(str1,str2) that returns whether the second string is a rotation of the first. Would you change your implementation if you knew that the two were usually entirely unrelated?