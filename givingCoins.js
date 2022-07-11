function generateCoinChange(input) {
    input = Math.floor(input * 100);
    var change = {
        'quarters':0,
        'dimes': 0,
        'nickels': 0,
        'pennies': 0
    }
    change['quarters'] += Math.floor(input/25);
    input = input%25;
    change['dimes'] += Math.floor(input/10);
    input -= input%10;
    change['nickels'] += Math.floor(input/5);
    input -= input%5;
    change['pennies'] = input
    return change
}


console.log(generateCoinChange(0.67))