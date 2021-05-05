// const testStr = "show me the money"

// function rot13(str) {
//     let alpha = "aAbBcCdDeEfFgGhHiIjJkKlLmMnNoOpPqQrRsStTuUvVwWxXyYzZ";
//     var output = "";
//     for (var i = 0; i < str.length; i++) {
//         if(str[i] == "n"){
//             output += alpha[0];
//         }
//         let counter = 0;
//         for (var j = 0; j < alpha.length; j++) {
//             if (str[i] == alpha[j]) {
//                 counter++;
//                 var letter = j + 26;
//                 if (letter > alpha.length) {
//                     output += alpha[letter - alpha.length]
//                 }
//                 if (letter < alpha.length) {
//                     output += alpha[letter];
//                 }
//             } 
//         }
//         if(counter == 0){
//             output += str[i];
//         }
//     }
//     return output
// }

// console.log(rot13(testStr))


function bracesValid(str) {
    var checker = {
        "(" : 0,
        "[" : 0,
        "{" : 0
    }

    for (var i = 0 ; i < str.length ; i ++) {
        if (str[i] === "(") {
            checker["("] ++;
        } else if (str[i] === "[") {
            checker["["] ++;
        } else if (str[i] === "{") {
            checker["{"] ++;
        } else if (str[i] === ")") {
            checker["("] --;
        } else if (str[i] === "]") {
            checker["["] --;
        } else if (str[i] === "}") {
            checker["{"] --;
        } 
        if(checker["["] < 0 || checker["("] < 0 || checker["{"] < 0) {
            return false;
        }
    }
    if (checker["["] > 0 || checker["("] > 0 || checker["{"] > 0) {
        return false;
    }
    return true;
}

console.log(bracesValid("{(})"))










