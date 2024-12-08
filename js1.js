/*Armo un array de objetos que seran los botones de mi menu. Cada objeto
tiene una propiedad y un valor. En este caso el nombre de cada boton y
el nombre del enlace.A uno de los botones le agrego un submenu. */
/*Elijo uno de los botones(obejtos en java)donde va el submenu y incrusto
un array con los elemenos que tiene el submenu*/
const menuBotones=[
{names:'Inicio',link:'https://www.primeraplana.com.ar/'},
{names:'Productos1',link:'#',subMenu:[
{names:'SubMenu1',link:'#'},
{names:'SubMenu2',link:'#'}
]},
{names:'Productos2',link:'#'},
{names:'Contacto',link:'#'}
]

/*creamos una funcion que agregue el menu con el submenu al div del html
menuContenedor*/

function crearMenu(){
/*selecciono el id que va a contener el menu*/
const menuContenedor=document.querySelector('#menuContenedor');
/* vamos a borrar el contenido de div y evito repeticiones.*/
menuContenedor.innerHTML='';
/*contruimos el menu a traves del array de objetos menuBotones*/
/*agregar la lista principal*/
const menuPrincipal=document.createElement('ul');
menuPrincipal.classList.add('menu-principal');


menuBotones.forEach(boton=>{
/*agregar un div que contenga botones principales*/
const botonPrincipal=document.createElement('div');
botonPrincipal.classList.add('menu-boton');
/*agregar un enlace al boton principal*/
const link=document.createElement('a');
/* a la etiqueta a que contiene el enlace le agregamos texto y
ruta del enlace. Texto y enlace estan guardados en el array*/
link.textContent= boton.names;
link.href=boton.link;
link.classList.add('menu-link');
/*agrego la estructura creada al div menuContenedor*/

botonPrincipal.appendChild(link);

/*vamos a agregar al boton correspondiente el submenu*/

if(boton.subMenu){ const subMenu=document.createElement('ul');
subMenu.classList.add('submenu');
/*vamos a construir el submenu= eslabon de la lista y enlace del eslabon.*/
boton.subMenu.forEach(subBoton=>{
const subMenuBoton=document.createElement('li');
const subLink=document.createElement('a');
subLink.textContent=subBoton.names;
subLink.href=subBoton.link;
subLink.classList.add('submenu-link');
subMenuBoton.appendChild(subLink);
subMenu.appendChild(subMenuBoton);
}
);

botonPrincipal.appendChild(subMenu);
}
menuPrincipal.appendChild(botonPrincipal);
}
);
 menuContenedor.appendChild(menuPrincipal);
}

/*ARMAMOS UNA FUNCION QUE CARGA TODO EL CODIGO A LA PAGINA*/

window.onload=()=>{crearMenu();};


/*EVENTOS: son respuestas que aplica javascript a acciones determinadas*/

let btn=document.querySelector('#btn');
/* llamado al evento a traves de metodo addEventListener y luego armo
la accion: ('callbak',funcion)*/
/*btn.addEventListener('click',function(){alert('Hola a todos');});
/* al pasar el raton por el boton elegido me genera una respuesta*/
/*let btn1=document.querySelector('#btn1');

btn1.addEventListener('mousemove',function(){console.log('llame al boton 2');})*/
/*hago doble click con el mouse sobre el boton me genera uan respuesta*/
/*let btn2=document.querySelector('#btn2');
btn2.addEventListener('dblclick',dobleclick);

function dobleclick(){

console.log('Hice doble click sobre el boton2');	
};
/*mouseup cuando hago click mantengo apretado al solter se genera la respuesta*/
/*let btn3=document.querySelector('#btn3');

btn3.addEventListener('mouseup',function(){alert('Dejo el boton apretado');});

let btn1=document.querySelector('#btn1');

btn1.addEventListener('mousemove',cambiocolor);

function cambiocolor(){

btn1.style.background='blue';
btn1.style.color='white';

}

btn1.addEventListener('mouseleave',function(){
btn1.style.background='red';
btn1.style.color='black';

})

let botonCambiarColor=document.querySelector('#dark-mode');
let body=document.querySelector('body');

botonCambiarColor.addEventListener('click',cambiarModoColor);

function cambiarModoColor(){
body.classList.toggle('darkmode');
if(body.classList.contains('darkmode'))
{
botonCambiarColor.innerText='CAMBIAR LIGTH MODE';
}
else{
	botonCambiarColor.innerText='CAMBIAR DARK-MODE';
}
}

/* a traves de un metodo de array voy a recorrer los botones de una botonera*/

const btns=document.querySelectorAll('button');

btns.forEach((boton)=>{
boton.addEventListener('click',function(){
Swal.fire({
  title: "Envio Correcto",
  text: "Usted envio correctamente los datos.",
  icon: "success"
});

})} );

/*EVENTOS DE FORMULARIOS*/

/*EVENTO INPUT: trabaja dentro de los input de HTML*/
/*
const alertaForm=document.querySelector('#alerta-form');
const inputNombre=document.querySelector('#input-nombre');
/*funcionamiento del input*/
/*alertaForm.addEventListener('input',()=>{console.log('Hola');})*/
/*reproducir la escritura del input*/
/*alertaForm.addEventListener('input',()=>{console.log(inputNombre.value);})*/
/*Comprueba el envio de datos del submit
alertaForm.addEventListener('submit',()=>{console.log(inputNombre.value);})
*/
/*
alertaForm.addEventListener('submit',(e)=>{
e.preventDefault();/*contrarestra la propiedad de cualquier metodo de java*/
/*console.log(inputNombre.value);/*captura los datos del input*/
//})

/*Capturar datos de un formulario*/

const form=document.querySelector('#alerta-form');

form.addEventListener('submit',function(event){
event.preventDefault();/*evitamos la propiedad submit de envio de datos del formulario*/
const nombre=document.querySelector('#input-nombre').value;
/*llamo al input con su id y captura el valor con la propieda .value*/
const apellido=document.querySelector('#input-apellido').value;
/*llamo al segundo input y captura su valor*/
console.log('Nombre: '+ nombre);
console.log('Apellido: '+ apellido);
form.reset();

});

/*Storage:permite almacenar datos de manera local en el navegador.
localStorage:se almacena en el navegador de forma indefinida.
SessionStorage:la informacion se almacena hasta que el usuario
cierra la ventana.
Sintaxis: localStorage.setItem(clave,valor);
setItem: agrega elementos al Storage.
getItem: que trae el elemento accedemos al valor o la informacion.
clave:da nombre al elemento.
valor:contenido que va a tener el elemento.*/

localStorage.setItem('bienvenido','Bienvenidos al curso');

let mensaje=localStorage.getItem('bienvenido');

console.log(mensaje);

sessionStorage.setItem('numeros',[1,2,3,4]);

let listaNum=sessionStorage.getItem('numeros');

console.log(listaNum);
/* guardamos el valor dentro de la variable, luego almacenamos la variable,
y retomamos la informacion con getItem y llamando a una segunda variable*/
let user='Agustin';
localStorage.setItem('usuario',user);

let userLs=localStorage.getItem('usuario');

console.log(userLs);

/* ahora el usuario genera el valor de la variable*/

let ingresoNombre=prompt('Ingrese su nombre');
 localStorage.setItem('usuario-nuevo',ingresoNombre);

let nombreIngresado=localStorage.getItem('usuario-nuevo');

console.log(nombreIngresado);

/* removeItem: metodo para borrar datos del Storage*/

localStorage.removeItem('usuario');
localStorage.clear('numeros');

/*Almacenar Objetos*/

const user1={
nombre:'Roberto',
edad:110,
apellido:'Galan'
}

localStorage.setItem('usuario-ingresado',JSON.stringify(user1));

const usuarioIngresado=JSON.stringify(user1);

localStorage.setItem('usuario-ingresado',usuarioIngresado);



/*el objeto se guarda de manera literal para ver la informacion que guarda
ese objeto debemos transformarlo. Para esto utilisamos Json.
Javascript Object Notation. transforma los datos de los objetos guardados
en texto plano al enviarlo a la memoria.
springify: metodo asociado a JSON transforma al objeto en parametro
y lo devuelve en forma de texto plano.
parse:transforma el texto de recibe de JSON y lo devuelve como objeto.*/



/*GUARDAMOS ARRAY DE OBJETOS*/

const productosNuevos=[
{id:1,nombre:'Silla',precio:1500},
{id:2,nombre:'Mesa',precio:2400},
{id:3,nombre:'Sillon',precio:3500}
];

localStorage.setItem('productos-Nuevos',JSON.stringify(productosNuevos));

const verProductosNuevos=JSON.parse(localStorage.getItem('productos-Nuevos'));

console.log(verProductosNuevos);

/*Bibliotecas
Son bloques de codigo prediseñado que nos termiten darle un estilo a 
estructuras fijas de java o mejorar acciones que tiene javascritp
se incorporan al diseño a traves de archivos llamados CDN*/

