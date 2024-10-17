document.title = 'Clase de JS';
console.log(document.title);

const h1 = document.createElement("h1");
h1.textContent = "Hola";
document.body.appendChild(h1);

//crear contenedor principal para el formulario
const container = document.createElement('div');
container.style.margin = '20px'

//crear titulo
const title = document.createElement('h2');
title.textContent = "Iniciar sesión";
container.appendChild(title);

// crear el formulario
const form = document.createElement('form');

const username = document.createElement('label');
username.textContent = "Nombre de usuari@";
const usernameInput = document.createElement('input');
usernameInput.type = 'text';
username.required = true;  

form.appendChild(username);
form.appendChild(usernameInput);

//CREAR CAMPO DE CONTRASEÑA
const passwordLabel = document.createElement('label');
passwordLabel.textContent = "Contraseña";
const paswordInput = document.createElement("input");
paswordInput.type= 'password';
paswordInput.required = true;
form.appendChild(passwordLabel);
form.appendChild(paswordInput);

//crear boton de envio
const submtiBoton = document.createElement('button');
submtiBoton.textContent = 'Iniciar sesión';
form.appendChild(submtiBoton);

//Mensaje de respuesta
const message = document.createElement('p');
container.appendChild(form);
container.appendChild(message);

//AGREGAR EL CONTENDEDOR AL CUERPO DEL DOCUMENTO
document.body.appendChild(container);

//datos del inicio de sesion predefinida
const validauser = 'Carlos'
const validarPasword='2589'

form.addEventListener('submit', (event) => {
    event.preventDefault();

    //validar el nombre y el password
    if(usernameInput.value === validauser && paswordInput.value===validarPasword){
        message.textContent= 'Bienvenido'
    }
});