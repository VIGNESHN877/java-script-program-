      let a ={

      name: "vignesh",
      age: 20,
      };



      console.log(a);

      // a= {}; // This will throw an error because a is a const variable

      // a.age= 21;
      // a.name='vignesh.N';


   
      b=a;
      a={};
      
      console.log(a,b);
      // this a carpagecollection