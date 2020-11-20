const testSeconds = 45;

function humanReadable(seconds) {
    let output = "00:00:00";
    let x = (output).split(":")
    if(seconds < 60) {
        x[2] = seconds.toString()

        console.log("x = ",x);
    }
    return null;
}

console.log(humanReadable(testSeconds));