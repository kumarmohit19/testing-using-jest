const { add, multiply, substract, divide }  = require('./calculator');


test('testing the add method',()=>{
    expect(add(1,2,3,4)).toBe(10);
});

test('testing the substract method',()=>{
   expect(substract(6, 8)).toBe(-2);
});

test('testing the multiply method',()=>{
   expect(multiply(6, 8, 0)).toBe(0);
});

test('testing the divide method',()=>{
   expect(divide(10, 2)).toBe(5);
});