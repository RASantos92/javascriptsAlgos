const testBits = "1111000111111111110000111111111111100011111111110000000000011111111110001111111111000111111111110000000000011111100011111100001111110000111111000000000001111111111111111000011111"

var decodeBits = function (bits) {
    console.log(bits)
    let output = "";
    let preOutput = {};
    for (var i = 0; i < bits.length; i++) {
        var counter = 0;
        for (var j = i; j < bits.length; j++) {
            if (parseInt(bits[i]) == parseInt(bits[j])) {
                counter++;
            } else {
                break;
            }
        }
        preOutput["s" + bits[i] + i] = counter;
        i += counter - 1;
    }
    var sumOf1 = 0;
    var sumOf0 = 0;
    var counter2 = 0;
    var counter3 = 0;
    for (var key in preOutput) {
        var value = preOutput[key];
        if (parseInt(key.slice(1, 2)) == 1) {
            counter2++
            sumOf1 += value;
        }
        if (parseInt(key.slice(1, 2)) == 0) {
            counter3++
            sumOf0 += value;
        }
    }
    var averageOf1 = sumOf1 / counter2;
    console.log(counter2)
    var averageOf0 = (sumOf0 / counter3) * 2;
    
    for (var key in preOutput) {
        var value = preOutput[key];
        if (parseInt(key.slice(1, 2)) == 1) {
            if (averageOf1 != (sumOf0 / counter3)) {
                if (value == 3 && counter2 == 1) {
                    return output += "-";
                } 
                if (value == 1) {
                    output += "."
                } 
                if(value == 3){
                    output += "-"
                }
                else {
                    if (value > averageOf1 && counter3 > 1|| value == averageOf1) {
                        output += "-"
                    } 
                    else {
                        output += "."
                    }
                }
            } else {
                output += "."
            }
        }
        if (parseInt(key.slice(1, 2)) == 0) {
            if (value != averageOf0) {
                if (averageOf1 != (sumOf0 / counter3) && counter3 > 1) {
                    if (value > averageOf0) {
                        console.log(averageOf0)
                        output += "  "
                    }
                    if (value <= averageOf0 && value >= ((sumOf0 /counter3) + 3) || value == (sumOf0 / counter3)) {
                        console.log("avg of 0: ", averageOf0, "compair value: ",(sumOf0 /counter3))
                        output += " "
                    }
                }
                if(averageOf1 != (sumOf0 / counter3) && counter3 == 1){
                    console.log("here")
                    output += " "
                }
            }
        }
    }
    // console.log(preOutput);
    return output;
}
console.log(decodeBits(testBits))

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
                console.log("here")
                decoded[i].push(morseCodeDict[letters[i][j]]);
            }
        }
    }
    return decoded.map(arr => arr.join("")).join(' ');
}

var x = decodeBits(testBits);

console.log(decodeMorse(x))
