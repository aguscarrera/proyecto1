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
ese array que cumple con una condicion.
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
# Mi Proyecto
