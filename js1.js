/*Armo un array de objetos que seran los botones de mi menu. Cada objeto
tiene una propiedad y un valor. En este caso el nombre de cada boton y
el nombre del enlace.*/

const menuBotones=[
{names:'Inicio',link:'#'},
{names:'Productos1',link:'https://github.com/aguscarrera/java1'},
{names:'Productos2',link:'#'},
{names:'Contacto',link:'#'}
];

/* armamos una funcion que cree un menu nuevo con los elementos del array*/

function crearMenu(){
/*Selecciono el div que va a contener el menu. Entro al dom de html*/
const menuContenedor=document.querySelector('#menuContenedor');

/* creamos la lista con la etiqueta ul que contendra los elementos
li*/
const menu=document.createElement('ul');
/* agrego un id a la lista ul para darle estilo con css*/
menu.id='menu';
/*armar un forEach que crea cada elemento del menu con la etiqueta li*/

menuBotones.forEach(boton=>{
/*creamos los eslabones de la lista*/
const listaBotones=document.createElement('li');
/*contruimos el enlace del boton*/
const link=document.createElement('a');
/*creo el contenido de la etiqueta li y la etiqueta a*/
/*textContent= nombra a cada uno de los botones que tiene enlace*/
link.textContent=boton.names;
link.href=boton.link;
/*agregar a(enlace)al li (eslabon)y el eslabon a lista*/
listaBotones.appendChild(link);
menu.appendChild(listaBotones);

});
/*agregar el menu al div*/
menuContenedor.appendChild(menu);
};



/*funcion que carga el menu creado en java al mismo tiempo que el html*/

window.onload= crearMenu;


/*agregar un elemento nuevo a la lista*/

function agregarBoton(name,link){
/*agrego objeto al array con el metodo push.key:valor*/
menuBotones.push({names:name,link:link});
/*creo una funcion que actualiza la lista original*/
actualizarMenu();

};

function actualizarMenu(){
const menuContenedor=document.querySelector('#menuContenedor');
menuContenedor.innerHTML='';
crearMenu();
}

window.onload=()=>{
crearMenu();
agregarBoton('Carrito de Compras','#');
}


