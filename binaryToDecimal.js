
var binary = 01011001.toString()
const binaryArrayToNumber = binary => parseInt(binary, 2);
console.log(binaryArrayToNumber(binary))
// const binaryArrayToNumber = arr => {
//     let len = arr.length
//     let pow = []
//     let decimal = []
//     for(let i = 0; i <= len - 1; i++){
//         pow.unshift(i)
//     }
//     arr.forEach((x,index) => {
//         decimal.push(x*2**pow[index])
//     })
//     let toDecimal = decimal.reduce((acc, curr) => acc + curr, 0)
//     return toDecimal
// };
// console.log(binaryArrayToNumber([1, 0, 1, 1]))

// function hexToDec(hexString){
//     return parseInt(hexString, 16);
// }

const decToHex = num => (num).toString(16)
const hexToDec = hexStr => parseInt(hexStr,16)

var testDec = 45
var testHex = decToHex(testDec)

console.log("decToHex output",testHex)
console.log("hexToDec output", hexToDec(testHex))

