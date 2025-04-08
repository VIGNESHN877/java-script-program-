
let year = 2004;

// divisible by 4 
// divisible by 100, not divisible by 400


if (year % 4 == 0){

    if (year % 100 == 0) {
        if (year % 400 == 0) {
            console.log(year+"  leap year");
        }
        else{
            console.log(year+'Not a leep year');
        }
    }
    else{
        console.log(year+" leap year");
    }
}
else{ console.log('Not a leep year'); }