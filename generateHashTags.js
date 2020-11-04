const testStr = "show me the money"

function generateHashtag (str) {
    var words = (str).split(" ");
    let output = "#";
    for (var i = 0; i < words.length ; i++){
        output += words[i][0].toUpperCase() + words[i].slice(1);
    }
    return output;
}

console.log(generateHashtag(testStr))