const dice = [1,2,3,4,5,6]

function score( dice ) {
    let output = []
    let getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
    dict = {};
    for(var i = 0; i <= 4; i++){
        output.push(dice[getRandomNumber(0,5)])
    }
    for(var j = output.length - 1; i >= 0; i--){
        if (dict[output[j]]){
            dict[output[j]]++;
            continue;
        }
        (dict[output[j]] = 1)
            console.log(dict);
    }
    console.log(output)
    return null;
}
console.log(score(dice))