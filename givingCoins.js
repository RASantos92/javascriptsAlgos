function coinGenerator(money){
    coins = {
        "quarters" : 0,
        "dimes" : 0,
        "nickles" : 0,
        "pennies" : 0
    }
    fMoney = money * 100
    console.log("money before quarters",fMoney)
    while(fMoney >= 25){
        fMoney -= 25
        coins["quarters"]++
    }
    console.log("money after quarters", fMoney)
    while(fMoney >= 10){
        fMoney -= 10
        coins["dimes"]++
    }
    console.log("money after dimes", fMoney)
    while(fMoney >= 5){
        fMoney -= 5
        coins["nickels"]++
    }
    console.log("money after nickels", fMoney)
    while(fMoney >= 1){
        fMoney -= 1
        coins["pennies"]++
    }
    console.log("money after pennies", fMoney)
    return coins
}
console.log(coinGenerator(3.21))