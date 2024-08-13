const removeFromArray = function() {
    newArray =[...arguments[0]];
    for(let i=1;i<arguments.length;i++){
                newArray = newArray.filter((value) => value !== arguments[i]);    
    }
return newArray;
}

console.log(removeFromArray([1,2,3],2));
console.log(removeFromArray([1,2,3],2,3));

// Do not edit below this line
module.exports = removeFromArray;
