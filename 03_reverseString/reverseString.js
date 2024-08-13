const reverseString = function(string) {
    let strArray = string.split('');
    let output ='';
    for (const letter in strArray){
        output = strArray[letter] + output;
    }
return output;
}

// Do not edit below this line
module.exports = reverseString;
