const add = (a,b) => a + b;

const subtract = (a,b) => a - b;

const sum = (a) => a.reduce((total, current) => total + current, 0);

const multiply = (a) => a.reduce((total, current) => total * current, 1);

const power = (a,b) => a ** b;

const factorial = function(a) {
  output = 1;
  if (a>=1){
    for (let i=1;i<=a;i++){
      output *= i;
    }
  return output;
} else if (a == 0){
  return 1;
}
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
