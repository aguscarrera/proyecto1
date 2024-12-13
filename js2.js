/*Asincronia 2 metodos. setTimeOut: permite realizar acciones asincronicas.Tiene 2 parametros:
(callback,valor numerico).Valor numerico es tiempo.
el compartamiento de javascript es sincronico. Si algo falla de funcionar todo el bloque.*/
console.log('Hola a todos');
console.log('Hola');/*si el console.log(sasacasa); es error y se corta el flujo*/
console.log('Bienvenidos');

/*console.log('Hola');
setTimeout(()=>{
	console.log('Estoy por la mitad'),3000}
);

console.log('Chau');
/*setInterval: la unidad de tiempo es el intervalo para la repeticion.Repite las 
ordenes de manera reiterada*/
/*setInterval(()=> {
console.log('Hola');
console.log('Chau');
},2000);*/

/*no corta*/
let contador=0; /*arranca el contador de intervalos desde 0*/
/*const intervalo= setInterval(()=>{
contador++;/*sumamos una unidad*/
/*console.log(contador);},2000);
/*debemos cortar el loop que produce el contador.para eso agregamos clearInterval*/
const intervalo= setInterval(()=>{
contador++;
console.log(contador);
if(contador===5){
clearInterval(intervalo);
console.log('El contador se freno.');
}
},3000);

/*Promise es el metodo que trae un objeto a futuro y traemos info.
ej: un array. Sintaxis: new Promise((resolve,reject)=>{});*/
const eventoFuturo=()=>{
	return new Promise((resolve, reject) => {
		
	});
};

console.log(eventoFuturo());


const baseDatos=[
{id:1,nombre:'Silla',precio:1200,imagen:'Imagenes/stone.jpeg'},
{id:2,nombre:'Sillon',precio:2000,imagen:'Imagenes/oasis.jpg'},
{id:3,nombre:'Mesa',precio:3000,imagen:'Imagenes/am.png'}
];
/*manejar el tiempo de carga de los productos desde el storeage 
al html*/
/*Promise: sera al metodo que maneja la carga de los objetos*/
/*const subirProductos=()=>{
return new Promise ((resolve,reject)=>{
setTimeout(()=>{
resolve(baseDatos);
},3000);

})
}

let products=[];

const lista=document.querySelector('.gal');

function mostrarProductos(a){
a.forEach(item=>{
const li=document.createElement('li');
li.id=item.id;
li.textContent=`${item.nombre}- ${item.precio}`;
lista.append(li);
})
};

subirProductos()
.then((res)=>{
products=res;
mostrarProductos(products);

});*/

/*Control de errores: java tiene un metodo que controla errores.
try: ejecutar una tarea especifica. Ej traer datos de un servidor
externo.
catch: si el codigo no se ejecuta o tiene un improvisto atrapa el
error y deja que continue el programa.
finally: ejecutar opciones de codigo mas alla si el try se ejecuta o no*/
/* pedirProductos bloque asincronico que trae datos de una base externa*/
const pedirProductos=()=>{
return new Promise((resolve,reject)=>{
setTimeout(()=>{
const promesa= true;/*cambiamos a false la promesa no se cumple*/
if(promesa){
resolve(baseDatos);
}else{reject('Fallo en la carga del producto.');}
},3000);
});
};

let products=[];

const lista=document.querySelector('.gal');

function mostrarProductos(a){
lista.innerHTML='';
a.forEach(item=>{
const li=document.createElement('li');
li.id=item.id;
li.innerHTML=`                  
<div class="pro">
<img src="${item.imagen}" alt="${item.nombre}" style="width:180px;height:auto";>
<h3>${item.nombre}</h3>
<p> Precio:$${item.precio}</p>
<button class="botonComprar"> Agregar Carrito</button>
</div>
 `;
 lista.appendChild(li);
});}
/*try-catch-finally es manejar la promesa*/
async function cargarProductos(){

try{
products= await pedirProductos();
mostrarProductos(products);
}
catch(error){
lista.innerHTML=`<li style= "color:red";>${error} </li>`;

}
finally{
console.log('Proceso de carga correcto');


}

};

cargarProductos();



