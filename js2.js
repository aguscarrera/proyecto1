const baseDatos=[
{id:1,nombre:'Silla',precio:1200},
{id:2,nombre:'Sillon',precio:2000},
{id:3,nombre:'Mesa',precio:3000}
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
const promesa= true;
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
	li.textContent=`${item.nombre} -${item.precio} `;
	lista.append(li);

});
};
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
