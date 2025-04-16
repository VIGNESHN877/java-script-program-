// recursive function to find the maximum value in the array
// -BASE CASE: if the array has only one element, return that element
// -UPDATE CASE: if the array has more than one element, find the maximum value between the first element and
// the maximum value of the rest of the array
// -RECURSIVE CALL

const { cachedDataVersionTag } = require("node:v8");

function factorial(n){
    return n*factorial(n-1);

}
// 5! => 0+1+2+3+4+5=15