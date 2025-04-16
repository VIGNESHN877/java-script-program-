     
     let a ={
      name:'vignesh',
      age:25
     }
     
     
     function User(a){
      this.name= 'vignesh';   // this is used to access the properties of the object
     this.age=function(){
      return 25;
     }
   }
      let vignesh = new User;
      // let rija = new User();
 
      

      // console.log(rija);
      console.log(vignesh);
      console.log(vignesh.age());

      // consuter