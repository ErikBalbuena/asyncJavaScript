function suma(a,b){
return a + b;
}
//Callback debera de ser una funciòn
function calc(a,b,callback){
return callback(a,b);
}

console.log(calc(1,2,suma));

//para esperar que algo suceda

function fecha(callback){
console.log(new Date);
const tiempo = 3000;
setTimeout(function (){
    let date = new Date;
    callback(date);
},tiempo);
}

function printDate(dateNow){
    console.log(dateNow);
}

fecha(printDate);