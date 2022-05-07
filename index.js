function suma(a,b){
return a + b;
}
//Callback debera de ser una funciòn
function calc(a,b,callback){
return callback(a,b);
}

console.log(calc(1,2,suma));

