// function coinGenerator(money){
//     fMoney = money * 100
//     coins = {
//         "quarters" : 0,
//         "dimes" : 0,
//         "nickles" : 0,
//         "pennies" : 0
//     }
//     coins["quarters"] = Math.floor(fMoney/25);
//     fMoney = fMoney % 25;
//     coins["dimes"] = Math.floor(fMoney/10);
//     fMoney = fMoney % 10;
//     coins["nickles"] = Math.floor(fMoney/5);
//     fMoney = fMoney % 5;
//     coins["pennies"] = Math.floor(fMoney/1);
//     fMoney = fMoney % 1;
//     return coins
// }
// console.log(coinGenerator(3.21))

function generateCoinChange(input) {
    input = Math.floor(input * 100);
    var change = {
        'quarters':0,
        'dimes': 0,
        'nickels': 0,
        'pennies': 0
    }


    while(input > 0) {
        if(input >= 25) {
            input -= 25;
            change['quarters'] += 1;
        } else if(input >= 10) {
            input -= 10;
            change['dimes'] += 1;
        } else if(input >= 5) {
            input -= 5;
            change['nickels'] += 1;
        } else {
            change['pennies'] = input
            // input = 0
            // input -= input

        }
    }

    return change
}


console.log(generateCoinChange(0.67))