function parensValid(str){
    counterO = 0
    counterC = 0 
    for(let i = 0;i<str.length;i++){
        if(str[i] == '('){
            counterO++
        }
        if(str[i] == ")" &&  counterO > counterC){
            counterC++
        }
        else if(str[i] == ")" &&  counterO <= counterC){
            return false
        }
    }
    if(counterO == counterC) return true
    else return false
}

console.log(parensValid("(show) me (the m)oney")) //true
console.log(parensValid("(show) me )(the money")) //false
console.log(parensValid(")show( me )the money(")) //false

function validBraces(braces){
    var braceDict = {
        "(" : ")",
        "[" : "]",
        "{" : "}"
    }
    var output = false;
    for(var i = 0; i < braces.length; i++){
        if(braceDict[braces[i]] != null){
            if(braces[i+1] == braceDict[braces[i]]){
            output = true;
            i++;
            } else {
                for(var j = i+1; j < braces.length; j++){
                    if(braces[j] == braceDict[braces[i]]){
                        output = true;
                        break;
                    }
                    else output = false
                }
            }
        }
        if(output == false) return output
    }
    return output;
}

console.log(validBraces("({})[({})]")) //true
console.log(validBraces("}}({})[({})]{{")) //false
console.log(validBraces("({})[({)}]")) //false edge case not worked out
