function add(...num){
   return num.reduce((acc, summ) => acc + summ, 0);
}

function multiply(...num){
   return num.reduce((acc, summ) => acc * summ, 1);
}

function substract(minuend, subtrahend ){
   return minuend - subtrahend;
}

function divide(dividend, divisor ){
   return dividend / divisor;
}

module.exports = { add, multiply, substract, divide };