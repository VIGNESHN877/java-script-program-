    // add the function 


    function add(){
      this.a = 5;
      this.b= 10;
      this.add = function(c){
         return this.a+this.b+c;
      
      };
   };
   // call the function

   let sum = new add();
   console.log(sum.add(5)); // Output: 20