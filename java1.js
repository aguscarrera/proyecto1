/*let nombre= informacion.
let array=[elemento1,elemento2,elemento3,etc];

let objeto={
propiedad/key: valor,
propiedad1/key1:valor,
propiedad3/key:key,
}*/

/*const perfil={
nombre:'Agustin',
edad: 46,
nacionalidad:'Argentina',

}*/

/*const productos=[];
funcion que permite agregar objetos al array vacio.
function agregarProductos(nombre,tipo){
let producto={nombre,tipo};
productos.push(producto)
}
llamado de funcion.
agregarProductos('Buzo','lana');
agregarProductos('Remera','lino');
chequeamos con el console.log
console.log(productos);*/

/*const perfiles=[];

function agregarPerfil(){
    let nombre=prompt('Ingrese su Nombre');
    let edad=parseInt(prompt('Ingrese su edad'));
    let perfil={nombre,edad};
    perfiles.push(perfil);

}

agregarPerfil();
console.log(perfiles);*/

/*const perfiles=[];

function agregarPerfil(){
let nombre=prompt('Ingrese su nombre o "salir" para ingresar a la pagina.');
if(nombre==="salir"){
return;
}
let edad=parseInt(prompt('Ingrese su edad '));
let perfil={nombre,edad};
perfiles.push(perfil);
agregarPerfil();

}

agregarPerfil();

console.log(perfiles);*/

/*class perfil{
constructor(nombre,apellido,dni){
this.nombre=nombre;
this.apellido=apellido;
this.dni=dni;

}
}

const perfil1= new perfil('Agustin','Carrera',26184083);
const perfil2= new perfil('martin','garcia',234596868);
console.log(perfil1);
console.log(perfil2);*/
/*
class Perfil{
constructor(nombre,edad,pais){
this.nombre=nombre;
this.edad=edad;
this.pais=pais;
this.saludar=function(){

console.log('Hola soy '+ this.nombre + ' y tengo '+ this.edad+' '+this.pais)
};
}
}

const perfil1= new Perfil('Roberto',120,'Argentina');
const perfil2= new Perfil('Agustin',46,'Brasil');

perfil1.saludar();
perfil2.saludar();
*/

/*funciones constructoras son funciones que nos permiten crear objetos
son funciones parecidas a las class.*/

/*function Perfil(id,apellido,domicilio){
this.id=id;
this.apellido=apellido;
this.domicilio=domicilio;
this.saludar=function(){
  console.log('Su id es ' + this.id +',' + 'Apellido '+ this.apellido + ' y morando en: '+this.domicilio);
}

}

const person1= new Perfil(1,'Galan','Cementerio Chacarita');

person1.saludar();*/

/*class Producto {
constructor(id,nombre,precio){
this.id=id;
this.name=nombre;
this.price=precio;
}
mostrarProducto() {
console.log('Este producto tiene este codigo: '+ this.id);
console.log('Nombre del producto: '+ this.name);
console.log('El precio es: '+ this.price);
}
precioFinal(tarifa){
const precioFinal=this.price * tarifa;
console.log('El precio Final es: '+ precioFinal);

}
}

let productos=[];

productos.push(new Producto(1,'Iphone16',1800));
productos.push(new Producto(2,'SamsungA20',900));
productos.push(new Producto(3,'MotorolaRazer',750));
productos.push(new Producto(40,'Huawei10',500));

productos.forEach((producto)=>{
producto.mostrarProducto();
producto.precioFinal(1.2);
console.log('-----------------------------------------')
});*/

/*funciones de orden superior recibir o traducir o retormarlo como
parametro.
2 tipos funcion dentro de una funcion y utilizar una funcion como 
parametro.

*/

/*forEach recorrer un array y ejecutar un elemento o todos 
los elementos del array. Aplicar a cada elemente la funcion
que esta dentro del parametro.*/

const numeros=[12,21,34,48,5];

const animales=['perro','gato','puma','tortuga'];

const productos=[
{nombre: 'Mesa' ,precio:35000},
{nombre:'Silla de Plastico',precio:12000},
{nombre:'Silla de Madera',precio:20000},
{nombre:'Ventana',precio:30000},
{nombre:'Sillon',precio:40000},

];

numeros.forEach((numero) => 

  console.log(numero));


productos.forEach((producto)=>
{
console.log(producto);
console.log(producto.nombre);
console.log(producto.precio);

});

/* find() recorrer el array y retomar el primer elemento de
ese array que cumple con una condicion.Solo el primero.
Recibe una todos los elementos y la condicion que establezco
en esa funcion.
La respuest que trae es TRUE/FALSE.
*/

const animal=animales.find((animal)=>animal==='murcialago');

console.log(animal);

const elegirProducto= prompt('Ingrese el nombre del producto buscado');

console.log(

productos.find((producto)=>producto.nombre===elegirProducto));

/*filter() recorrer el array y retomar uno nuevo con los objetos
que coinciden con la condicion.Solo trae true.*/

const cat=animales.filter((animal)=> animal==='gato');

console.log(cat);

const chair=productos.filter((producto)=>producto.nombre==='Silla');

console.log(chair);

const chairs=productos.filter((producto)=>producto.nombre.includes('Silla'));

console.log(chairs);

/*some() recorre el array y la respuesta a la condicion es
true o false.*/

const animals=animales.some((animal)=> animal==='zorro');

console.log(animals);

const selvas=animales.some((animal)=>animal==='gato');

console.log(selvas);


/*map() recorre el array y transforma los elementos
del array original. Se genera un objeto nuevo*/

const nombres=productos.map((producto)=>producto.nombre);

console.log(nombres);

const precioNuevo=productos.map((producto)=>
{
  return {
nombre:producto.nombre,
precio:producto.precio * 1.5,
}
});

console.log(precioNuevo);

/* reduce() recorre el array y retomar un valor luego de que
la funcion haga una operacion*/

const totalSuma=numeros.reduce((acumulador,numero)=>

acumulador + numero,0);

console.log(totalSuma);

const totalCarrito=productos.reduce((acumulador,producto)=>

acumulador + producto.precio,0);

console.log(totalCarrito);


productos.forEach((producto)=>
  console.log('El producto '+ producto.nombre+' y tiene un valor '+ producto.precio));

const prices= productos.filter(producto=>producto.precio>=1200);
console.log(prices);

productos.filter((producto)=>producto.precio >= 1200)
.forEach((producto)=>console.log('estos productos'+ producto.nombre+' son mayores a 12000'+ producto.precio));

const numeroDecimal1=1.25;
const numeroDecimal2=1.75;

/*DOM: Document Object Model.
Nodo Raiz: Head y Body.
Nodo: etiquetas de html.

5 Nodos:1_Document: nos permite entrar al Dom.*/

console.log(document.body);

/* Nodo2: Element: representa cada una de las etiquetas de Html*/

/* Nodo3: Atributos/Attr: valores que tienen las etiquetas.
Nodo4:Text: etiquetas de html que tienen texto.
Nodo5:Comment:comentarios que deja el programador.
dentro del codigo*/

/*Metodos de entradas al DOM.
-getElementById: este metodo relaciona el html con java 
a traves de un atributo llamado id*/

let galeria=document.getElementById('galeria');

console.log(galeria);

/*-getElementsByClassName:relaciona html con java a traves
del atributo class*/

/*let box=document.getElementsByClassName('box');

console.log(box);*/

let parrafo=document.getElementsByClassName('parrafo');

console.log(parrafo);

let equipos=document.getElementsByClassName('equipos');

console.log(equipos);

console.log(equipos[0].innerHTML);
console.log(equipos[1].innerHTML);
console.log(equipos[2].innerHTML);

let parrafos=document.getElementsByClassName('parrafo');

console.log(parrafos);

console.log(parrafos[0].innerHTML);
console.log(parrafos[1].innerHTML);

/*-getElementsByTagName:utiliza los nombres de las etiquetas
para relacionar html con java.*/

let h1=document.getElementsByTagName('h1');

console.log(h1);
/* vamos a recorrer una estructura del DOM como si fuera
un array. Para eso vamos a utilizar for of*/

for(equipo of equipos)
  {console.log(equipo.innerHTML)};

/* querySelector relacionar html y java a traves 
de etiquetas de html utilizando la sintexis de Css*/

let teams=document.querySelectorAll('.equipos');

console.log(teams);

let titulos=document.querySelectorAll('h1');


console.log(titulos);
/*forEach recorre como un array combinado con querySelectorAll*/
teams.forEach(team=>console.log(team.textContent));


titulos.forEach(titulo=>console.log(titulo.textContent));
/*classList metodo nos trae el conjunto de class de un elemento*/

const box=document.querySelector('.box');

/*Agregar y sacar class a una etiqueta de html*/

console.log(box.classList);

box.classList.add('box2');
box.classList.remove('box2');

 /*innerHTML: Nos permite ver y cambiar elementos del DOM de html*/

let box2=document.querySelector('.box');

box2.innerHTML= '<h1> Hola esta es una nueva etiqueta</h1><p>Es un ciclo while que se encuentra en dentro de otro ciclo while.Repite iteraciones dentro de otras iteraciones.El ciclo externo controla el numero de repeticiones del ciclo interno.El ciclo interno se ejecuta entero completo en cada vuelta del ciclo externo.</p>';

console.log(box2.innerHTML);
/*innerText nos permite ver y cambiar texto dentro de las etiquetas.*/

let box3=document.querySelector('.box');

box3.innerText='Este curso es de lenguaje Javascript y se cursa los martes y jueves.'

console.log(box3.innerText);

/*createElement: crea nodos.*/

let boxing=document.createElement('div');

boxing.innerHTML='<h2>Este es el nuevo elemento de html</h2>';

document.body.append(boxing);
/*armar un array. Puede  ser vacio.*/

const cuadros=['Douglas Haig','Boca Juniors','Gimnasia'];
/*accedemos a lista que vamos a manipular a traves del DOM*/
let listaDesordenada=document.querySelector('ul');
/*recorremos el array por el metodo forEach y agregamos nuevos
eslabones a la lista*/
cuadros.forEach(cuadroNew=>{
/*variable creamos un elemento li*/
const cuadro=document.createElement('li');
/*agregamos el texto de ese eslabon de la lista*/
cuadro.innerText=cuadroNew;
/*le damos la orden que agregue a la lista el eslabon*/
listaDesordenada.appendChild(cuadro);
}
);
/*Ahora agregamos el valor que va a tener ese eslabon*/

const nuevoCuadro=document.createElement('li');
nuevoCuadro.innerText='Argentinos Juniors';
listaDesordenada.appendChild(nuevoCuadro);

const nuevoCuadro1=document.createElement('li');
nuevoCuadro1.innerText='Juventus';
listaDesordenada.appendChild(nuevoCuadro1);






