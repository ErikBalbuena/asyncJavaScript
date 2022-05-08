

const Objetos = [{
    id : 1,
    titulo: "Bleach",
    banda: "Nirvana",
    anio: 1989
},{
    id:2,
    titulo: "Nevermind",
    banda: "Nirvana",
    anio: 1991
},{
    id:3,
    titulo: "Incestiside",
    banda: "Nirvana",
    anio: 1993
}];


//Se muestran en pantalla los objetos a traves de console.log

console.log(Objetos);

//Se muestran los datos a través de la función getDatos

function getDatos(){
    return Objetos;
}

console.log("getDatos: ",getDatos());//Se coloca getDatos() y no getDatos para que se ejecute getDatos

const arrowGetDatos = () => {
    return Objetos;
}

console.log("arrowGetDatos",arrowGetDatos());

//Al solicitar datos de internet existe un retraso o delay

//Para simular la asyncronia se emplea la función setTimeOut(function,time)

function setTimeDatos  () {
    setTimeout(function () {
        return Objetos;
    }, 3000);
}

console.log("setTimeDatos", setTimeDatos());

const arrowSetTimeDatos = () => {
    setTimeout(() =>{
        return Objetos;
    },3000);
}

console.log("arrowSetTimeDatos", arrowSetTimeDatos());

//Si se consideran así las funciones no les alcanza el tiempo para devolver el resultado
//Para resolver este delay se emplea las promesas, que siempre devuelven algo response: resolve, reject 
//resolve y reject son dos funciones que emplean lo que se devuelve en cada caso

function promiseDatos(){
    return new Promise((resolve,reject) => {
       
        setTimeout(() =>{
            resolve(Objetos);
        },3000);
    });
}

//para invocarla

promiseDatos().then(datos => console.log("desde la promesa", datos));

//CALLBACK RELOADED ______________________________________________________
//Una callback es una función que es pasada a otra función como argumento
//Una función puede correr después de que otra función ha terminado

//Las funciones en javaScript se ejecutan en secuencia como son llamadas no como son declaradas

const primeraFuncion = () => {
    console.log("PRIMERA");
}

const segundaFuncion = () => {
    console.log("SEGUNDA");
}

primeraFuncion();
segundaFuncion();

segundaFuncion();
primeraFuncion();

//En pantalla se muestra:
// PRIMERA
// SEGUNDA
// SEGUNDA
// PRIMERA

//Se desea mostrar el resultado de una suma, entonces
//se puede hacer el calculo de la suma y después mostrar el resultado
//Se invocan dos funciones

const adicion01 = (a,b) => {
return a + b;
}

console.log("resultado", adicion01(2,5));

//Ahora se muestra desde la funcion que realiza la suma no pudiendose evitar 
//mostrar el mensaje

const adicion02 = (a,b) => {
    let suma =  a + b;
    console.log("desde la función adición",suma);
}

adicion02(2,5);

//Ahora realizaremos lo mismo pero con un callback
//es decir una función que es pasada a otra función como argumento
//con un callback es posible hacer primero el calculo y correr la función callback después de 
//realizado el cálculo

const adicion03 = (a,b,callback) => {
let suma = a + b;
callback(suma);
}

adicion03(2,5, console.log); //Se manda como callback a la funcion console.log

// Asincronismo:
// las funciones que corren en paralelo con 
//otras funciones son llamadas asincronas

function mostrarHola(){

    console.log("Hola");
}

setTimeout(mostrarHola,3000);//la función mostrarHola se pasa como callback a setTimeout

//Es posible realizar la misma acción con callbacks que con promises

//CON CALLBACK
const mostrarBonita = (message) =>{
    console.log(message);
}//función que será callback
//Nótese que para emplear la función callback esta no deberá de llevar argumentos
setTimeout(() => {mostrarBonita("BONITA");},3000);

//CON EL OBJETO PROMISE
//El objeto Promise lleva como argumentos dos funciones callback resolve y reject las cuales devuelven 
//su argumento dependiendo de la circunstancia y cada uno es opcional i.e solo un resolve o un reject
let promesa01 = new Promise(
    function (siResuelve,sinoResuelve){//Dos funciones callback
        setTimeout(() => {siResuelve("BONITA DE PROMESA 01");},3000);
    }
);

//Se ejecuta la promesa a través de 

promesa01.then(respuesta => {
    console.log(respuesta)
});

//ASYNC Y AWAIT

// La palabra async antes de una función hace que la función regrese una promesa

async function asincFuncion01(){
    return "Hello";
}

//Es equivalente a 

function asincFuncion02(){
    return Promise.resolve("Hello");
}

asincFuncion01().then(response => console.log(response));

asincFuncion02().then(response => console.log(response));

//Await antes de una función hace que espere una promesa

//un await siempre debe de ir dentro de un async function

async function awaitFuncion(){
    let promesa = new Promise(
        (resolve,reject) => {
            setTimeout(() => {
                resolve("RESUELTO EN awaitFuncion DESPUÉS DE 3 seg");
            },3000);
        }
    );

    let respuesta = await promesa;
    console.log(respuesta);
}

awaitFuncion();


//REGRESANDO AL CURSO DE PLATZI: PROMESAS________________________________

const algoPasa = () => {
    return new Promise((resolve,reject) =>{
        //Se necesita de una estructura if para 
        //incluir las posibilidades de respuesta
        let condicion = true;
        if(condicion){
            resolve("bien hecho");
        }else{
            reject("no se realizó");
        }

    });
}

//Para invocarse es necesario utilizar los métodos de then y catch

algoPasa().then(response => {
    console.log(response);
}).catch(err => {
    console.log(err);
});

const algoPasa02 = () =>{
    return new Promise((resolve,reject) => {
        let condicion = true;
        if(condicion){
            setTimeout(() => {resolve("BIEN HECHO DESDE algoPasa02")},3000);
        }else{
            let error = new Error("RECHAZADO POR NO SER TRUE");
            reject(error);

        }    
    }

    );
}

algoPasa02().then(respuesta => console.log("respuesta",respuesta))
.catch(respuesta => console.log("error", respuesta));

//Se pueden agragar más then()

//PROMESAS ENCADENADAS

//EXISTE EL METODO DE PROMISE all() que ejecuta 
//las promesas encadenadas y las devuelve en un array
//Si una devuelve error, entonces se devuelve error de all()

Promise.all([algoPasa(),algoPasa02()]).then(responseArray => {
    console.log("arreglo bien hecho desde all()", responseArray);
}).catch(errorArray => {
    console.log("errorArray desde all()", errorArray);
});



