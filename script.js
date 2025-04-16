    let details = 'this a car  hart of the oil '
    let car ={
         name:'nexon',
         brand:'tata',
         "drive train":details+'petrol,diesal,ev',
         price:5000000,
         color:'red,blue,green',
         mileage:20
   }

   console.log(car); // this line print line
   console.log(car.price); // this link print for price only print
   console.log(car["drive train"]); // this link print for drive train only print
   car['modelYear']=2025; //this line add new key value pair
   delete car.price;// this line delete key value pair
   console.log(car); // this line print all key value pair
   car['price']=2000; // this line add new key value pair
   console.log(car); // this line print all key value pair
   console.log (`${car.name} is a ${car.brand} car with a ${car.drivetrain}`); // this a link type a sendence for a value of key