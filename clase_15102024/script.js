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
 
console.log(hello()()); */


//MULTIPARÁMETROS
function add(x,y=0){

    if(y===undefined){
        y=O
    }
    console.log(x+y);
}
add(5,undefined);