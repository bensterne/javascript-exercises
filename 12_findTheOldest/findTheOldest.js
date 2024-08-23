const findTheOldest = function(array) {
    return array.sort(function(a,b){
    const lastAge = (a.yearOfDeath || new Date().getFullYear()) - a.yearOfBirth;
    const thisAge = (b.yearOfDeath || new Date().getFullYear()) - b.yearOfBirth;
    return thisAge- lastAge;
    })[0];
};


// Do not edit below this line
module.exports = findTheOldest;
