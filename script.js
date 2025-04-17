        let  user = {  // object
            name: 'John Doe',
            age: 30,
            occupation: 'Software Engineer',
           
        };


        // class 
        class User {
        
            name = 'John Doe';
            age = 30;  
            display(){
                console.log(`Name: ${this.name}, Age: ${this.age}`);
            } 
            //   constructor(name, age) {
            //     this.name = name;
            //     this.age = age;
            //   }
        }
       let user1 = new User();
       user1.display();
       console.log(user1);