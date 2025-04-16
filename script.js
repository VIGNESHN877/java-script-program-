// recursive function to find the maximum value in the array
// -BASE CASE: if the array has only one element, return that element
// -UPDATE CASE: if the array has more than one element, find the maximum value between the first element and
// the maximum value of the rest of the array
// -RECURSIVE CALL
// function factorial(n){
//     if(n == 0 || n == 1){
//         return 1;
// }
// return n*factorial(n-1);
// }
// console.log(factorial(5));


// function one(k){
//     if(k == 0 || k == 1){
//         return 1;

// }
// return k*one(k-1);
// }

// console.log(one(12))

function two(b){

    if(b== 0 ){
        return 1;
    }
    return b * two(b-1);

   
}

console.log(two(22));