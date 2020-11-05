const testBits = "111"

var decodeBits = function (bits) {
    let output = "";
    let preOutput = {};
    for (var i = 0; i < bits.length; i++) {
        var counter = 0;
        for(var j = i; j< bits.length; j++){
            if(parseInt(bits[i]) == parseInt(bits[j])){
                counter++;
            } else {
                break;
            }
        }
        preOutput["s" + bits[i] + i] = counter;
        i += counter -1;
    }
    for(var key in preOutput){
        var value = preOutput[key];
        if(parseInt(key.slice(1, 2)) == 1){
            if(value >= 3){
                output += "-"
            } else {
                output += "."
            }
        }
        if(parseInt(key.slice(1, 2)) == 0){
            if(value > 7){
                output += "  "
            } 
            if(value < 7 && value >= 3) {
                output += " "
            }
        }
        console.log(key.slice(1,2))
    }
    console.log(preOutput, preOutput[2])
    return output;
}

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
