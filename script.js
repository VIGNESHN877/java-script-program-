function operation (op,a,b){
   return op(a,b);


}

let add = (a,b) => a+b;
let sub = (a,b) => a-b;


console.log(operation(sub,2,3));