/*function hello(){
    console.log('Hola clase');
    console.log('5IV7');
}

hello();
hello();
hello();
hello();
hello(); 


//RETORNO DE UNA FUNCIÓN
function hello(){
    return 'Hola clase';
}

const result = hello();
console.log(result) 

//FUNCIONA QUE RETORNA OTRA FUNCIÓN

function hello(){
    return function(){
        return 'hola soy la función 2';
    }
}
 
console.log(hello()()); 


//MULTIPARÁMETROS
function add(x,y=0){

    if(y===undefined){
        y=O
    }
    console.log(x+y);
}
add(5,undefined); 


//PARÁMETRO DE TIPO CADENA
function add(name){
    console.log('Hola' +name);
}
add ("Clase 35"); */


//OBJETOS
const user = {
    nombre: 'Elias',
    appellidoP: 'Plutarco',
    appellidoM: 'Calles',
    edad: 17,
    direccion: {
        calle: 'Playa caleta',
        no: 4342,
        colonia: 'Roma',
        delegación: 'Iztapalapa'
    }, 
    amigos: ['Raul','María'],
    activo: true
}

function cosas(x, y, z){
    console.log(x,y,z)
}
cosas(user.nombre, user.appellidoP,user.appellidoM )

function activ(){
    alert(user.activo)
}
setTimeout(activ, 2000);

//consola nombre apellidoP, apellidoM
//alert activo
//consola edad
//alert calle, numero, colonia, delegación
//consola amigos

