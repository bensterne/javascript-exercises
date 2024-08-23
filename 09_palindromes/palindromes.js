
const palindromes = function (string) {
    const reverseString = function(str) {
        let strArray = str.split('');
        let output ='';
        for (const letter in strArray){
            output = strArray[letter] + output;
        }
    return output;
    };
    string = string.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"");
    string = string.split(" ").join("");
    return (string.toLowerCase() === reverseString(string).toLowerCase());
    
    // if (string.length % 2) {
    //     ifPalindrome = string.substr(1,(string.length/2)) === reverseString(string.substr(-1,(string.length/2)));
    // } else {
    //     ifPalindrome = string.substr(1,((string.length-1)/2)) === reverseString(string.substr(-1,((string.length-1)/2)));

    // }
    // console.log(string.substr(1,(string.length/2)));
};

// Do not edit below this line
module.exports = palindromes;
