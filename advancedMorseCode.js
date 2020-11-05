const testBits = "10001"

var decodeBits = function(bits){
    let output = "";
    if(parseInt(bits) == 111){
        return output = "-"
    }
    for(var i = 0; i < bits.length; i++){
        if(bits[i] == 1 && parseInt(bits[i]+bits[i+1]+bits[i+2]) != 111){
            output += ".";
            i += 3;
        }
        if(bits[i] == 1 && parseInt(bits.slice(i, i+8)) == 11111100){
            output += "-";
            i += 7

        }
        if(bits[i] == 0 && parseInt(bits[i+1]+bits[i+2]+bits[i+3]) == 0 && parseInt(bits[i+1]+bits[i+2]+bits[i+3]+bits[i+4]+bits[i+5]+bits[i+6]+bits[i+7])!= 0){
            output += " ";
            i += 3;
        }
        if(bits[i] == 0 && parseInt(bits[i+1]+bits[i+2]+bits[i+3]+bits[i+4]+bits[i+5]+bits[i+6]+bits[i+7]) == 0){
            output += " ";
            i += 7;
        }
    }
    if(parseInt(bits[bits.length-1] + bits[bits.length-2]) == 11){
        output += "."
    }
    if(parseInt(bits.slice(bits.length - 9,bits.length -1)) == 11111100){
        output += "-"
    }
    return output;
}
var decodeBits1 = function(bits){
    let output = "";
    let dict = {};
    for(let i = 0; i < bits.length; i++){
        if(dict[bits[i]]){
            dict[bits[i]]++
            continue;
        }
        (dict[bits[i]] = 1)
    }
    console.log(dict)
    return output;
}
console.log(decodeBits1(testBits))
function decodeMorse(str) {
    var morseCodeDict = {
        ".-": "A",
        "-...": "B",
        "-.-.": "C",
        "-..": "D",
        ".": "E",
        "..-.": "F",
        "--.": "G",
        "....": "H",
        "..": "I",
        ".---": "J",
        "-.-": "K",
        ".-..": "L",
        "--": "M",
        "-.": "N",
        "---": "O",
        ".--.": "P",
        "--.-": "Q",
        ".-.": "R",
        "...": "S",
        "-": "T",
        "..-": "U",
        "...-": "V",
        ".--": "W",
        "-..-": "X",
        "-.--": "Y",
        "--..": "Z",
        ".----": "1",
        "..---": "2",
        "...--": "3",
        "....-": "4",
        ".....": "5",
        "-....": "6",
        "--...": "7",
        "---..": "8",
        "----.": "9",
        "-----": "0",
        "...---...": "SOS"
    }
    var words = (str).split("  ");
    var letters = words.map((w) => w.split(" "))
    var decoded = [];

    for (var i = 0; i < letters.length; i++) {
        decoded[i] = [];
        for (var j = 0; j < letters[i].length; j++) {
            if (morseCodeDict[letters[i][j]]) {
                decoded[i].push(morseCodeDict[letters[i][j]]);
            }
        }
    }
    return decoded.map(arr => arr.join("")).join(' ');
}

var x = decodeBits(testBits);

console.log(decodeMorse(x))

