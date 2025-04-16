let user ={
   name: "vignesh",
   age:20,
};

// in opertor 

console.log("age" in user); // true
console.log("name" in user); // true
console.log("city" in user); // false

for(key in user){

   console.log(user[key],[key]);
//    console.log(key+'-'+user[key]);
 }