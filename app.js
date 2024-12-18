const menuBotones=[
{names:'Inicio',link:'#title1'},
{names:'Productos1',link:'#',subMenu:[
{names:'SubMenu1',link:'#'},
{names:'SubMenu2',link:'#'}
]},
{names:'Productos2',link:'#'},
{names:'Contacto',link:'#'}
];
function crearMenu(){
const menuPrincipal=document.createElement('div');
menuPrincipal.classList.add('menu-principal');
menuBotones.forEach(boton=>{
/*agregar un div que contenga botones principales*/
const botonPrincipal=document.createElement('div');
botonPrincipal.classList.add('menu-boton');
/*agregar un enlace al boton principal*/
const link=document.createElement('a');
link.textContent= boton.names;
link.href=boton.link;
link.classList.add('menu-link');
botonPrincipal.appendChild(link);
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
 const menuContenedor=document.querySelector('#menuContenedor');
if(menuContenedor){
menuContenedor.appendChild(menuPrincipal);}
else{console.error('El contenedor con ID menuContenedor no existe en HTML.');}
}




/*ARMAMOS UNA FUNCION QUE CARGA TODO EL CODIGO A LA PAGINA*/



const productosNews=[
{id:1,nombre:'Iphone14',precio:1200,imagen:'Imagenes/am.png'},
{id:2,nombre:'Iphone15',precio:1300,imagen:'Imagenes/oasis.jpg'},
{id:3,nombre:'Iphone16',precio:1400,imagen:'Imagenes/stone.jpg'},
{id:4,nombre:'IphonePro16',precio:1500,imagen:'Imagenes/stone.jpeg'}
];

function crearGalerias(){
const galeria1=document.querySelector('.galeria1');
const galeria2=document.querySelector('.galeria2');
productosNews.forEach((producto,posicion)=>{
if(posicion<2){
	agregarProducto(galeria1,producto);
}else{agregarProducto(galeria2,producto);}

});
};
function agregarProducto(contenedor,producto){
const item=document.createElement('li');
item.innerHTML=`    
<img src="${producto.imagen}" alt="${producto.nombre}">
<h3>${producto.nombre}</h3>
<p> Precio:$${producto.precio}</p>
<button class="btnComprar"> Comprar</button>
` ;
item.querySelector('.btnComprar').addEventListener('click',
	()=>{agregarCarrito(producto)});

contenedor.appendChild(item);

 }

 function agregarCarrito(producto){
const NewCarrito=JSON.parse(localStorage.getItem('carrito'))|| [];
NewCarrito.push({
id:producto.id,
nombre:producto.nombre,
precio:producto.precio,
});
localStorage.setItem('carrito',JSON.stringify(NewCarrito));
setTimeout(()=>{

window.location.href='carrito.html';
},3000);
};



 
window.onload = () => {
    crearMenu();
    crearGalerias();
};
