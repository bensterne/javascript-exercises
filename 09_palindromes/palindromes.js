
const palindromes = function (string) {

    string = string.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"");
    string = string.split(" ").join("");
    let ifPalindrome = (string.toLowerCase() === string.reverse().toLowerCase());
    return ifPalindrome;

    // if (string.length % 2) {
    //     ifPalindrome = string.substr(1,(string.length/2)) === reverseString(string.substr(-1,(string.length/2)));
    // } else {
    //     ifPalindrome = string.substr(1,((string.length-1)/2)) === reverseString(string.substr(-1,((string.length-1)/2)));

    // }
    // console.log(string.substr(1,(string.length/2)));
};

// Do not edit below this line
module.exports = palindromes;
