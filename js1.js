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


const btnPrincipal=document.querySelector('#btnPrincipal');

btnPrincipal.addEventListener('click',function(){alert('Hola a todos');});


