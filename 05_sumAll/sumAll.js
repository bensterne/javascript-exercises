const sumAll = function(int1, int2) {
    let output=0;
    if (int1 < 0 | int2<0 | int1 !== Math.floor(int1) | int2 !== Math.floor(int2) ){
        output = "ERROR";
    } else {
        if (int1 < int2){
            for ( let i=int1 ; i<= int2;i++){
            output = output + i;
            }
        } else {
            for ( let i=int2 ; i<= int1;i++){
            output = output + i;
            }
        }
    }
    return output;
};

console.log(sumAll(1,4));

// Do not edit below this line
module.exports = sumAll;
