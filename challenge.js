let xmlHttpRequest = require("xmlhttprequest").XMLHttpRequest;//PARA HACERLO CON CALLBACKS
let API = "https://rickandmortyapi.com/api/character";

function fetchData(url_api, callback){
let xhttp = new XMLHttpRequest();//CREADO POR MICROSOFT
//lamado a la URL
xhttp.open("GET",url_api,true);//true es para activar el asincronismo
xhttp.onreadystatechange = function (event){
if(xhttp.readyState === 4){
if(xhttp.status === 200){
callback(null, JSON.parse(xhttp.responseText));
}else{
    const error = new Error("Error" + url_api);
    return callback(error, null);
}
}
}
xhttp.send();

}

fetchData(API, function(error1, data1){
if(error1){
return console.error(error1);
}
});