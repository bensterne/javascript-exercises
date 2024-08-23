const fibonacci = function(member) {
    let lastValue=0;
    let currentValue =1;
    let value = 0;
    memberInt = parseInt(member);

    if (typeof member !== 'number') {
        memberInt = parseInt(memberInt)
    } else {
        memberInt = member
    }
    if (memberInt < 0){
        value = "OOPS";
    } else if (memberInt == 1){
        value = 1;
    } else {
    for (let i=1;i<memberInt;i++){
        value = lastValue + currentValue;
        lastValue = currentValue;
        currentValue = value;
    }
}
    return value;

};

// for 1


// Do not edit below this line
module.exports = fibonacci;
