let operation = (op,a,b) => op(a,b);
let add = (a,b) => a+b;
let sub = (a,b) => a-b;
let divi = (a,b) => a/b;
let rem = (a,b) => a-b;

console.log(operation(sub,21,3),'\n',(add,40,50),'\n',(divi,50,3),'\n',(rem,50,4));
