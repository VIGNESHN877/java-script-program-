let value = "2000";
let car ={

    name: "VOLA",
    brand: "TATA ",
    model: "2020 + " + value,
    price: "15",
    onRoadPrice(price){
        return price+2; //  this   a current object take a price 
    }
    
}
let car1 ={
    name1:"MICRO",
    model:"2008",
    price:"220000",
    brand:"my working"

}


car1['modelyear']=2024;



console.log(car.name);
console.log(car.brand);
console.log(car.model);
console.log(car.price);
console.log(typeof(car));
console.log(car);

console.log(car1.name1);
console.log(car1.brand);
console.log(car1.model);
console.log(car1.price);
console.log(typeof(car1));
console.log(car1);


car['name']= "TATA 1";
car['brand']='vaoda';
car['model']='2212';
car['price']= "22122004";

console.log(car.name);
console.log(car.brand);
console.log(car.model);
console.log(car.price);



car1.name1='tatami';
car1.model='2004';
car1.price='200422';



console.log(car1.name1);

console.log(car1.model);
console.log(car1.price);



delete car.name;
delete car.brand;
delete car.model;
delete car.price;